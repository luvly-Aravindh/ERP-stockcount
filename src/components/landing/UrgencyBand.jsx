import { useSlotCountdown } from "../../hooks/useSlotCountdown";
import { nextClose, slotLabel } from "../../lib/schedule";
import { pad2 } from "../../lib/format";

const close = nextClose();

/** Red strip at the very top: slot countdown plus the next quarter-close date. */
export default function UrgencyBand() {
  const { d, h, m, s } = useSlotCountdown();
  return (
    <div className="bg-[#c8102e] text-white text-left font-bold text-[13.5px] leading-[1.35] tracking-[.01em] py-[9px] px-[14px] whitespace-normal overflow-hidden text-clip flex items-center justify-center gap-[9px] min-[760px]:text-[14.5px]">
      <span
        className="flex-none w-[10px] h-[10px] rounded-[50%] bg-white [box-shadow:0_0_0_0_rgba(255,255,255,.7)] animate-band-pulse"
        aria-hidden="true"
      />
      <span>
        <b className="font-extrabold">
          {slotLabel}{" "}
          <span className="inline-block bg-[#ffc72c] text-[#0b1620] py-px px-[7px] rounded-[6px] tabular-nums whitespace-nowrap font-extrabold">
            {(d ? d + "d " : "") + pad2(h) + "h " + pad2(m) + "m " + pad2(s) + "s"}
          </span>
        </b>{" "}
        <span className="font-semibold opacity-95">
          {close.l} books close {close.day} {close.mon}. A full audit takes 5 to 7 days.
        </span>
      </span>
    </div>
  );
}
