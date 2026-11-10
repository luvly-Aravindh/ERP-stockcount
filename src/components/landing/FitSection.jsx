import { Section, Eyebrow, SectionTitle } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";

const B = ({ children }) => <b className="font-extrabold">{children}</b>;

const YES = [
  <>Your stock sits in <B>10 or more</B> stores, warehouses, plants or dealer points</>,
  <>Or you track <B>20,000+ SKUs</B>, even across 2 or 3 locations</>,
  "You already run audits, in-house, with outside auditors or through store staff, and they take too long",
  "You own the business, or head audit, inventory, operations or finance",
  "Retail chains, distribution and 3PL, manufacturing, auto dealer groups, pharma",
];

const NO = [
  "You run fewer than 10 locations with a smaller item list. The free trial at stockount.com fits you better.",
  "You are only browsing, with no plan to fix audits this quarter",
  "You want someone to come and count your stock for you. We give your team the system. We do not count for you.",
];

function Box({ title, items, yes }) {
  return (
    <div className={`rounded-[18px] py-[20px] px-[18px] border-2 ${yes ? "bg-green-soft border-[#9fd9b5]" : "bg-red-soft border-[#f2b6b8]"}`}>
      <h3 className="text-[18px] mb-[12px]">{title}</h3>
      <ul className="list-none m-0 p-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-[10px] items-start text-[15px] leading-[1.45] py-[7px] border-t border-t-[rgba(11,22,32,.07)] first:[border-top:none]"
          >
            <i
              className={`flex-none not-italic font-black w-[24px] h-[24px] rounded-[50%] grid place-items-center text-[13px] text-white mt-px ${
                yes ? "bg-green" : "bg-red"
              }`}
            >
              {yes ? "✓" : "✗"}
            </i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FitSection() {
  return (
    <Section id="fit" variant="paper">
      <Eyebrow>Read this before you book</Eyebrow>
      <SectionTitle>Built for big inventories. Not for everyone.</SectionTitle>
      <div className="grid grid-cols-[1fr] gap-[14px] max-w-[1000px] mt-[30px] mx-auto mb-0 min-[860px]:grid-cols-[1fr_1fr]">
        <Box title="Book it if" items={YES} yes />
        <Box title="Skip it if" items={NO} />
      </div>
      <CtaBlock
        meta="Check if you qualify in 60 seconds"
        note="2 taps tell you if you qualify. No call is booked unless you do."
      />
    </Section>
  );
}
