import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Three static entry pages, same URLs as the original HTML site:
//   /               -> landing page
//   /thank-you.html -> after a slot is booked
//   /not-a-fit.html -> when the qualifier screens a visitor out
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // `npm start` serves the built dist/ folder on a hosting platform:
  // listens on all interfaces, on the platform's PORT (3000 if none is set),
  // and accepts requests for whatever domain the site is deployed under.
  preview: {
    host: true,
    port: Number(process.env.PORT) || 3000,
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        thankYou: resolve(import.meta.dirname, "thank-you.html"),
        notAFit: resolve(import.meta.dirname, "not-a-fit.html"),
      },
    },
  },
});
