import { createContext, useContext } from "react";

/* Sections on a dark background flip the colour of eyebrows, ledes and CTA notes. */
const DarkContext = createContext(false);
export const DarkProvider = DarkContext.Provider;
export const useDark = () => useContext(DarkContext);

const VARIANTS = {
  white: "",
  paper: "bg-paper",
  navy: "bg-navy text-white",
  dark: "bg-navy-3 text-white",
  final:
    "text-center text-white bg-[radial-gradient(120%_90%_at_50%_0%,#0a5a85_0%,var(--color-navy)_40%,var(--color-navy-3)_100%)]",
};

export function Wrap({ className = "", children }) {
  return <div className={`w-full max-w-[1120px] mx-auto px-[18px] ${className}`}>{children}</div>;
}

export function Section({ id, variant = "white", children }) {
  const dark = variant === "navy" || variant === "dark" || variant === "final";
  return (
    <DarkContext.Provider value={dark}>
      <section id={id} className={`py-[56px] ${VARIANTS[variant]}`}>
        <Wrap>{children}</Wrap>
      </section>
    </DarkContext.Provider>
  );
}

export function Eyebrow({ children }) {
  const dark = useDark();
  return (
    <div className="text-center">
      <span
        className={`inline-block text-[12px] font-extrabold tracking-[.14em] uppercase mb-[10px] ${
          dark ? "text-yellow" : "text-orange"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionTitle({ children }) {
  return <h2 className="text-[clamp(27px,6.6vw,44px)] leading-[1.12] text-center">{children}</h2>;
}

export function Lede({ children }) {
  const dark = useDark();
  return (
    <p className={`text-[17px] text-center max-w-[640px] mt-[14px] mx-auto mb-0 ${dark ? "text-[#c8d8e3]" : "text-ink-2"}`}>
      {children}
    </p>
  );
}
