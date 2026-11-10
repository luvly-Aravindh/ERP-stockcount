import { useEffect, useRef, useState } from "react";

/**
 * Runs a one-off 0 -> 1 ease-out progress the first time the referenced element
 * is 40% visible. Stays at 1 (final numbers) for reduced-motion visitors and
 * until the element scrolls into view.
 */
export function useCountUp(duration = 1300) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frame = 0;
    const io = new IntersectionObserver(
      (entries, observer) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const t0 = performance.now();
        const step = (t) => {
          const k = Math.min(1, (t - t0) / duration);
          setProgress(1 - Math.pow(1 - k, 3));
          if (k < 1) frame = requestAnimationFrame(step);
        };
        step(t0);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration]);

  return [ref, progress];
}
