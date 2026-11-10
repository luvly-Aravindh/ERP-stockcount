import { useEffect, useRef } from "react";
import LeadForm from "./LeadForm";
import Option, { BackButton } from "./Option";
import { useQualifier } from "./QualifierProvider";
import { BOOKING_STEP, FORM_STEP, OPTION_STEPS, TOTAL_STEPS } from "./steps";
import { preDiwali } from "../../lib/schedule";
import logo from "../../assets/img/logo-stockount.webp";

const STEP_ON = "block animate-step-in";
const STEP_TITLE = "text-[22px] leading-[1.25] tracking-[-.01em]";
const STEP_HINT = "text-[14.5px] text-muted mt-[6px]";

/** Full-screen (phone) / centred card (desktop) qualifier: 8 questions, contact form, slot picker. */
export default function QualifierModal() {
  const { isOpen, close, step, answers, answer, back, waiting, booking } = useQualifier();
  const bodyRef = useRef(null);

  /* every step starts scrolled to the top */
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [step, isOpen]);

  /* move focus into the modal when it opens */
  useEffect(() => {
    if (!isOpen) return undefined;
    const id = setTimeout(() => {
      const el = bodyRef.current && bodyRef.current.querySelector('[data-active="true"] [data-opt], [data-active="true"] input');
      if (el) el.focus({ preventScroll: true });
    }, 60);
    return () => clearTimeout(id);
  }, [isOpen]);

  const shown = (n) => !waiting && step === n;
  const counted = Math.min(step, TOTAL_STEPS);
  const progress = step > TOTAL_STEPS ? 100 : Math.max(8, ((counted - 1) / TOTAL_STEPS) * 100 + 6);

  return (
    <div
      className={`fixed inset-0 z-[2000] bg-[rgba(1,15,25,.72)] [backdrop-filter:blur(4px)] items-center justify-center p-0 ${
        isOpen ? "flex" : "hidden"
      }`}
      aria-hidden={isOpen ? "false" : "true"}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="relative bg-white w-full h-full max-h-[100dvh] flex flex-col overflow-hidden min-[640px]:w-[560px] min-[640px]:h-auto min-[640px]:max-h-[92vh] min-[640px]:rounded-[22px] min-[640px]:border-2 min-[640px]:border-ink min-[640px]:[box-shadow:0_12px_0_var(--color-ink)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qTitle"
      >
        <div className="flex-none bg-navy-3 text-white pt-[14px] px-[16px] pb-[12px]">
          <div className="flex items-center justify-between gap-[10px]">
            <img className="h-[22px] w-auto" src={logo} alt="Stockount" />
            <button
              className="bg-[rgba(255,255,255,.1)] [border:none] text-white w-[34px] h-[34px] rounded-[50%] text-[20px] leading-none cursor-pointer"
              type="button"
              aria-label="Close"
              onClick={close}
            >
              ×
            </button>
          </div>
          <div className="h-[8px] rounded-[999px] bg-[rgba(255,255,255,.14)] mt-[12px] overflow-hidden">
            <i
              className="block h-full bg-[linear-gradient(90deg,var(--color-yellow),var(--color-orange))] rounded-[999px] [transition:width_.35s_ease]"
              style={{ width: progress + "%" }}
            />
          </div>
          <div className="flex justify-between text-[12px] font-bold text-[#9fb3c1] mt-[7px]">
            <span>{step > TOTAL_STEPS ? "Last step: pick a slot" : `Step ${counted} of ${TOTAL_STEPS}`}</span>
            <span>Takes 60 seconds</span>
          </div>
        </div>

        <div ref={bodyRef} className="flex-1 overflow-y-auto pt-[22px] px-[18px] pb-[26px] [-webkit-overflow-scrolling:touch]">
          <span id="qTitle" className="absolute left-[-9999px] w-px h-px overflow-hidden">
            Audit review qualifier
          </span>

          {OPTION_STEPS.map((s, i) => {
            const n = i + 1;
            return (
              <div key={s.key} className={shown(n) ? STEP_ON : "hidden"} data-active={shown(n)}>
                <h3 className={STEP_TITLE}>{s.title}</h3>
                {s.hint && <p className={STEP_HINT}>{s.hint}</p>}
                <div className={`grid gap-[10px] mt-[18px] ${s.twoColumns ? "grid-cols-[1fr_1fr]" : ""}`}>
                  {s.options.map((o) => {
                    const [value, label] = Array.isArray(o) ? o : [o, o];
                    return (
                      <Option
                        key={value}
                        label={label}
                        size={s.twoColumns ? "compact" : "default"}
                        selected={answers[s.key] === value}
                        onClick={() => answer(s.key, n, value)}
                      />
                    );
                  })}
                </div>
                {n > 1 && <BackButton onClick={() => back(n)} />}
              </div>
            );
          })}

          <LeadForm active={shown(FORM_STEP)} />

          <div className={`text-center py-[40px] px-[10px] ${waiting ? "block" : "hidden"}`} role="status">
            <div className="w-[44px] h-[44px] rounded-[50%] border-4 border-line border-t-navy mt-0 mx-auto mb-[14px] animate-spinner" />
            <p>
              <b>Checking your answers…</b>
            </p>
          </div>

          <div className={shown(BOOKING_STEP) ? STEP_ON : "hidden"} data-active={shown(BOOKING_STEP)}>
            <span className="inline-flex items-center gap-[8px] bg-green-soft text-[#0f3d22] font-extrabold text-[13px] rounded-[999px] py-[6px] px-[12px] mb-[12px]">
              ✓ You qualify for the audit review
            </span>
            <h3 className={STEP_TITLE}>Pick your 30-minute slot</h3>
            <p className={STEP_HINT}>Choose a time when your audit or inventory head can join.</p>
            <p hidden={!preDiwali} className="bg-[#fff7e0] border border-[#f2cf73] rounded-[12px] py-[10px] px-[12px] text-[14px] font-bold text-[#5a4300] mt-[12px]">
              Slots open right after Diwali. Pick the first one that suits you.
            </p>
            <iframe
              className="w-full h-[min(780px,70vh)] [border:0] rounded-[14px] mt-[14px] bg-paper"
              title="Book your audit review"
              loading="lazy"
              src={booking.frameSrc}
            />
            <a className="block text-center mt-[14px] text-[14px] font-bold text-navy" href={booking.bookedHref}>
              I have booked my slot →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
