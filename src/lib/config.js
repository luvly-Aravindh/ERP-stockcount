/* Site-wide settings. The Desk values can be overridden per environment with
   VITE_DESK_URL / VITE_DESK_API_KEY (see .env.example). */
export const CONFIG = {
  deskUrl: import.meta.env.VITE_DESK_URL || "https://deskbackend.getnos.io/v1/lead",
  deskKey: import.meta.env.VITE_DESK_API_KEY || "lh_5fvB_xJRZH216NWDhEZerpWBbMxZ7atGnHGcDbbY4c0",
  deskTimeoutMs: 15000,
  /* subject line of the notification email Desk sends for each lead */
  deskSubject: "New Willworks ERP Form Submission",
  source: "stock-gap-audit",
  variant: "audit-review-10plus-v3",
  bookingUrl: "https://share.synamate.com/widget/bookings/success-with-stockount-campaign",
  thankYouUrl: "thank-you.html",
  notFitUrl: "not-a-fit.html",
  diwaliUntil: "2026-11-10T00:00:00+05:30",
  pixelId: "2121133831967217",
  wistiaId: "jn1edh7m9o",
  whatsappNumber: "919600338814",
};
