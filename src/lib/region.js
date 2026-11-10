/* ?r=tn (or ?region=tn) switches the page to its Tamil Nadu copy. */
export const params = new URLSearchParams(window.location.search);

export const region = (params.get("r") || params.get("region") || "").toLowerCase() === "tn" ? "tn" : "in";

export function applyRegion() {
  document.documentElement.setAttribute("data-region", region);
}

/** UTM and click-id parameters present on the URL, passed through to Desk. */
export function utmParams() {
  const out = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"].forEach((k) => {
    if (params.get(k)) out[k] = params.get(k);
  });
  return out;
}

/** Keep only letters and name punctuation from a ?n= value. */
export function cleanName(value) {
  return (value || "")
    .replace(/[^\p{L}\s.'-]/gu, "")
    .trim()
    .slice(0, 30);
}
