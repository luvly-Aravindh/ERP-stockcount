import { Section, Eyebrow, SectionTitle, Lede } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";
import { useCountUp } from "../../hooks/useCountUp";
import { numberIN } from "../../lib/format";

const CARDS = [
  { label: "ERP says", value: 318407, note: "units in stock", box: "bg-navy text-white", noteColor: "text-[#bcd2df]" },
  { label: "Audit found", value: 309862, note: "units on shelves", box: "bg-white", noteColor: "text-muted" },
  { label: "Gap", value: 8545, note: "units short", box: "bg-orange text-white max-[599px]:col-[1/-1]", noteColor: "" },
];

const svg = (children) => (
  <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const DOORS = [
  {
    icon: svg(<path d="M3 7h13l-3-3M21 17H8l3 3" />),
    title: "Transfers stuck in transit",
    text: "Sent from store 4. Never received at store 17. Your ERP counts it in both places, or in neither.",
  },
  {
    icon: svg(
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </>,
    ),
    title: "Stores counted on different days",
    text: "Store 1 counts on Monday, store 23 on Thursday. Sales keep moving in between, so the totals never tie.",
  },
  {
    icon: svg(
      <>
        <path d="M6 2h9l5 5v15H6z" />
        <path d="M14 2v6h6M9 13h6M9 17h4" />
      </>,
    ),
    title: "23 sheets, one person merging",
    text: "Every store sends its own Excel. Head office spends days merging. Every typo rides along.",
  },
  {
    icon: svg(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>,
    ),
    title: "No proof on the count",
    text: "Who counted which rack, and when? Handwriting and photos lost in a WhatsApp group.",
  },
  {
    icon: svg(
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v5h-5" />
      </>,
    ),
    title: "Gaps found, never closed",
    text: "Variances sit in a sheet until year-end. The same item goes short again next quarter.",
  },
];

/* 1 column on phones, 2 on tablets (last card centred), 3 + 2 centred on desktop. */
const DOOR_PLACEMENT = [
  "min-[1040px]:col-[span_2]",
  "min-[1040px]:col-[span_2]",
  "min-[1040px]:col-[span_2]",
  "min-[1040px]:col-[2/span_2]",
  "min-[720px]:col-[1/-1] min-[720px]:max-w-[calc(50%-6px)] min-[720px]:justify-self-center min-[720px]:w-full min-[1040px]:col-[4/span_2] min-[1040px]:max-w-none",
];

export default function GapSection() {
  const [cardsRef, progress] = useCountUp();
  return (
    <Section id="gap">
      <Eyebrow>Audit day, 23 stores later</Eyebrow>
      <SectionTitle>Where did 8,545 units go?</SectionTitle>
      <Lede>
        With stock in 10+ locations, your ERP holds one number and your shelves hold another. Your audit team finds the difference.
        Slowly, one store at a time, in Excel.
      </Lede>
      <div ref={cardsRef} className="grid grid-cols-[repeat(3,1fr)] gap-[10px] max-w-[760px] mt-[30px] mx-auto mb-0 max-[599px]:grid-cols-[1fr_1fr]">
        {CARDS.map((c) => (
          <div key={c.label} className={`rounded-[16px] pt-[16px] px-[10px] pb-[14px] text-center border-2 border-ink ${c.box}`}>
            <small className="flex items-center justify-center min-h-[2.6em] text-[11px] font-extrabold tracking-[.1em] uppercase leading-[1.25]">
              {c.label}
            </small>
            <strong className="block text-[clamp(26px,7.4vw,46px)] font-extrabold leading-[1.05] mt-[8px] tabular-nums max-[599px]:text-[clamp(24px,7vw,40px)]">
              {numberIN.format(Math.round(c.value * progress))}
            </strong>
            <span className={`block text-[12px] font-semibold mt-[6px] leading-[1.3] ${c.noteColor}`}>{c.note}</span>
          </div>
        ))}
      </div>
      <p className="text-[19px] font-extrabold text-center mt-[40px] mx-auto mb-[18px] max-w-[620px] text-balance">
        It did not vanish in a day. It leaked through 5 doors that only open when you run many locations.
      </p>
      <div className="grid grid-cols-[1fr] gap-[12px] max-w-[980px] my-0 mx-auto min-[720px]:grid-cols-[repeat(2,1fr)] min-[1040px]:grid-cols-[repeat(6,1fr)]">
        {DOORS.map((d, i) => (
          <div
            key={d.title}
            className={`flex gap-[14px] items-start bg-white border border-line rounded-[16px] p-[16px] [box-shadow:0_1px_0_rgba(11,22,32,.04)] ${DOOR_PLACEMENT[i]}`}
          >
            <div className="flex-none w-[46px] h-[46px] rounded-[12px] bg-[#fff1ea] grid place-items-center text-orange">{d.icon}</div>
            <div>
              <span className="text-[12px] font-extrabold text-orange tracking-[.08em]">DOOR {i + 1}</span>
              <h3 className="text-[16.5px] leading-[1.3] tracking-[-.01em]">{d.title}</h3>
              <p className="text-[14.5px] text-ink-2 mt-[3px] leading-[1.45]">{d.text}</p>
            </div>
          </div>
        ))}
      </div>
      <CtaBlock meta="Find which door leaks most" note="Built for 10+ locations or 20,000+ SKUs." />
    </Section>
  );
}
