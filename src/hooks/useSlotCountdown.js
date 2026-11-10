import { useEffect, useState } from "react";
import { nextWindow } from "../lib/schedule";

function read() {
  const now = new Date();
  const s = Math.floor(Math.max(0, nextWindow(now) - now) / 1000);
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}

/** Time left until the current slot round closes, refreshed every second. */
export function useSlotCountdown() {
  const [left, setLeft] = useState(read);
  useEffect(() => {
    const id = setInterval(() => setLeft(read()), 1000);
    return () => clearInterval(id);
  }, []);
  return left;
}
