import { useState } from "react";
import { Section, Eyebrow, SectionTitle, Lede } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";
import { croreWords, rupees } from "../../lib/format";

/* The stock-value slider is logarithmic: 0..1000 maps to ₹1 crore..₹500 crore. */
const MIN = 1e7;
const MAX = 5e9;
function valueFromSlider(x) {
  const v = MIN * Math.pow(MAX / MIN, x / 1000);
  const step = v < 1e8 ? 1e6 : v < 1e9 ? 5e6 : 5e7;
  return Math.round(v / step) * step;
}

function Slider({ id, label, display, hint, min, max, step, value, onChange, ariaLabel }) {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-[20px]">
      <label htmlFor={id} className="flex justify-between items-baseline gap-[12px] font-bold text-[15px] mb-[10px]">
        {label} <output className="font-extrabold text-navy text-[17px] whitespace-nowrap tabular-nums">{display}</output>
      </label>
      <input
        className="range-slider"
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={ariaLabel}
        style={{ "--p": fill + "%" }}
        onChange={(e) => onChange(+e.target.value)}
      />
      {hint && <p className="text-[13px] text-muted mt-[8px]">{hint}</p>}
    </div>
  );
}

export default function CalculatorSection() {
  const [stock, setStock] = useState(518);
  const [locations, setLocations] = useState(23);
  const [percent, setPercent] = useState(2);

  const value = valueFromSlider(stock);
  const gap = (value * percent) / 100;

  return (
    <Section id="calc" variant="navy">
      <Eyebrow>60-second gap calculator</Eyebrow>
      <SectionTitle>What is your gap costing you?</SectionTitle>
      <Lede>Move the sliders. Start with an honest guess of the gap between your ERP and your shelves.</Lede>
      <div className="max-w-[760px] mt-[30px] mx-auto mb-0 bg-white text-ink rounded-[22px] py-[22px] px-[18px] border-2 border-ink [box-shadow:0_10px_0_var(--color-ink)]">
        <Slider
          id="cVal"
          label="Stock value across all locations"
          display={"₹" + croreWords(value)}
          hint="From ₹1 crore to ₹500 crore"
          min={0}
          max={1000}
          step={1}
          value={stock}
          onChange={setStock}
          ariaLabel="Stock value"
        />
        <Slider
          id="cLoc"
          label="Number of locations"
          display={locations}
          min={5}
          max={200}
          step={1}
          value={locations}
          onChange={setLocations}
          ariaLabel="Number of locations"
        />
        <Slider
          id="cPct"
          label="Your guess of the gap"
          display={percent.toFixed(1) + "%"}
          hint="Stockount customers recover 3 to 5% of inventory value on average within 60 days of going live."
          min={0.5}
          max={8}
          step={0.1}
          value={percent}
          onChange={setPercent}
          ariaLabel="Gap percent"
        />
        <div className="mt-[6px] bg-navy-3 text-white rounded-[16px] py-[20px] px-[16px] text-center">
          <small className="block text-[12px] font-extrabold tracking-[.12em] uppercase text-yellow">Stock that may exist only on paper</small>
          <strong className="block text-[clamp(34px,10vw,56px)] leading-[1.05] font-extrabold mt-[8px] mx-0 mb-[6px] tabular-nums">
            {rupees(gap)}
          </strong>
          <p className="text-[15px] text-[#c8d8e3]">
            That is about <b className="text-white">{rupees(gap / locations)}</b> per location. Your audit review shows where it actually
            sits.
          </p>
        </div>
      </div>
      <CtaBlock meta="Get your real number, free" note="30-minute online call. No card needed." />
    </Section>
  );
}
