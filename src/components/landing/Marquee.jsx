const ITEMS = [
  <><b className="text-navy">1M+ SKUs</b> audited on Stockount</>,
  <>7-day audit now done in <b className="text-navy">2 days</b> at VMC Royal Enfield</>,
  <><b className="text-navy">88% fewer</b> stock discrepancies at VMC Royal Enfield</>,
  <><b className="text-navy">7 to 8 storages</b> audited in one day at Lumino Industries</>,
  <>Works with <b className="text-navy">Busy, Tally, Gofrugal</b> and <b className="text-navy">Zoho</b></>,
  <>Live in <b className="text-navy">1 day</b>. No ERP migration</>,
];

const ITEM =
  "inline-flex items-center gap-[10px] font-extrabold text-[14.5px] text-ink px-[22px] " +
  "after:content-[''] after:w-[9px] after:h-[9px] after:[transform:rotate(45deg)] after:bg-orange after:ml-[22px] after:rounded-[2px]";

/** Yellow results ticker. The list is rendered twice so the -50% scroll loops seamlessly. */
export default function Marquee() {
  return (
    <div className="bg-yellow border-t-2 border-b-2 border-t-ink border-b-ink overflow-hidden whitespace-nowrap" aria-label="Stockount results">
      <div className="inline-flex animate-marquee py-[12px] motion-reduce:[animation-duration:160s]">
        {[false, true].map((copy) =>
          ITEMS.map((item, i) => (
            <span key={`${copy}-${i}`} className={ITEM} aria-hidden={copy ? "true" : undefined}>
              {item}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
