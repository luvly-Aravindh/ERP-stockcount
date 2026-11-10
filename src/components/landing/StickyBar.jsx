import { BookButton } from "../ui/CtaBlock";
import { useSlotCountdown } from "../../hooks/useSlotCountdown";
import { slotLabel } from "../../lib/schedule";
import { pad2 } from "../../lib/format";

const UNIT = "not-italic text-[11px] font-bold text-[#9fb3c1] mt-0 mr-[4px] mb-0 ml-px";

/** Fixed bottom bar with the slot countdown. `visible` once the hero CTA is off screen. */
export default function StickyBar({ visible }) {
  const { d, h, m, s } = useSlotCountdown();
  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-[900] bg-[rgba(1,21,34,.97)] border-t-[3px] border-t-yellow [backdrop-filter:blur(6px)] pt-[9px] px-[12px] pb-[calc(9px+env(safe-area-inset-bottom))] [transition:transform_.35s_ease] ${
        visible ? "[transform:translateY(0)]" : "[transform:translateY(110%)]"
      }`}
      aria-label="Slot window countdown"
    >
      <div className="max-w-[1120px] my-0 mx-auto flex items-center justify-between gap-[10px]">
        <div className="text-white min-w-0">
          <small className="block text-[11px] font-bold text-[#ff8a8a] tracking-[.04em] whitespace-nowrap leading-[1.2]">{slotLabel}</small>
          <strong className="block text-[17px] font-extrabold tabular-nums whitespace-nowrap leading-[1.25] min-[760px]:text-[20px] max-[374px]:text-[15px]">
            {d ? (
              <>
                {d}
                <em className={UNIT}>d</em>
              </>
            ) : null}
            {pad2(h)}
            <em className={UNIT}>h</em>
            {pad2(m)}
            <em className={UNIT}>m</em>
            {pad2(s)}
            <em className={UNIT}>s</em>
          </strong>
        </div>
        <BookButton variant="bar" meta="Free · 30 minutes" />
      </div>
    </div>
  );
}
