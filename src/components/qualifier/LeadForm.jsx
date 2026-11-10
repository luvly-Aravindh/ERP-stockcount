import { useState } from "react";
import CtaButton from "../ui/CtaButton";
import Option, { BackButton } from "./Option";
import { useQualifier } from "./QualifierProvider";
import { FORM_STEP, LANGUAGES } from "./steps";
import { digitsOnly, normaliseLead, validateLead } from "../../lib/validation";

const INPUT = "w-full font-sans text-[16px] py-[13px] px-[14px] border-2 text-ink outline-none";

function Field({ name, label, note, error, invalid, children }) {
  return (
    <div className="mt-[14px]">
      <label htmlFor={name ? `f-${name}` : undefined} className="block text-[13.5px] font-bold mb-[6px]">
        {label}
        {note && " "}
        {note && <span className="text-muted font-semibold">{note}</span>}
      </label>
      {children}
      {error && (
        <p id={`f-${name}-error`} className={`text-[12.5px] text-red font-semibold mt-[5px] ${invalid ? "block" : "hidden"}`}>
          {error}
        </p>
      )}
    </div>
  );
}

/** Step 9: contact details. Validates, then hands the lead to the provider to send to Desk. */
export default function LeadForm({ active }) {
  const { answers, setLanguage, back, submit, submitError } = useQualifier();
  const [values, setValues] = useState({ name: "", company: "", phone: "", email: "", city: "", site: "" });
  const [errors, setErrors] = useState({});

  const input = (name, props, radius = "rounded-[12px]") => {
    const invalid = !!errors[name];
    return (
      <input
        id={`f-${name}`}
        name={name}
        value={values[name]}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? `f-${name}-error` : undefined}
        className={`${INPUT} ${radius} ${invalid ? "border-red bg-[#fff8f8]" : "border-line bg-white focus:border-navy"}`}
        onChange={(e) => {
          const v = name === "phone" ? digitsOnly(e.target.value) : e.target.value;
          setValues((s) => ({ ...s, [name]: v }));
          if (invalid) setErrors((s) => ({ ...s, [name]: false }));
        }}
        {...props}
      />
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const lead = normaliseLead(values);
    const result = validateLead(lead);
    setErrors(result.errors);
    if (!result.ok) {
      const el = form.elements.namedItem(result.first);
      if (el) el.focus();
      return;
    }
    const honeypot = (form.elements.namedItem("website") || {}).value || "";
    submit(lead, honeypot);
  };

  return (
    <form className={active ? "block animate-step-in" : "hidden"} data-active={active} noValidate onSubmit={onSubmit}>
      <h3 className="text-[22px] leading-[1.25] tracking-[-.01em]">Where should we send your slot confirmation?</h3>
      <p className="text-[14.5px] text-muted mt-[6px]">On WhatsApp and email. Nothing else.</p>

      <Field name="name" label="Full name" error="Please enter your full name." invalid={errors.name}>
        {input("name", { autoComplete: "name", placeholder: "Your full name" })}
      </Field>
      <Field name="company" label="Company name" error="Please enter your company name." invalid={errors.company}>
        {input("company", { autoComplete: "organization", placeholder: "Your company" })}
      </Field>
      <Field name="phone" label="WhatsApp number" error="Enter a valid 10-digit mobile number." invalid={errors.phone}>
        <div className="flex">
          <b className="flex-none grid place-items-center py-0 px-[12px] border-y-2 border-l-2 border-y-line border-l-line rounded-l-[12px] bg-paper font-bold">+91</b>
          {input(
            "phone",
            { inputMode: "numeric", autoComplete: "tel-national", maxLength: 10, placeholder: "10-digit number" },
            "rounded-r-[12px]",
          )}
        </div>
      </Field>
      <Field name="email" label="Email" note="(any email works)" error="Enter a valid email address." invalid={errors.email}>
        {input("email", { type: "email", inputMode: "email", autoComplete: "email", placeholder: "you@company.com" })}
      </Field>
      <Field name="city" label="City" error="Please enter your city." invalid={errors.city}>
        {input("city", { autoComplete: "address-level2", placeholder: "Where is your head office?" })}
      </Field>
      <Field name="site" label="Company website" note="(optional)">
        {input("site", { inputMode: "url", autoComplete: "url", placeholder: "yourcompany.com" })}
      </Field>
      <Field label="Language for the call">
        <div className="grid grid-cols-[repeat(3,1fr)] gap-[8px]">
          {LANGUAGES.map(([value, label]) => (
            <Option key={value} size="chip" label={label} selected={answers.language === value} onClick={() => setLanguage(value)} />
          ))}
        </div>
      </Field>

      {/* bot trap: real visitors never see or fill this */}
      <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {submitError && (
        <p role="alert" className="mt-[14px] bg-red-soft border border-[#f2b6b8] rounded-[12px] py-[10px] px-[12px] text-[14px] font-semibold text-[#5b1a1c]">
          {submitError}
        </p>
      )}

      <CtaButton variant="submit" type="submit" title="Show me available slots" meta="Next: pick your 30-minute slot" />
      <p className="text-[12.5px] text-muted text-center mt-[12px]">We use these details only to confirm your review.</p>
      <BackButton onClick={() => back(FORM_STEP)} />
    </form>
  );
}
