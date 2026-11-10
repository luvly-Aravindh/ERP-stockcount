import { CONFIG } from "./config";

const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MON_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** Quarter-close: always the next real quarter end (23:59:59 IST). */
export function nextClose(now = new Date()) {
  const y = now.getFullYear();
  const list = [
    [y, 2, 31, "Year-end"],
    [y, 5, 30, "Q1"],
    [y, 8, 30, "Q2"],
    [y, 11, 31, "Q3"],
    [y + 1, 2, 31, "Year-end"],
  ];
  for (let i = 0; i < list.length; i++) {
    const d = new Date(Date.UTC(list[i][0], list[i][1], list[i][2], 18, 29, 59));
    if (d > now) return { d, l: list[i][3], day: list[i][2], mon: MON[list[i][1]], monLong: MON_LONG[list[i][1]] };
  }
  return null;
}

/** Slot window: review slots open in 2 rounds a week, closing Wednesday and Sunday 23:59 IST. */
export function nextWindow(now = new Date()) {
  const ist = new Date(now.getTime() + 19800000);
  for (let add = 0; add < 9; add++) {
    const d = new Date(Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate() + add, 23, 59, 59));
    const dow = d.getUTCDay();
    if (dow === 0 || dow === 3) {
      const real = new Date(d.getTime() - 19800000);
      if (real > now) return real;
    }
  }
  return null;
}

export const preDiwali = new Date() < new Date(CONFIG.diwaliUntil);

export const slotLabel = preDiwali ? "First post-Diwali slots close in" : "Slots for this round close in";
