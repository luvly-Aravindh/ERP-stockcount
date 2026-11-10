import { Section, Eyebrow, SectionTitle, Wrap } from "../components/ui/Section";
import Footer from "../components/ui/Footer";
import VideoFacade from "../components/ui/VideoFacade";
import { CONFIG } from "../lib/config";
import { cleanName, params } from "../lib/region";
import logo from "../assets/img/logo-stockount.webp";
import velavan from "../assets/img/client-velavan.webp";
import lumino from "../assets/img/avatar-lumino.webp";

/* Who booked: first name from the URL, falling back to what the qualifier saved. */
function readVisitor() {
  let name = params.get("n") || params.get("first_name") || "";
  let company = "";
  try {
    const saved = JSON.parse(sessionStorage.getItem("stk_lead") || "null");
    if (saved) {
      if (!name) name = (saved.name || "").split(/\s+/)[0];
      company = saved.company || "";
    }
  } catch {
    /* storage unavailable */
  }
  return { name: cleanName(name), company };
}

const visitor = readVisitor();
const WHATSAPP = `https://wa.me/${CONFIG.whatsappNumber}`;
const whatsappMessage =
  "Hi Stockount, I have booked my audit review." +
  (visitor.name ? ` My name is ${visitor.name}.` : "") +
  (visitor.company ? ` Company: ${visitor.company}.` : "") +
  " I will be on the call.";

const READY = [
  "Your location list and a rough SKU count",
  "How often you audit, and how long one full cycle takes",
  "One recent stock export from your ERP",
  "Your audit or inventory head on the call. Add your ERP or IT person if sync matters to you.",
];

const LEAVE_WITH = ["Where your audit loses the most time", "Which locations leak the most stock", "What to fix first"];

const QUOTES = [
  {
    logo: velavan,
    alt: "Velavan Motorcycles",
    name: "Operations Manager",
    company: "VMC Royal Enfield, Chennai",
    quote:
      "“The same audit that used to take 7 days now finishes in 2, and we know our shrinkage the moment it happens, not at year-end.”",
  },
  {
    logo: lumino,
    alt: "Lumino Industries",
    name: "Bikash Agarwal",
    company: "Lumino Industries Ltd.",
    quote: "“We now audit 7 to 8 storages in a single day. Our system-versus-physical stock variance has dropped remarkably.”",
  },
];

const CARD = "bg-white rounded-[18px] border border-line py-[20px] px-[18px] [box-shadow:0_10px_24px_rgba(4,62,93,.07)] flex flex-col";
const CARD_NUM = "w-[38px] h-[38px] rounded-[12px] bg-navy text-yellow font-extrabold grid place-items-center mb-[12px]";
const CARD_TITLE = "text-[19px] leading-[1.25]";
const CARD_TEXT = "text-[15px] text-ink-2 mt-[6px]";
const CHECK_ITEM =
  "text-[15px] py-[7px] pr-0 pl-[28px] relative border-t border-t-line leading-[1.4] first:[border-top:none] " +
  "before:content-['✓'] before:absolute before:left-0 before:top-[7px] before:w-[20px] before:h-[20px] before:rounded-[50%] " +
  "before:bg-green before:text-white before:text-[11px] before:font-black before:grid before:place-items-center";

export default function ThankYouPage() {
  return (
    <>
      <div className="bg-green text-white text-center font-bold text-[13px] leading-[1.2] py-[9px] px-[12px] whitespace-nowrap overflow-hidden text-ellipsis tracking-[.01em]">
        <b className="font-extrabold">Your slot is reserved.</b> Confirm it on WhatsApp below.
      </div>

      <header className="text-white text-center pt-[26px] pb-[44px] bg-[radial-gradient(120%_70%_at_50%_0%,#0a5a85_0%,var(--color-navy)_38%,var(--color-navy-3)_100%)]">
        <Wrap>
          <img className="w-[150px] h-auto mt-0 mx-auto mb-[22px]" src={logo} alt="Stockount" width="520" height="100" />
          <div className="w-[74px] h-[74px] rounded-[50%] bg-green grid place-items-center mt-0 mx-auto mb-[16px] [box-shadow:0_0_0_10px_rgba(22,163,74,.2)] animate-pop">
            <svg className="w-[38px] h-[38px]" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5 10 17 19 7.5" />
            </svg>
          </div>
          <h1 className="text-[clamp(28px,7.6vw,50px)] leading-[1.1] max-w-[820px] my-0 mx-auto">
            <span className="text-yellow">{visitor.name ? `${visitor.name}, you are` : "You are"}</span> booked for your audit review.
          </h1>
          <p className="text-[16.5px] text-[#d3e2ec] max-w-[600px] mt-[14px] mx-auto mb-0">
            30 minutes that show you where your audit loses time and stock across your locations. Do these 3 things now so the call is
            worth every minute.
          </p>
        </Wrap>
      </header>

      <Section variant="paper">
        <Eyebrow>Do this now</Eyebrow>
        <SectionTitle>3 things before your call</SectionTitle>
        <div className="grid grid-cols-[1fr] gap-[14px] max-w-[1040px] mt-[30px] mx-auto mb-0 min-[900px]:grid-cols-[repeat(3,1fr)]">
          <div className={CARD}>
            <div className={CARD_NUM}>1</div>
            <h3 className={CARD_TITLE}>Confirm on WhatsApp</h3>
            <p className={CARD_TEXT}>Send us one message. It tells us you will be there and lets us reach you if anything changes.</p>
            <a
              className="mt-[16px] inline-flex items-center justify-center gap-[10px] w-full py-[14px] px-[16px] rounded-[14px] border-2 border-ink bg-[#25d366] text-[#05301a] font-extrabold text-[15.5px] uppercase tracking-[.03em] no-underline [box-shadow:0_5px_0_var(--color-ink)] whitespace-nowrap active:[transform:translateY(4px)] active:[box-shadow:0_1px_0_var(--color-ink)]"
              href={`${WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener"
            >
              <svg className="w-[22px] h-[22px] flex-none" viewBox="0 0 24 24" fill="#05301a">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z" />
              </svg>
              Confirm on WhatsApp
            </a>
          </div>
          <div className={CARD}>
            <div className={CARD_NUM}>2</div>
            <h3 className={CARD_TITLE}>Save it to your calendar</h3>
            <p className={CARD_TEXT}>
              Your confirmation email has the invite. Open it and tap <b>Add to calendar</b>, so a busy day does not swallow it.
            </p>
          </div>
          <div className={CARD}>
            <div className={CARD_NUM}>3</div>
            <h3 className={CARD_TITLE}>Keep these ready</h3>
            <ul className="mt-[10px] mx-0 mb-0 p-0 list-none">
              {READY.map((item) => (
                <li key={item} className={CHECK_ITEM}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <Eyebrow>What you leave with</Eyebrow>
        <SectionTitle>In 30 minutes you will know</SectionTitle>
        <div className="grid grid-cols-[1fr] gap-[10px] max-w-[820px] mt-[26px] mx-auto mb-0 min-[860px]:grid-cols-[repeat(3,1fr)]">
          {LEAVE_WITH.map((item, i) => (
            <div
              key={item}
              className="flex gap-[12px] items-center bg-[rgba(255,255,255,.06)] border border-[rgba(255,255,255,.14)] rounded-[14px] py-[14px] px-[16px] font-bold text-[16px]"
            >
              <i className="flex-none not-italic w-[30px] h-[30px] rounded-[50%] bg-yellow text-ink grid place-items-center font-black">{i + 1}</i>
              {item}
            </div>
          ))}
        </div>
        <VideoFacade variant="compact" />
        <p className="text-center mt-[12px] text-[#c8d8e3] text-[14px] font-semibold">Watch this before your call. 1 minute 39 seconds.</p>
      </Section>

      <Section>
        <Eyebrow>You are in good company</Eyebrow>
        <SectionTitle>Businesses that fixed their audits</SectionTitle>
        <div className="grid grid-cols-[1fr] gap-[14px] max-w-[1040px] mt-[28px] mx-auto mb-0 min-[860px]:grid-cols-[1fr_1fr]">
          {QUOTES.map((q) => (
            <div key={q.name} className="bg-white rounded-[18px] border border-line py-[20px] px-[18px]">
              <div className="flex gap-[12px] items-center">
                <div className="flex-none w-[56px] h-[56px] rounded-[50%] border-2 border-line grid place-items-center p-[5px] bg-white">
                  <img src={q.logo} alt={q.alt} />
                </div>
                <div>
                  <b className="block text-[15px]">{q.name}</b>
                  <span className="block text-[13px] text-muted">{q.company}</span>
                </div>
              </div>
              <blockquote className="mt-[12px] mx-0 mb-0 text-[16px] leading-[1.55] font-medium">{q.quote}</blockquote>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <div className="max-w-[760px] my-0 mx-auto text-center bg-[#fff7e0] border-2 border-yellow-3 rounded-[18px] py-[22px] px-[18px]">
          <h3 className="text-[20px]">Need to change the time?</h3>
          <p className="text-[15.5px] text-ink-2 mt-[8px]">
            Use the reschedule link in your confirmation email, or message us on{" "}
            <a className="text-navy font-extrabold" href={WHATSAPP} target="_blank" rel="noopener">
              WhatsApp at +91 96003 38814
            </a>
            . Please do not just skip it. Someone is keeping 30 minutes free for your audit.
          </p>
        </div>
      </Section>

      <Footer compact />
    </>
  );
}
