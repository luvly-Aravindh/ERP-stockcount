/* Contact-step validation. Order matters: the first failing field gets focus. */
export const LEAD_FIELDS = ["name", "company", "phone", "email", "city"];

const RULES = {
  name: (v) => v.length >= 2 && /[a-z]/i.test(v),
  company: (v) => v.length >= 2,
  phone: (v) => /^[6-9]\d{9}$/.test(v),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
  city: (v) => v.length >= 2,
};

/** Trim / normalise raw input values into the lead's contact details. */
export function normaliseLead(raw) {
  return {
    name: raw.name.trim(),
    company: raw.company.trim(),
    phone: raw.phone.trim(),
    email: raw.email.trim().toLowerCase(),
    city: raw.city.trim(),
    site: raw.site.trim(),
  };
}

/** @returns {{ ok: boolean, errors: Record<string, boolean>, first: string | null }} */
export function validateLead(d) {
  const errors = {};
  let first = null;
  LEAD_FIELDS.forEach((f) => {
    const bad = !RULES[f](d[f]);
    errors[f] = bad;
    if (bad && !first) first = f;
  });
  return { ok: !first, errors, first };
}

/** Digits only, at most 10 — applied as the visitor types the WhatsApp number. */
export const digitsOnly = (v) => v.replace(/\D/g, "").slice(0, 10);
