import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import LandingPage from "../pages/LandingPage";
import { initPixel } from "../lib/pixel";
import { applyRegion } from "../lib/region";

applyRegion();
initPixel();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
