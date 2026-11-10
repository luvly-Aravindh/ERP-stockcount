import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { CONFIG } from "../../lib/config";
import { submitLead } from "../../lib/desk";
import { track, trackCustom } from "../../lib/pixel";
import { isFit, knockCheck } from "../../lib/qualify";
import { region, utmParams } from "../../lib/region";
import { BOOKING_STEP } from "./steps";

const QualifierContext = createContext(null);

export function useQualifier() {
  const ctx = useContext(QualifierContext);
  if (!ctx) throw new Error("useQualifier must be used inside <QualifierProvider>");
  return ctx;
}

const SUBMIT_ERROR = "We could not save your details. Please check your connection and try again.";

/**
 * Owns the qualifier flow: open/close, the current step, the answers so far,
 * the instant knock-outs, and sending the lead to Desk.
 */
export function QualifierProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ language: "English" });
  const [waiting, setWaiting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [booking, setBooking] = useState({ frameSrc: undefined, bookedHref: "#" });
  const lastFocus = useRef(null);
  const timers = useRef([]);

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const open = useCallback(() => {
    lastFocus.current = document.activeElement;
    setIsOpen(true);
    trackCustom("QualifierOpen", { region });
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    if (lastFocus.current) lastFocus.current.focus({ preventScroll: true });
  }, []);

  /* lock page scroll and listen for Escape while the modal is open */
  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  /* a non-fit answer goes straight to the not-a-fit page */
  const knockOut = useCallback((why, a) => {
    setWaiting(true);
    trackCustom("NotAFit", { reason: why, region, locations: a.locations || "", skus: a.skus || "" });
    later(() => {
      window.location.href = `${CONFIG.notFitUrl}?why=${why}&r=${region}`;
    }, 450);
  }, []);

  const answer = useCallback(
    (key, stepNumber, value) => {
      const next = { ...answers, [key]: value };
      setAnswers(next);
      const why = knockCheck(key, next);
      later(() => (why ? knockOut(why, next) : setStep(stepNumber + 1)), 170);
    },
    [answers, knockOut],
  );

  const setLanguage = useCallback((language) => setAnswers((a) => ({ ...a, language })), []);

  const back = useCallback((stepNumber) => setStep(Math.max(1, stepNumber - 1)), []);

  /**
   * Send the lead to Desk. Moves on to the slot picker (or the not-a-fit page)
   * only once Desk has accepted it; on failure the form comes back with an error.
   * `d` is the validated contact details, `honeypot` the hidden bot-trap value.
   */
  const submit = useCallback(
    async (d, honeypot) => {
      const res = isFit(answers);
      const payload = {
        subject: CONFIG.deskSubject,
        source: CONFIG.source,
        variant: CONFIG.variant,
        region,
        page: window.location.href.split("?")[0],
        name: d.name,
        email: d.email,
        phone: d.phone,
        company: d.company,
        city: d.city,
        companyWebsite: d.site,
        locations: answers.locations,
        skus: answers.skus,
        industry: answers.industry,
        auditOwner: answers.auditOwner,
        erp: answers.erp,
        goal: answers.goal,
        role: answers.role,
        attendee: answers.attendee,
        language: answers.language,
        qualified: res.fit,
        disqualifyReason: res.why,
        honeypot,
        ...utmParams(),
      };

      setSubmitError("");
      setWaiting(true);
      try {
        await submitLead(payload);
      } catch (err) {
        console.error("[desk]", err);
        setWaiting(false);
        setSubmitError(SUBMIT_ERROR);
        return;
      }

      try {
        sessionStorage.setItem("stk_lead", JSON.stringify({ name: d.name, company: d.company, region }));
      } catch {
        /* storage unavailable */
      }
      if (res.fit) track("Lead", { content_name: "audit-review", region });
      else trackCustom("NotAFit", { reason: res.why, region });

      const parts = d.name.split(/\s+/);
      const first = parts[0];
      if (!res.fit) {
        window.location.href = `${CONFIG.notFitUrl}?why=${res.why}&n=${encodeURIComponent(first)}&r=${region}`;
        return;
      }
      const q = new URLSearchParams({
        first_name: first,
        last_name: parts.slice(1).join(" "),
        email: d.email,
        phone: "+91" + d.phone,
      });
      setBooking({
        frameSrc: `${CONFIG.bookingUrl}?${q.toString()}`,
        bookedHref: `${CONFIG.thankYouUrl}?n=${encodeURIComponent(first)}&r=${region}`,
      });
      setWaiting(false);
      setStep(BOOKING_STEP);
    },
    [answers],
  );

  const value = useMemo(
    () => ({ isOpen, open, close, step, answers, answer, setLanguage, back, waiting, submit, submitError, booking }),
    [isOpen, open, close, step, answers, answer, setLanguage, back, waiting, submit, submitError, booking],
  );

  return <QualifierContext.Provider value={value}>{children}</QualifierContext.Provider>;
}
