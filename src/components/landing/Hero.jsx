import { DarkProvider, Wrap } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";
import VideoFacade from "../ui/VideoFacade";
import logo from "../../assets/img/logo-stockount.webp";
import busy from "../../assets/img/erp-busy.webp";
import tally from "../../assets/img/erp-tally.webp";
import gofrugal from "../../assets/img/erp-gofrugal.webp";
import zoho from "../../assets/img/erp-zoho.webp";
import capterra from "../../assets/img/rated-capterra.webp";
import g2 from "../../assets/img/rated-g2.webp";
import getapp from "../../assets/img/rated-getapp.webp";
import goodfirms from "../../assets/img/rated-goodfirms.webp";
import trustpilot from "../../assets/img/rated-trustpilot.webp";

const ERPS = [
  { src: busy, alt: "Busy", size: "h-[15px] min-[600px]:h-[22px]" },
  { src: tally, alt: "Tally", size: "h-[25px] min-[600px]:h-[36px]" },
  { src: gofrugal, alt: "Gofrugal", size: "h-[12px] min-[600px]:h-[18px]" },
  { src: zoho, alt: "Zoho", size: "h-[22px] min-[600px]:h-[31px]" },
];

const RATED_WIDE = "h-[19px] min-[600px]:h-[24px]";
const RATED_SQUARE = "h-[23px] min-[600px]:h-[28px]";
const RATED = [
  { src: capterra, alt: "Capterra", size: RATED_WIDE },
  { src: g2, alt: "G2", size: RATED_SQUARE },
  { src: getapp, alt: "GetApp", size: RATED_WIDE },
  { src: goodfirms, alt: "GoodFirms", size: RATED_WIDE },
  { src: trustpilot, alt: "Trustpilot", size: RATED_WIDE },
];

/** `ctaRef` is the hero button; the sticky bar appears once it scrolls out of view. */
export default function Hero({ ctaRef }) {
  return (
    <DarkProvider value={true}>
      <header className="hero-grid relative text-white text-center pt-[22px] pb-[46px] overflow-hidden bg-[radial-gradient(120%_70%_at_50%_0%,#0a5a85_0%,var(--color-navy)_38%,var(--color-navy-3)_100%)]">
        <Wrap className="relative">
          <img className="w-[158px] h-auto mx-auto mt-0 mb-[18px]" src={logo} alt="Stockount" width="520" height="100" />
          <div className="inline-flex items-center gap-[8px] py-[7px] px-[14px] rounded-[999px] border border-[rgba(255,255,255,.22)] bg-[rgba(255,255,255,.06)] text-[12.5px] font-bold text-[#e6f0f6] mb-[16px]">
            <i className="w-[8px] h-[8px] rounded-[50%] bg-yellow [box-shadow:0_0_0_4px_rgba(255,199,44,.18)] flex-none" />
            <span className="tn:hidden">For 10+ locations or 20,000+ SKUs</span>
            <span className="hidden tn:[display:revert]">For Tamil Nadu businesses with 10+ locations</span>
          </div>
          <h1 className="text-[clamp(34px,9.6vw,62px)] leading-[1.06] max-w-[900px] my-0 mx-auto">
            Your ERP says <span className="whitespace-nowrap">3,18,407 units.</span> Your 23 stores counted{" "}
            <span className="whitespace-nowrap text-yellow relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-.06em] after:h-[.12em] after:rounded-[3px] after:bg-orange after:opacity-95">
              3,09,862.
            </span>
          </h1>
          <p className="text-[16.5px] leading-[1.5] text-[#d3e2ec] max-w-[640px] mt-[18px] mx-auto mb-[24px]">
            That gap of <b className="text-white">8,545 units</b> showed up only after 7 days of counting and 23 Excel sheets merged at
            head office. In 30 minutes, we map how your audit runs today and where it loses time and stock. Free, on your own data.
          </p>
          <CtaBlock
            className=""
            buttonRef={ctaRef}
            meta="Free · 30 minutes · your own data"
            note="60-second check first. Built for 10+ locations or 20,000+ SKUs."
            diwali
          />
          <div className="mt-[22px] mx-auto mb-0 inline-flex flex-col items-center gap-[8px]">
            <span className="text-[12px] font-extrabold tracking-[.12em] uppercase text-[#9fc3d8]">Works with your ERP</span>
            <div className="flex items-center justify-center gap-[14px] bg-white rounded-[14px] py-[10px] px-[16px] [box-shadow:0_6px_18px_rgba(0,0,0,.25)] min-[600px]:gap-[24px] min-[600px]:py-[12px] min-[600px]:px-[24px]">
              {ERPS.map((e) => (
                <img key={e.alt} className={`w-auto ${e.size}`} src={e.src} alt={e.alt} />
              ))}
            </div>
          </div>
          <VideoFacade variant="hero" />
          <div className="flex flex-col items-center gap-[10px] mt-[28px]">
            <div className="text-yellow tracking-[2px] text-[15px]">★★★★★</div>
            <p className="text-[13.5px] font-semibold text-[#d3e2ec]">Rated 4.1 to 4.5 out of 5 by businesses on</p>
            <div className="flex flex-wrap justify-center items-center gap-x-[11px] gap-y-[8px] bg-white rounded-[14px] py-[10px] px-[14px] max-w-[560px] min-[600px]:gap-x-[20px] min-[600px]:gap-y-[10px] min-[600px]:py-[11px] min-[600px]:px-[20px]">
              {RATED.map((r) => (
                <img key={r.alt} className={`w-auto ${r.size}`} src={r.src} alt={r.alt} />
              ))}
            </div>
          </div>
        </Wrap>
      </header>
    </DarkProvider>
  );
}
