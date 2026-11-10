import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import ThankYouPage from "../pages/ThankYouPage";
import { initPixel, track } from "../lib/pixel";

initPixel();
track("Schedule", { content_name: "stock-gap-audit" });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThankYouPage />
  </StrictMode>,
);
