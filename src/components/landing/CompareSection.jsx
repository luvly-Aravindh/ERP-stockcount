import { Section, Eyebrow, SectionTitle } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";

const ROWS = [
  ["Time for a full audit", "5 to 7 days every cycle, team pulled off the floor", "2 days instead of 7 at VMC Royal Enfield"],
  ["Many locations", "One sheet per store, merged by hand at head office", "Every location counted in parallel, on one live dashboard"],
  ["When the gap shows up", "At year-end, too late to trace", "On day 1 of the audit, by item and location"],
  ["Proof of each count", "Handwriting and WhatsApp photos", "Blind counts, cross-checks, photo and geo capture"],
  ["Closing the gap", "Sits in a sheet, comes back next quarter", "Accept, Recount or Investigate, with trends across audits"],
  ["Your ERP", "Counts re-typed by hand", "Adjustments posted back to Busy, Tally, Gofrugal or Zoho"],
];

/* Stacked cards on phones; a three-column table from 760px up. */
const CELL =
  "rounded-[12px] py-[10px] px-[12px] text-[14px] leading-[1.4] min-[760px]:rounded-none min-[760px]:py-[16px] min-[760px]:px-[18px] min-[760px]:flex min-[760px]:items-center";
const CELL_LABEL = "block text-[10.5px] font-extrabold tracking-[.1em] uppercase mb-[3px] min-[760px]:hidden";

export default function CompareSection() {
  return (
    <Section id="compare" variant="paper">
      <Eyebrow>Side by side</Eyebrow>
      <SectionTitle>Excel audits vs Stockount</SectionTitle>
      <div className="max-w-[900px] mt-[30px] mx-auto mb-0 min-[760px]:border min-[760px]:border-line min-[760px]:rounded-[18px] min-[760px]:overflow-hidden min-[760px]:bg-white">
        <div className="hidden min-[760px]:grid min-[760px]:grid-cols-[1.1fr_1fr_1fr] min-[760px]:bg-navy min-[760px]:text-white min-[760px]:font-extrabold min-[760px]:text-[14px]">
          <div className="min-[760px]:py-[14px] min-[760px]:px-[18px]">What matters</div>
          <div className="min-[760px]:py-[14px] min-[760px]:px-[18px]">Excel and registers</div>
          <div className="min-[760px]:py-[14px] min-[760px]:px-[18px] min-[760px]:bg-yellow min-[760px]:text-ink">Stockount</div>
        </div>
        {ROWS.map(([label, excel, stockount]) => (
          <div
            key={label}
            className="bg-white rounded-[16px] p-[14px] mb-[12px] max-[760px]:border max-[760px]:border-line min-[760px]:grid min-[760px]:grid-cols-[1.1fr_2fr] min-[760px]:border-t min-[760px]:border-t-line min-[760px]:rounded-none min-[760px]:m-0 min-[760px]:p-0"
          >
            <div className="font-extrabold text-[15px] mb-[10px] min-[760px]:m-0 min-[760px]:py-[16px] min-[760px]:px-[18px] min-[760px]:flex min-[760px]:items-center">
              {label}
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-[8px] min-[760px]:gap-0">
              <div className={`${CELL} bg-red-soft text-[#5b1a1c]`}>
                <small className={`${CELL_LABEL} text-red`}>Excel</small>
                {excel}
              </div>
              <div className={`${CELL} bg-green-soft text-[#0f3d22] font-semibold`}>
                <small className={`${CELL_LABEL} text-green`}>Stockount</small>
                {stockount}
              </div>
            </div>
          </div>
        ))}
      </div>
      <CtaBlock
        meta="Free · 30 minutes · your own data"
        note="60-second check first. Built for 10+ locations or 20,000+ SKUs."
      />
    </Section>
  );
}
