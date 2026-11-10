/* Who the audit review is for: 10+ locations, or 20,000+ SKUs, fixing audits now. */
export const LOC_FIT = ["10 to 19", "20 to 49", "50 to 199", "200 or more"];
export const SKU_FIT = ["20,000 to 1 lakh", "Over 1 lakh"];
export const EXPLORING = "Just exploring for now";

export function isFit(a) {
  if (a.goal === EXPLORING) return { fit: false, why: "exploring" };
  if (LOC_FIT.indexOf(a.locations) < 0 && SKU_FIT.indexOf(a.skus) < 0) return { fit: false, why: "small" };
  return { fit: true, why: "" };
}

/** Instant knock-out right after an answer. Returns the reason, or "". */
export function knockCheck(key, a) {
  if (key === "skus" && LOC_FIT.indexOf(a.locations) < 0 && SKU_FIT.indexOf(a.skus) < 0) return "small";
  if (key === "goal" && a.goal === EXPLORING) return "exploring";
  return "";
}
