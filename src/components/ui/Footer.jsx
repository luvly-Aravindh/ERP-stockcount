import { Wrap } from "./Section";
import logo from "../../assets/img/logo-stockount.webp";

const LINK = "text-[#cfe0ea] no-underline mx-[8px] hover:underline";

/** `compact` drops the extra bottom space the landing page keeps for its sticky bar. */
export default function Footer({ compact = false }) {
  return (
    <footer className={`bg-navy-4 text-[#9fb3c1] text-[13px] pt-[26px] text-center ${compact ? "pb-[30px]" : "pb-[120px]"}`}>
      <Wrap>
        <img className="h-[26px] w-auto mx-auto mt-0 mb-[12px] opacity-95" src={logo} alt="Stockount" width="520" height="100" />
        <p>© 2026 Stockount. All rights reserved.</p>
        <p className="mt-[8px]">
          <a className={LINK} href="https://www.stockount.com/privacy-policy" target="_blank" rel="noopener">
            Privacy Policy
          </a>
          <a className={LINK} href="https://www.stockount.com/terms-and-conditions" target="_blank" rel="noopener">
            Terms
          </a>
        </p>
      </Wrap>
    </footer>
  );
}
