/* The yellow "pressable" call-to-action button used across all three pages. */

const BASE =
  "cta-shine relative overflow-hidden isolate inline-flex flex-col items-center justify-center gap-[2px] max-w-full " +
  "border-2 border-ink cursor-pointer text-ink no-underline font-sans bg-transparent " +
  "bg-[linear-gradient(180deg,var(--color-yellow-2)_0%,var(--color-yellow)_55%,#ffbb00_100%)] " +
  "[transition:transform_.12s_ease,box-shadow_.12s_ease] [-webkit-tap-highlight-color:transparent] " +
  "hover:[animation-play-state:paused] hover:[transform:translateY(-1px)] " +
  "focus-visible:[outline:3px_solid_#fff] focus-visible:outline-offset-[3px] " +
  "active:[transform:translateY(5px)] active:[box-shadow:0_1px_0_var(--color-ink),0_6px_12px_rgba(0,0,0,.25)]";

const LARGE =
  "pt-[15px] px-[26px] pb-[13px] rounded-[14px] animate-cta-pulse motion-reduce:[animation:none] " +
  "[box-shadow:0_6px_0_var(--color-ink),0_14px_28px_rgba(0,0,0,.28)] " +
  "max-[380px]:pt-[14px] max-[380px]:px-[16px] max-[380px]:pb-[12px]";

const TITLE = "font-extrabold tracking-[.03em] uppercase whitespace-nowrap leading-[1.15]";
const META = "font-semibold text-[#3a3200] whitespace-nowrap leading-[1.2]";
const META_LARGE = `${META} text-[12.5px] max-[380px]:text-[12px]`;

const VARIANTS = {
  /* standard section CTA */
  default: {
    root: `${LARGE} min-w-[min(100%,340px)]`,
    title: `${TITLE} text-[18px] max-[380px]:text-[16.5px]`,
    meta: META_LARGE,
  },
  /* full-width submit at the end of the qualifier form */
  submit: {
    root: `${LARGE} min-w-[min(100%,340px)] mt-[20px] w-full`,
    title: `${TITLE} text-[17px]`,
    meta: META_LARGE,
  },
  /* stretches to the bottom of an offer card (not-a-fit page) */
  offer: {
    root: `${LARGE} min-w-0 mt-auto self-stretch`,
    title: `${TITLE} text-[16px]`,
    meta: META_LARGE,
  },
  /* compact version inside the sticky bottom bar */
  bar: {
    root:
      "min-w-0 pt-[10px] px-[14px] pb-[9px] rounded-[12px] [box-shadow:0_4px_0_#000] [animation:none] " +
      "min-[760px]:pt-[12px] min-[760px]:px-[22px] min-[760px]:pb-[12px] " +
      "max-[374px]:pt-[10px] max-[374px]:px-[10px] max-[374px]:pb-[9px]",
    title: `${TITLE} text-[13px] min-[760px]:text-[15px] max-[374px]:text-[12px]`,
    meta: `${META} text-[12.5px] hidden min-[760px]:block min-[760px]:text-[11px]`,
  },
};

export default function CtaButton({ title, meta, variant = "default", href, type = "button", className = "", ...rest }) {
  const v = VARIANTS[variant];
  const cls = `${BASE} ${v.root} ${className}`;
  const inner = (
    <>
      <span className={v.title}>{title}</span>
      <span className={v.meta}>{meta}</span>
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} type={type} {...rest}>
      {inner}
    </button>
  );
}
