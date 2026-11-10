import { useEffect } from "react";
import { Section, Eyebrow, SectionTitle, Wrap } from "../components/ui/Section";
import CtaButton from "../components/ui/CtaButton";
import Footer from "../components/ui/Footer";
import { CONFIG } from "../lib/config";
import { trackCustom } from "../lib/pixel";
import { cleanName, params } from "../lib/region";
import logo from "../assets/img/logo-stockount.webp";
import appPhone from "../assets/img/app-phone-trial.webp";

const REASONS = {
  small:
    "The audit review is built for businesses with 10+ locations or 20,000+ SKUs, where one audit takes a full team and many days. At your size, the faster win is to start directly on Stockount with a free trial.",
  exploring:
    "The review works best for teams fixing their audits this quarter. While you explore, these two free steps show you where gaps hide, at your own pace.",
};

let why = params.get("why") || "small";
if (why === "single") why = "small";
const name = cleanName(params.get("n"));
const region = params.get("r") === "tn" ? "tn" : "in";

const OFFER = "bg-white rounded-[22px] border-2 border-ink [box-shadow:0_8px_0_var(--color-ink)] overflow-hidden flex flex-col";
const ART = "p-[22px] grid place-items-center min-h-[210px]";
const OFFER_BODY = "pt-[20px] px-[18px] pb-[22px] flex flex-col gap-[10px] flex-1";
const OFFER_TAG =
  "self-start text-[11.5px] font-extrabold tracking-[.1em] uppercase bg-paper border border-line rounded-[999px] py-[4px] px-[10px] text-navy";
const OFFER_ITEM =
  "text-[14.5px] py-[5px] pr-0 pl-[24px] relative before:content-['✓'] before:absolute before:left-0 before:top-[5px] before:text-green before:font-black";

function OfferBody({ tag, title, text, items, cta }) {
  return (
    <div className={OFFER_BODY}>
      <span className={OFFER_TAG}>{tag}</span>
      <h3 className="text-[21px] leading-[1.2]">{title}</h3>
      <p className="text-[15px] text-ink-2">{text}</p>
      <ul className="m-0 p-0 list-none">
        {items.map((item) => (
          <li key={item} className={OFFER_ITEM}>
            {item}
          </li>
        ))}
      </ul>
      <CtaButton variant="offer" href={cta.href} target="_blank" rel="noopener" title={cta.title} meta={cta.meta} />
    </div>
  );
}

/* Little tilted "PDF" drawn in CSS for the checklist offer. */
function ChecklistArt() {
  const tick =
    "flex-none w-[12px] h-[12px] rounded-[3px] border-2 border-green relative after:content-[''] after:absolute after:left-[2px] after:top-[-1px] " +
    "after:w-[4px] after:h-[7px] after:border-r-2 after:border-b-2 after:border-r-green after:border-b-green after:[transform:rotate(45deg)]";
  const line = "block h-[6px] rounded-[3px] bg-[#d7e1e8] flex-1";
  return (
    <div className="w-[150px] bg-white rounded-[10px] border-2 border-ink [box-shadow:6px_6px_0_rgba(11,22,32,.85)] py-[14px] px-[12px] [transform:rotate(-4deg)]">
      <div className="text-[10px] font-extrabold tracking-[.1em] text-orange">FREE PDF</div>
      <div className="text-[15px] font-extrabold leading-[1.15] mt-[4px] mx-0 mb-[8px] text-navy">Inventory Audit Checklist</div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex gap-[6px] items-center mt-[6px]">
          <i className={tick} />
          <b className={line} style={i === 3 ? { width: "60%", flex: "none" } : undefined} />
        </div>
      ))}
    </div>
  );
}

export default function NotAFitPage() {
  useEffect(() => {
    trackCustom("NotAFitView", { reason: why, region });
  }, []);

  return (
    <>
      <header className="text-white text-center pt-[28px] pb-[46px] bg-[radial-gradient(120%_70%_at_50%_0%,#0a5a85_0%,var(--color-navy)_38%,var(--color-navy-3)_100%)]">
        <Wrap>
          <img className="w-[150px] h-auto mt-0 mx-auto mb-[22px]" src={logo} alt="Stockount" width="520" height="100" />
          <h1 className="text-[clamp(28px,7.4vw,48px)] leading-[1.12] max-w-[800px] my-0 mx-auto">
            {name ? `Thanks, ${name}.` : "Thanks."} The audit review is not the right fit yet, but these two free steps are.
          </h1>
          <div className="max-w-[640px] mt-[18px] mx-auto mb-0 bg-[rgba(255,255,255,.07)] border border-[rgba(255,255,255,.16)] rounded-[16px] py-[16px] px-[18px] text-left">
            <small className="block text-[11.5px] font-extrabold tracking-[.12em] uppercase text-yellow mb-[6px]">Why</small>
            <p className="text-[15.5px] text-[#d3e2ec]">{REASONS[why] || REASONS.small}</p>
          </div>
        </Wrap>
      </header>

      <Section variant="paper">
        <Eyebrow>Start free, today</Eyebrow>
        <SectionTitle>Two ways to find your gap on your own</SectionTitle>
        <div className="grid grid-cols-[1fr] gap-[18px] max-w-[1000px] mt-[30px] mx-auto mb-0 min-[860px]:grid-cols-[1fr_1fr]">
          <div className={OFFER}>
            <div className={`${ART} bg-[linear-gradient(135deg,#fff3d1_0%,#ffe08a_100%)]`}>
              <ChecklistArt />
            </div>
            <OfferBody
              tag="Free checklist"
              title="The Inventory Audit Checklist"
              text="The same step-by-step checklist Stockount uses with new customers. Run it on your next count."
              items={["Clear audit steps anyone on your team can follow", "Checkpoints to see if you are audit-ready", "Spot stock errors faster"]}
              cta={{
                href: "https://www.stockount.com/#inventory-audit-checklist-guide",
                title: "Get the free checklist",
                meta: "Sent to your inbox in seconds",
              }}
            />
          </div>
          <div className={OFFER}>
            <div className={`${ART} bg-[linear-gradient(135deg,#e3f1fa_0%,#bfdcef_100%)]`}>
              <img
                className="max-h-[190px] w-auto [filter:drop-shadow(0_12px_20px_rgba(0,0,0,.25))]"
                src={appPhone}
                alt="Stockount counting app on a phone"
                width="353"
                height="707"
              />
            </div>
            <OfferBody
              tag="Free trial"
              title="Try Stockount free"
              text="Full access, no credit card. Set up in under a day."
              items={["Scan barcodes with your phone camera", "Count items with no barcode by code, name or batch", "8 hours of onboarding support included"]}
              cta={{ href: "https://www.stockount.com/pricing", title: "Start my free trial", meta: "No credit card needed" }}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-[760px] my-0 mx-auto text-center">
          <h3 className="text-[20px]">Growing past 10 locations, or planning your year-end count?</h3>
          <p className="text-[15.5px] text-ink-2 mt-[8px]">
            Come back and{" "}
            <a className="text-navy font-extrabold" href={"index.html" + (region === "tn" ? "?r=tn" : "")}>
              book the audit review
            </a>{" "}
            when it fits. We will be here. Questions before that? WhatsApp us at{" "}
            <a className="text-navy font-extrabold" href={`https://wa.me/${CONFIG.whatsappNumber}`} target="_blank" rel="noopener">
              +91 96003 38814
            </a>
            .
          </p>
        </div>
      </Section>

      <Footer compact />
    </>
  );
}
