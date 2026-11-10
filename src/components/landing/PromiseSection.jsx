import { Section } from "../ui/Section";
import CtaBlock from "../ui/CtaBlock";

const SCALLOP =
  "M224.00,120.00 Q235.64,129.10 222.72,136.27 Q232.79,147.08 218.91,152.14 Q227.17,164.39 212.66,167.22 Q218.91,180.61 204.14,181.13 Q208.21,195.34 193.54,193.54 Q195.34,208.21 181.13,204.14 Q180.61,218.91 167.22,212.66 Q164.39,227.17 152.14,218.91 Q147.08,232.79 136.27,222.72 Q129.10,235.64 120.00,224.00 Q110.90,235.64 103.73,222.72 Q92.92,232.79 87.86,218.91 Q75.61,227.17 72.78,212.66 Q59.39,218.91 58.87,204.14 Q44.66,208.21 46.46,193.54 Q31.79,195.34 35.86,181.13 Q21.09,180.61 27.34,167.22 Q12.83,164.39 21.09,152.14 Q7.21,147.08 17.28,136.27 Q4.36,129.10 16.00,120.00 Q4.36,110.90 17.28,103.73 Q7.21,92.92 21.09,87.86 Q12.83,75.61 27.34,72.78 Q21.09,59.39 35.86,58.87 Q31.79,44.66 46.46,46.46 Q44.66,31.79 58.87,35.86 Q59.39,21.09 72.78,27.34 Q75.61,12.83 87.86,21.09 Q92.92,7.21 103.73,17.28 Q110.90,4.36 120.00,16.00 Q129.10,4.36 136.27,17.28 Q147.08,7.21 152.14,21.09 Q164.39,12.83 167.22,27.34 Q180.61,21.09 181.13,35.86 Q195.34,31.79 193.54,46.46 Q208.21,44.66 204.14,58.87 Q218.91,59.39 212.66,72.78 Q227.17,75.61 218.91,87.86 Q232.79,92.92 222.72,103.73 Q235.64,110.90 224.00,120.00Z";

const FONT = "Plus Jakarta Sans,sans-serif";

function PromiseSeal() {
  return (
    <svg
      className="w-[210px] h-[210px] my-0 mx-auto min-w-0 [filter:drop-shadow(0_14px_26px_rgba(0,0,0,.35))] min-[760px]:w-[240px] min-[760px]:h-[240px]"
      viewBox="0 0 240 240"
      role="img"
      aria-label="The 30-minute promise seal"
    >
      <defs>
        <path id="ring" d="M120,120 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
        <radialGradient id="sg" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#ffe07a" />
          <stop offset=".55" stopColor="#ffc72c" />
          <stop offset="1" stopColor="#d99a00" />
        </radialGradient>
        <radialGradient id="sn" cx="45%" cy="35%" r="70%">
          <stop offset="0" stopColor="#0a5a85" />
          <stop offset="1" stopColor="#022a40" />
        </radialGradient>
      </defs>
      <path d={SCALLOP} fill="#e9a800" stroke="#0b1620" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="120" cy="120" r="102" fill="url(#sg)" stroke="#0b1620" strokeWidth="3" />
      <circle cx="120" cy="120" r="94" fill="none" stroke="#0b1620" strokeWidth="1.5" strokeDasharray="2 4" />
      <circle cx="120" cy="120" r="70" fill="url(#sn)" stroke="#0b1620" strokeWidth="3" />
      <text fontFamily={FONT} fontWeight="800" fontSize="15" fill="#0b1620">
        <textPath href="#ring" startOffset="0" textLength="522" lengthAdjust="spacing">
          THE 30-MINUTE PROMISE • NO PITCH • YOUR DATA •
        </textPath>
      </text>
      <text x="120" y="118" textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize="44" fill="#ffc72c">
        30
      </text>
      <text x="120" y="142" textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize="15" letterSpacing="3" fill="#ffffff">
        MINUTES
      </text>
      <text x="120" y="162" textAnchor="middle" fontFamily={FONT} fontWeight="700" fontSize="10" letterSpacing="2" fill="#9fc3d8">
        FREE REVIEW
      </text>
    </svg>
  );
}

export default function PromiseSection() {
  return (
    <Section id="promise" variant="dark">
      <div className="grid grid-cols-[1fr] gap-[22px] items-center max-w-[900px] my-0 mx-auto text-center min-[760px]:grid-cols-[240px_1fr] min-[760px]:text-left">
        <PromiseSeal />
        <div className="min-w-0">
          <h2 className="text-[clamp(26px,6vw,38px)] leading-[1.15]">The 30-minute promise</h2>
          <p className="text-[16.5px] text-[#c8d8e3] mt-[12px]">
            We stop at 30 minutes.{" "}
            <b className="text-white">
              You leave knowing where your audit loses time and stock across your locations, whether you buy or not.
            </b>{" "}
            No sales pitch unless you ask to see Stockount.
          </p>
          <CtaBlock
            className="mt-[22px] min-[760px]:items-start"
            meta="Free · 30 minutes · your own data"
            note="60-second check first. Built for 10+ locations or 20,000+ SKUs."
          />
        </div>
      </div>
    </Section>
  );
}
