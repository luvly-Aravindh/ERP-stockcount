import { Section, Eyebrow, SectionTitle } from "../ui/Section";

const FAQS = [
  ["Is the review really free?", "Yes. It is a 30-minute online call. No card, no contract, no obligation to buy."],
  [
    "We already have an audit team. Why change?",
    "Keep the team. Stockount gives them one system across every location: scan on phones, count in parallel, see variances live, and close each one with Accept, Recount or Investigate. At VMC Royal Enfield, the same audit went from 7 days to 2.",
  ],
  [
    "What should I keep ready?",
    "Your list of locations, a rough SKU count, how often you audit today, and one recent stock export from your ERP. Bring your audit or inventory head if you have one.",
  ],
  [
    "Will it work with Busy, Tally, Gofrugal or Zoho?",
    "Yes. Stockount works with Busy, Tally, Gofrugal and Zoho, the ERPs most Indian businesses run, and also with SAP, Odoo, Dynamics 365 and QuickBooks. It is an audit layer, not an ERP replacement, and adjustments post back to your ERP.",
  ],
  ["How long until our team is counting?", "Under a day to set up, with 8 hours of onboarding support included. No data migration."],
  [
    "What does Stockount cost?",
    "Plans scale from small teams to enterprise, with no per-seat surprises. You get the exact price for your locations on the call.",
  ],
  [
    "We have fewer than 10 locations. Can we still book?",
    <>
      The review is built for 10+ locations or 20,000+ SKUs. For smaller setups, the free trial at{" "}
      <a className="text-navy font-bold" href="https://www.stockount.com/pricing" target="_blank" rel="noopener">
        stockount.com
      </a>{" "}
      is the faster route.
    </>,
  ],
  [
    "Can the call be in Tamil or Hindi?",
    "Pick your language when you book. We will do our best to match you with someone who speaks it.",
  ],
];

/* Native <details> accordion; the +/− badge is the summary's ::after. */
const SUMMARY =
  "[list-style:none] cursor-pointer py-[16px] pr-[50px] pl-[18px] font-bold text-[16px] relative leading-[1.4] [&::-webkit-details-marker]:hidden " +
  "after:content-['+'] after:absolute after:right-[18px] after:top-1/2 after:[transform:translateY(-50%)] after:w-[26px] after:h-[26px] " +
  "after:rounded-[50%] after:bg-paper after:grid after:place-items-center after:font-extrabold after:text-navy group-open:after:content-['−']";

export default function FaqSection() {
  return (
    <Section id="faq">
      <Eyebrow>Questions</Eyebrow>
      <SectionTitle>Before you book</SectionTitle>
      <div className="max-w-[780px] mt-[28px] mx-auto mb-0">
        {FAQS.map(([question, answer]) => (
          <details key={question} className="group bg-white border border-line rounded-[14px] mb-[10px] overflow-hidden">
            <summary className={SUMMARY}>{question}</summary>
            <p className="pt-0 px-[18px] pb-[18px] text-[15px] text-ink-2">{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
