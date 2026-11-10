import { useState } from "react";
import { CONFIG } from "../../lib/config";
import poster from "../../assets/img/video-poster.webp";

const PLAY_ICON = (
  <path d="M6 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L7.5 3.64A1 1 0 0 0 6 4.5z" />
);

const FRAME =
  "relative mx-auto mb-0 rounded-[20px] overflow-hidden border-[3px] border-[rgba(255,255,255,.16)] " +
  "[box-shadow:0_24px_60px_rgba(0,0,0,.45)] aspect-[1/1] bg-[#0b2233] cursor-pointer";

const PLAY = "absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)] rounded-[50%] [border:none] cursor-pointer bg-yellow grid place-items-center";

/**
 * Poster image that swaps to the Wistia player on click / Enter / Space,
 * so the video script only loads when someone asks for it.
 * `variant="hero"` adds the gradient shade, caption and pulsing play button.
 */
export default function VideoFacade({ variant = "hero" }) {
  const [playing, setPlaying] = useState(false);
  const hero = variant === "hero";
  const play = () => setPlaying(true);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      play();
    }
  };
  const src = `https://fast.wistia.net/embed/iframe/${CONFIG.wistiaId}?autoPlay=true&seo=false${hero ? "&videoFoam=false" : ""}`;

  return (
    <div
      className={`${FRAME} ${hero ? "max-w-[560px] mt-[30px]" : "max-w-[520px] mt-[28px]"}`}
      role="button"
      tabIndex={0}
      aria-label="Play the Stockount video"
      onClick={play}
      onKeyDown={onKeyDown}
    >
      <img className="w-full h-full object-cover" src={poster} alt="Stockount stock count on a phone" width="720" height="720" />
      {hero && <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,30,47,0)_45%,rgba(2,30,47,.82)_100%)]" />}
      <button
        className={
          hero
            ? `${PLAY} w-[86px] h-[86px] [box-shadow:0_0_0_10px_rgba(255,199,44,.28),0_10px_30px_rgba(0,0,0,.4)] animate-play-ring`
            : `${PLAY} w-[82px] h-[82px] [box-shadow:0_0_0_10px_rgba(255,199,44,.28)]`
        }
        type="button"
        aria-label="Play video"
      >
        <svg className={hero ? "w-[30px] h-[30px] ml-[5px]" : "w-[28px] h-[28px] ml-[5px]"} viewBox="0 0 24 24" fill="#0b1620">
          {PLAY_ICON}
        </svg>
      </button>
      {hero && (
        <div className="absolute left-0 right-0 bottom-0 min-h-[19%] py-[12px] px-[16px] bg-[linear-gradient(180deg,rgba(2,30,47,.9),#021e2f)] border-t border-t-[rgba(255,255,255,.12)] flex justify-between items-center gap-[10px] text-[13.5px] font-bold text-white text-left">
          <span>See a stock count run on Stockount</span>
          <span className="flex-none bg-[rgba(0,0,0,.55)] py-[4px] px-[9px] rounded-[8px] tabular-nums">1:39</span>
        </div>
      )}
      {playing && (
        <iframe
          className="absolute inset-0 w-full h-full [border:0]"
          src={src}
          allow="autoplay; fullscreen"
          allowFullScreen={hero || undefined}
          title="Stockount demo video"
        />
      )}
    </div>
  );
}
