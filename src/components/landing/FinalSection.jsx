import { Section } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";
import { nextClose } from "../../lib/schedule";

const close = nextClose();

export default function FinalSection() {
  return (
    <Section id="book" variant="final">
      <h2 className="text-[clamp(28px,7vw,46px)] leading-[1.1] max-w-[820px] my-0 mx-auto">
        Your {close.l} books close on {close.day} {close.monLong}. Make sure every location's count matches them.
      </h2>
      <p className="text-[17px] text-[#c8d8e3] max-w-[600px] mt-[14px] mx-auto mb-0">
        Book 30 minutes. See where your audit loses time and stock. Fix that first.
      </p>
      <CtaBlock
        wide
        diwali
        meta="Free · 30 minutes · your own data"
        note="60-second check first. Built for 10+ locations or 20,000+ SKUs."
      />
    </Section>
  );
}
