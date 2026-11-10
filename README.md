# Stockount audit-review landing page

React 19 + Tailwind CSS 4 (Vite) version of the Stockount "free audit review" landing page,
converted from the original single-file HTML site.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

Deploy the `dist/` folder to any static host. `netlify.toml` already sets the build
command and publish folder for Netlify.

## Pages

| URL               | Entry                       | Page component               |
| ----------------- | --------------------------- | ---------------------------- |
| `/`               | `src/entries/landing.jsx`   | `src/pages/LandingPage.jsx`  |
| `/thank-you.html` | `src/entries/thank-you.jsx` | `src/pages/ThankYouPage.jsx` |
| `/not-a-fit.html` | `src/entries/not-a-fit.jsx` | `src/pages/NotAFitPage.jsx`  |

`?r=tn` on the landing page switches to the Tamil Nadu copy. UTM parameters on the URL
are passed through to Desk with the lead.

## Project layout

```
src/
  index.css               Tailwind setup, design tokens (@theme), keyframes, a few custom utilities
  entries/                one small entry file per HTML page
  pages/                  LandingPage, ThankYouPage, NotAFitPage
  components/
    ui/                   Section, CtaButton, CtaBlock, Footer, VideoFacade (shared by all pages)
    landing/              one component per landing-page section
    qualifier/            the 9-step qualifier modal, contact form and slot picker
  data/proof.js           testimonials, client logos and the proof-section headline
  hooks/                  slot countdown, count-up animation
  lib/
    config.js             Desk endpoint/key, booking URL, pixel id, campaign names
    desk.js               submitLead() — the Desk API call
    validation.js         contact-form rules
    qualify.js            who qualifies (10+ locations or 20,000+ SKUs)
    schedule.js           quarter-close and slot-window dates
    pixel.js              Meta Pixel (not loaded on localhost)
```

## Lead form and the Desk API

The qualifier's last step (`components/qualifier/LeadForm.jsx`) validates the contact details,
then `QualifierProvider` sends everything to Desk through `submitLead()` in `src/lib/desk.js`:

- `POST https://deskbackend.getnos.io/v1/lead` with a `Bearer` key and one JSON field per answer
  (name, email, phone, company, city, companyWebsite, locations, skus, industry, auditOwner, erp,
  goal, role, attendee, language, qualified, disqualifyReason, source, variant, region, page, UTM values).
- The visitor moves on to the slot picker only after Desk accepts the lead
  (a `duplicate` response counts as accepted).
- If Desk rejects the lead, the network fails, or the request takes longer than 15 seconds,
  the form comes back with an error message and the visitor can submit again.

To point at a different Desk workspace, copy `.env.example` to `.env` and set
`VITE_DESK_URL` / `VITE_DESK_API_KEY`, or edit `src/lib/config.js`.

## Styling notes

- Colours, font and animations are Tailwind theme tokens in `src/index.css`
  (`bg-navy`, `text-ink-2`, `animate-cta-pulse`, …).
- The page uses its own breakpoints, written as `min-[760px]:` / `max-[380px]:` variants.
- Tailwind's Preflight reset is deliberately not imported, so browser defaults match the original page.
- Exact values from the original CSS are kept as arbitrary values (`text-[16.5px]`,
  `[box-shadow:…]`) so the rendering is identical.
