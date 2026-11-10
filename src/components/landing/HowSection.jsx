import { Section, Eyebrow, SectionTitle, Lede } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";

const STEPS = [
  {
    title: "You walk us through today's audit",
    text: "How often you count, who counts, how sheets reach head office, and how long one full cycle takes.",
    chips: ["Locations", "Audit team", "ERP", "Cycle time"],
  },
  {
    title: "We find where it loses time and stock",
    text: "Location by location. Transfers, count timing, sheet merging, proof and follow-up.",
    chips: ["Per location", "Per door"],
  },
  {
    title: "You leave with a fix-first plan",
    text: "The changes that close your biggest leak first. If Stockount fits, we show it running on your own items and your ERP.",
    chips: ["Fix first", "Your items", "Your ERP"],
  },
];

export default function HowSection() {
  return (
    <Section id="how">
      <Eyebrow>What happens on the call</Eyebrow>
      <SectionTitle>Your 30-minute audit review</SectionTitle>
      <Lede>No slides. No generic demo. We work on how your audit runs today, across your locations.</Lede>
      <div className="grid grid-cols-[1fr] gap-[16px] max-w-[1040px] mt-[32px] mx-auto mb-0 min-[860px]:grid-cols-[repeat(3,1fr)]">
        {STEPS.map((s, i) => (
          <div key={s.title} className="relative bg-white rounded-[18px] border border-line pt-[22px] px-[18px] pb-[20px] [box-shadow:0_10px_24px_rgba(4,62,93,.06)]">
            <div className="w-[40px] h-[40px] rounded-[12px] bg-navy text-yellow font-extrabold text-[18px] grid place-items-center mb-[12px]">{i + 1}</div>
            <h3 className="text-[19px] leading-[1.25]">{s.title}</h3>
            <p className="text-[15px] text-ink-2 mt-[6px]">{s.text}</p>
            <div className="flex flex-wrap gap-[6px] mt-[12px]">
              {s.chips.map((c) => (
                <span key={c} className="text-[12px] font-bold bg-paper border border-line rounded-[999px] py-[4px] px-[10px] text-navy">
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <CtaBlock meta="Free · 30 minutes · your own data" note="Bring your audit or inventory head. That is all you need." />
    </Section>
  );
}
