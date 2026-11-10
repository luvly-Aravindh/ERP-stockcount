import { useEffect, useState } from "react";

/* ACTIVITY ARRAY: paste 10 REAL recent audit bookings from Desk before switching this on.
   Format: { name: "First L.", city: "City, ST", action: "Just booked an audit review", time: "8 min ago" }
   Left empty on purpose: the ticker stays hidden until real bookings are added. */
const ACTIVITY = [];

const SHOW_MS = 6000;
const EVERY_MS = 11000;
const FIRST_AFTER_MS = 4000;

/** "Someone from City just booked" toast, bottom-left, above the sticky bar. */
export default function ProofTicker() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * (ACTIVITY.length || 1)));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ACTIVITY.length) return undefined;
    let hideTimer;
    let interval;
    const show = () => {
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        setIndex((i) => (i + 1) % ACTIVITY.length);
      }, SHOW_MS);
    };
    const start = setTimeout(() => {
      show();
      interval = setInterval(show, EVERY_MS);
    }, FIRST_AFTER_MS);
    return () => {
      clearTimeout(start);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  const row = ACTIVITY[index] || {};

  return (
    <div
      className={`fixed bottom-[18px] left-[18px] z-[9999] flex items-center gap-[12px] w-auto max-w-[360px] min-w-[280px] py-[10px] pr-[20px] pl-[10px] bg-white rounded-[9999px] [box-shadow:0_6px_16px_rgba(10,10,10,.10),0_2px_4px_rgba(10,10,10,.04)] [transition:transform_.4s_cubic-bezier(.22,1,.36,1),opacity_.4s_ease] motion-reduce:[transition:opacity_0.2s] pointer-events-auto min-[761px]:bottom-[96px] max-[760px]:bottom-[84px] max-[540px]:left-[12px] max-[540px]:right-auto max-[540px]:max-w-[calc(100vw-24px)] max-[540px]:min-w-0 max-[540px]:gap-[10px] max-[540px]:py-[8px] max-[540px]:pr-[14px] max-[540px]:pl-[8px] ${
        visible ? "[transform:translateX(0)] opacity-100" : "[transform:translateX(-120%)] opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="proof-thumb shrink-0 w-[48px] h-[48px] rounded-[50%] relative overflow-hidden max-[540px]:w-[40px] max-[540px]:h-[40px]">
        <svg
          className="absolute top-1/2 left-1/2 [transform:translate(-50%,-60%)] w-[16px] h-[20px] z-[1] [filter:drop-shadow(0_1.5px_2.5px_rgba(59,90,254,.55))] max-[540px]:w-[13px] max-[540px]:h-[16px]"
          viewBox="0 0 22 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 0C4.925 0 0 4.925 0 11c0 7.5 11 17 11 17s11-9.5 11-17c0-6.075-4.925-11-11-11z" fill="#3b5afe" />
          <circle cx="11" cy="11" r="4" fill="#ffffff" />
        </svg>
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
        <div className="text-[14px] leading-[1.25] text-[#0a0a0a] font-bold whitespace-nowrap overflow-hidden text-ellipsis max-[540px]:text-[13px]">
          <span>{row.name}</span>
          <span className="text-[#8b90a4] font-normal"> from </span>
          <span>{row.city}</span>
        </div>
        <div className="text-[12px] leading-[1.25] text-[#5a6080] font-medium whitespace-nowrap overflow-hidden text-ellipsis max-[540px]:text-[11px]">
          {row.action || "Just booked an audit review"}
        </div>
        <div className="flex items-center gap-[5px] text-[11px] leading-[1.25] max-[540px]:text-[10px] max-[540px]:gap-[4px]">
          <span className="text-[#0a0a0a] font-semibold mr-[3px]">{row.time}</span>
          <svg
            className="w-[13px] h-[13px] shrink-0 mr-px max-[540px]:w-[11px] max-[540px]:h-[11px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Z"
              fill="#3b5afe"
            />
            <path d="M8 12.5l2.7 2.7L16.5 9" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="text-[#3b5afe] font-semibold">Verified by Proof</span>
        </div>
      </div>
    </div>
  );
}
