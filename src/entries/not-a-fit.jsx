import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import NotAFitPage from "../pages/NotAFitPage";
import { initPixel } from "../lib/pixel";

initPixel();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotAFitPage />
  </StrictMode>,
);
