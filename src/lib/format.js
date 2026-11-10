export const numberIN = new Intl.NumberFormat("en-IN");

export const pad2 = (n) => (n < 10 ? "0" : "") + n;

export const rupees = (n) => "₹" + numberIN.format(Math.round(n));

/** 250000000 -> "25 crore", 15000000 -> "1.5 crore" */
export const croreWords = (n) => (n / 1e7).toFixed(n % 1e7 ? 1 : 0).replace(/\.0$/, "") + " crore";
