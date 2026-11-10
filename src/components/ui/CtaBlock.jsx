import CtaButton from "./CtaButton";
import { useDark } from "./Section";
import { useQualifier } from "../qualifier/QualifierProvider";
import { preDiwali } from "../../lib/schedule";

/** CTA button that opens the qualifier modal. */
export function BookButton({ meta = "Free · 30 minutes · your own data", variant, buttonRef }) {
  const { open } = useQualifier();
  return <CtaButton ref={buttonRef} variant={variant} title="Book my audit review" meta={meta} onClick={open} />;
}

/** Small reassurance line under a CTA button. */
export function UnderCta({ children, wide = false }) {
  const dark = useDark();
  return (
    <p
      className={`text-[13.5px] font-semibold leading-[1.35] text-center mt-0 ${
        wide ? "max-w-[600px] mx-auto" : "max-w-[420px]"
      } ${dark ? "text-[#cfe0ea]" : "text-ink-2"}`}
    >
      <span className="inline-block w-[7px] h-[7px] rounded-[50%] bg-orange mr-[6px] align-[1px] [box-shadow:0_0_0_3px_rgba(254,84,22,.25)]" />
      {children}
    </p>
  );
}

/** Seasonal line, shown only before the Diwali cut-off in config. */
export function DiwaliLine({ wide = false }) {
  return (
    <p
      hidden={!preDiwali}
      className={`text-[13.5px] font-bold text-yellow text-center mt-[-2px] mx-auto mb-0 ${wide ? "max-w-[600px]" : "max-w-[420px]"}`}
    >
      Slots open right after Diwali. Book now to get one.
    </p>
  );
}

/** Button + note, the block that closes almost every section. */
export default function CtaBlock({ meta, note, className = "mt-[34px]", wide = false, diwali = false, buttonRef }) {
  return (
    <div className={`flex flex-col items-center gap-[12px] ${className}`}>
      <BookButton meta={meta} buttonRef={buttonRef} />
      <UnderCta wide={wide}>{note}</UnderCta>
      {diwali && <DiwaliLine wide={wide} />}
    </div>
  );
}
