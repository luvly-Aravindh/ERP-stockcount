import { Section, Eyebrow, SectionTitle, Lede } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";
import appPhone from "../../assets/img/app-phone.webp";
import tourReport from "../../assets/img/tour-variance-report.webp";
import tourResolution from "../../assets/img/tour-resolution.webp";
import tourAdjustments from "../../assets/img/tour-adjustments.webp";
import busy from "../../assets/img/erp-busy.webp";
import tally from "../../assets/img/erp-tally.webp";
import gofrugal from "../../assets/img/erp-gofrugal.webp";
import zoho from "../../assets/img/erp-zoho.webp";

const FEATURES = [
  ["One process, every location", "The same audit in every store and warehouse. One live view for head office."],
  ["Many teams count at once", "Run parallel counts across locations and watch progress live."],
  ["Scan or search on a phone", "Barcode scan with hands-free continuous count. Search by code, name, batch or serial for items with no barcode."],
  ["Proof on every count", "Blind counts, cross-checks, and photo and geo capture."],
  ["Cycle counts without shutting stores", "Trigger cycle counts on large inventories. High-value items get counted first."],
  ["Batch, expiry and serial tracking", "With a full audit trail, for pharma, auto parts and electronics."],
];

const TOUR = [
  {
    title: "See every variance on day 1",
    text: "Matched, short, excess and damaged lines, for every item in every location. Summarize by location in one click.",
    img: tourReport,
    alt: "Stockount complete audit report with variances by location",
    height: 619,
  },
  {
    title: "Accept, Recount or Investigate",
    text: "Assign a recount to a named person. Flag repeat offenders for investigation, with the item's variance history.",
    img: tourResolution,
    alt: "Stockount audit resolution screen with Accept, Recount and Investigate",
    height: 564,
  },
  {
    title: "Post adjustments back to your ERP",
    text: "Quantity, value and type for every line. Pushed to your ERP or exported to Excel for your accounts team.",
    img: tourAdjustments,
    alt: "Stockount adjustment output with quantity, type and value",
    height: 368,
  },
];

const ERPS = [
  { src: busy, alt: "Busy", size: "h-[32px]" },
  { src: tally, alt: "Tally", size: "h-[54px]" },
  { src: gofrugal, alt: "Gofrugal", size: "h-[24px]" },
  { src: zoho, alt: "Zoho", size: "h-[46px]" },
];

export default function ProductSection() {
  return (
    <Section id="product" variant="dark">
      <Eyebrow>Built to audit, not to replace your ERP</Eyebrow>
      <SectionTitle>One audit system across every location</SectionTitle>
      <Lede>
        Stockount sits on top of Busy, Tally, Gofrugal, Zoho or whatever you run today. Your data stays where it is. Nothing moves,
        nothing migrates.
      </Lede>

      <div className="grid grid-cols-[1fr] gap-[26px] items-center max-w-[1040px] mt-[30px] mx-auto mb-0 min-[860px]:grid-cols-[300px_1fr] min-[860px]:gap-[44px]">
        <div className="relative max-w-[270px] my-0 mx-auto">
          <div className="border-[10px] border-[#0b1620] rounded-[34px] overflow-hidden bg-white [box-shadow:0_24px_50px_rgba(0,0,0,.5)]">
            <img className="w-full h-auto" src={appPhone} alt="Stockount mobile app counting stock with barcode scan" width="400" height="818" />
          </div>
          <span className="absolute right-[-8px] top-[30%] bg-orange text-white font-extrabold text-[12.5px] py-[7px] px-[11px] rounded-[10px] border-2 border-ink [box-shadow:0_3px_0_var(--color-ink)] [transform:rotate(3deg)]">
            Continuous count
          </span>
        </div>
        <div className="grid grid-cols-[1fr] gap-[10px] min-[860px]:grid-cols-[1fr_1fr]">
          {FEATURES.map(([title, text]) => (
            <div key={title} className="flex gap-[12px] items-start bg-[rgba(255,255,255,.06)] border border-[rgba(255,255,255,.12)] rounded-[14px] p-[14px]">
              <span className="flex-none w-[28px] h-[28px] rounded-[50%] bg-yellow text-ink grid place-items-center font-black text-[15px] mt-[2px] leading-[1.45]">
                ✓
              </span>
              <div>
                <b className="block text-[16px] leading-[1.3]">{title}</b>
                <span className="block text-[14px] text-[#c8d8e3] mt-[2px] leading-[1.45]">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-[18px] max-w-[1040px] mt-[40px] mx-auto mb-0">
        {TOUR.map((t, i) => (
          <div
            key={t.title}
            className="bg-[rgba(255,255,255,.05)] border border-[rgba(255,255,255,.12)] rounded-[20px] p-[16px] grid gap-[14px] min-[900px]:grid-cols-[300px_1fr] min-[900px]:items-center min-[900px]:p-[20px]"
          >
            <div className="flex gap-[12px] items-start">
              <span className="flex-none w-[34px] h-[34px] rounded-[10px] bg-yellow text-ink font-extrabold grid place-items-center">{i + 1}</span>
              <div>
                <h3 className="text-[18px] leading-[1.3]">{t.title}</h3>
                <p className="text-[14.5px] text-[#c8d8e3] mt-[3px] leading-[1.45]">{t.text}</p>
              </div>
            </div>
            <div className="rounded-[12px] overflow-hidden bg-white border border-[rgba(255,255,255,.18)]">
              <img className="w-full h-auto" src={t.img} alt={t.alt} width="1100" height={t.height} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[10px] mt-[26px] mx-auto mb-0">
        <h3 className="w-full text-center text-[22px] leading-[1.25] text-white mb-[4px]">Works with the ERP you already run</h3>
        <div className="w-full grid grid-cols-[1fr_1fr] gap-[12px] max-w-[760px] my-0 mx-auto min-[760px]:grid-cols-[repeat(4,1fr)]">
          {ERPS.map((e) => (
            <div key={e.alt} className="bg-white rounded-[16px] h-[86px] grid place-items-center py-[12px] px-[18px] border-[3px] border-yellow min-[760px]:h-[96px]">
              <img className={`w-auto max-w-full ${e.size}`} src={e.src} alt={e.alt} />
            </div>
          ))}
        </div>
        <span className="text-[13px] font-bold text-[#c8d8e3] w-full text-center">
          Also works with SAP, Odoo, Dynamics 365 and QuickBooks. Nothing moves, nothing migrates.
        </span>
      </div>
      <CtaBlock meta="See it on your own items" note="Live in under a day. 8 hours of onboarding support included." />
    </Section>
  );
}
