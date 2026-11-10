/* Getnos Desk — landing page lead submit
   Call once per form submit. Each answer is its own JSON field.
   Extra / custom keys are saved too (city, role, locations, …). */
import { CONFIG } from "./config";

let submitting = false;

/**
 * @param {Record<string, unknown>} fields flat lead answers (any custom keys OK)
 * @returns {Promise<{ status?: string, leadId?: string, duplicate?: boolean, skipped?: boolean, message?: string }>}
 * @throws {Error} when Desk rejects the lead, the network fails or the request times out
 */
export async function submitLead(fields) {
  if (submitting) return { duplicate: true, skipped: true };
  submitting = true;

  const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timer = setTimeout(() => ctrl && ctrl.abort(), CONFIG.deskTimeoutMs);

  try {
    let res;
    try {
      res = await fetch(CONFIG.deskUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CONFIG.deskKey}`,
        },
        body: JSON.stringify({
          form: "contact",
          honeypot: fields.honeypot || "",
          // Spread ALL form answers — known + custom fields become columns
          ...fields,
        }),
        keepalive: true,
        signal: ctrl ? ctrl.signal : undefined,
      });
    } catch (err) {
      const timedOut = err && err.name === "AbortError";
      throw new Error(timedOut ? "Lead submit timed out" : "Lead submit failed (network error)");
    }

    let data = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    // Desk ignores identical payloads for ~15 min — treat as success
    if (data.duplicate) return data;

    if (!res.ok) {
      throw new Error(data.message || `Lead submit failed (${res.status})`);
    }

    return data; // { status: "success", leadId }
  } finally {
    clearTimeout(timer);
    submitting = false;
  }
}
