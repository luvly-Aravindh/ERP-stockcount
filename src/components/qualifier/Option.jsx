const BASE =
  "flex items-center w-full text-left font-sans font-bold text-ink border-2 rounded-[14px] cursor-pointer " +
  "[transition:border-color_.15s,background_.15s,transform_.1s] hover:border-navy active:[transform:scale(.99)]";

const SIZES = {
  /* one option per row */
  default: "gap-[12px] min-h-[56px] text-[16px] py-[12px] px-[14px]",
  /* two-column grid */
  compact: "gap-[12px] min-h-[52px] text-[15px] py-[10px] px-[12px]",
  /* language chips: centred label, no radio dot */
  chip: "gap-[12px] min-h-[48px] justify-center text-[15px] p-[8px]",
};

/** One tappable answer with a radio dot. */
export default function Option({ label, selected, size = "default", onClick }) {
  return (
    <button
      type="button"
      data-opt=""
      className={`${BASE} ${SIZES[size]} ${selected ? "border-navy bg-[#eef5fa]" : "border-line bg-white"}`}
      onClick={onClick}
    >
      <span
        className={`flex-none w-[22px] h-[22px] rounded-[50%] border-2 place-items-center ${size === "chip" ? "hidden" : "grid"} ${
          selected
            ? "border-navy bg-navy after:content-[''] after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-white"
            : "border-[#9fb3c1]"
        }`}
      />
      {label}
    </button>
  );
}

export function BackButton({ onClick }) {
  return (
    <button
      className="mt-[16px] [background:none] [border:none] text-muted font-sans font-bold text-[14px] cursor-pointer py-[6px] px-0"
      type="button"
      onClick={onClick}
    >
      ← Back
    </button>
  );
}
