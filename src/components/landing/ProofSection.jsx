import { Section, Eyebrow, SectionTitle } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";
import { CLIENT_LOGOS, PROOF_HEADLINE, TESTIMONIALS } from "../../data/proof";

const BA_ICON = "flex-none not-italic font-black w-[20px] h-[20px] rounded-[50%] grid place-items-center text-[11px] text-white mt-px";
const BA_ROW = "flex gap-[9px] items-start text-[14px] leading-[1.45] text-ink-2";

function TestimonialCard({ t }) {
  return (
    <div
      className={`bg-white rounded-[20px] border border-line py-[22px] px-[18px] [box-shadow:0_12px_30px_rgba(4,62,93,.07)] flex flex-col ${
        t.small ? "min-[860px]:col-[span_2]" : "min-[860px]:col-[span_3]"
      }`}
    >
      <div className="flex mt-[-22px] mx-[-18px] mb-[16px] rounded-t-[20px] overflow-hidden aspect-[16/8]">
        <img
          className={`w-full h-full object-cover ${t.photo.bottom ? "object-[center_bottom]" : ""}`}
          src={t.photo.src}
          alt={t.photo.alt}
          width={t.photo.width}
          height={t.photo.height}
        />
      </div>
      <div className="flex items-center gap-[12px]">
        {t.avatar ? (
          <div className="flex-none w-[64px] h-[64px] rounded-[50%] bg-white border-2 border-line grid place-items-center overflow-hidden p-[6px]">
            <img className="w-full h-auto" src={t.avatar.src} alt={t.avatar.alt} />
          </div>
        ) : (
          <div className="flex-none w-[64px] h-[64px] rounded-[50%] bg-navy border-2 border-navy grid place-items-center overflow-hidden p-0 text-yellow font-extrabold text-[19px] tracking-[.02em]">
            {t.initials}
          </div>
        )}
        <div>
          <b className="block text-[15.5px] leading-[1.3]">{t.name}</b>
          <span className="block text-[13px] text-muted leading-[1.35]">
            {t.role[0]}
            <br />
            {t.role[1]}
          </span>
        </div>
      </div>
      {t.stars && <div className="text-[#f5a400] tracking-[2px] text-[15px] mt-[14px] mx-0 mb-[8px]">★★★★★</div>}
      {t.tag && (
        <span className="self-start mt-[14px] mx-0 mb-[8px] text-[11.5px] font-extrabold tracking-[.1em] uppercase text-orange bg-[#fff1ea] rounded-[999px] py-[5px] px-[11px]">
          {t.tag}
        </span>
      )}
      <blockquote className={`m-0 leading-[1.55] text-ink font-medium ${t.small ? "text-[15.5px]" : "text-[16.5px]"}`}>{t.quote}</blockquote>
      <div className="mt-[14px] grid gap-[8px]">
        <p className={BA_ROW}>
          <i className={`${BA_ICON} bg-red`}>✗</i>
          <span>
            <b className="text-ink">Before:</b> {t.before}
          </span>
        </p>
        <p className={BA_ROW}>
          <i className={`${BA_ICON} bg-green`}>✓</i>
          <span>
            <b className="text-ink">After:</b> {t.after}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-[8px] mt-auto pt-[16px]">
        {t.stats.map(([value, label]) => (
          <div key={label} className="bg-paper rounded-[12px] py-[10px] px-[8px] text-center">
            <strong className="block text-[20px] font-extrabold text-navy leading-[1.1]">{value}</strong>
            <span className="block text-[11.5px] font-semibold text-muted mt-[3px] leading-[1.25]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProofSection() {
  return (
    <Section id="proof">
      <Eyebrow>Real businesses, real audits</Eyebrow>
      <SectionTitle>{PROOF_HEADLINE}</SectionTitle>
      <div className="grid grid-cols-[1fr] gap-[16px] max-w-[1040px] mt-[30px] mx-auto mb-0 min-[860px]:grid-cols-[repeat(6,1fr)]">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
      <p className="text-center text-[13px] font-bold tracking-[.12em] uppercase text-muted mt-[34px]">Counting with Stockount</p>
      <div className="flex flex-wrap justify-center gap-[10px] max-w-[900px] mt-[26px] mx-auto mb-0">
        {CLIENT_LOGOS.map((logo) => (
          <div
            key={logo.alt}
            className="grow-0 shrink-0 basis-[calc((100%-20px)/3)] bg-white border border-line rounded-[14px] h-[78px] grid place-items-center p-[10px] min-[760px]:basis-[calc((100%-40px)/5)]"
          >
            <img className="max-h-[54px] w-auto max-w-full object-contain" src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
      <CtaBlock
        meta="Free · 30 minutes · your own data"
        note="Rated 4.1 to 4.5 out of 5 on Capterra, G2, GetApp, GoodFirms and Trustpilot."
      />
    </Section>
  );
}
