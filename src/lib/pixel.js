/* Meta Pixel (Stockount). Loaded once per page; skipped on local dev hosts so
   test visits and test leads do not reach the live pixel. */
import { CONFIG } from "./config";

const LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);

export function initPixel() {
  if (LOCAL || window.fbq) return;
  const fbq = function () {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments);
    else fbq.queue.push(arguments);
  };
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  const tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://connect.facebook.net/en_US/fbevents.js";
  const first = document.getElementsByTagName("script")[0];
  first.parentNode.insertBefore(tag, first);

  fbq("init", CONFIG.pixelId);
  fbq("track", "PageView");
}

/** fbq("track", …) that never throws. */
export function track(event, params) {
  try {
    window.fbq("track", event, params);
  } catch {
    /* pixel blocked or not loaded */
  }
}

/** fbq("trackCustom", …) that never throws. */
export function trackCustom(event, params) {
  try {
    window.fbq("trackCustom", event, params);
  } catch {
    /* pixel blocked or not loaded */
  }
}
