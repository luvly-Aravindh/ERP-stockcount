import vmcShowroom from "../assets/img/proof-vmc-showroom.webp";
import luminoPlant from "../assets/img/proof-lumino-plant.webp";
import atlasWarehouse from "../assets/img/proof-atlas-warehouse.webp";
import northboundShowroom from "../assets/img/proof-northbound-showroom.webp";
import gulfAudit from "../assets/img/proof-gulf-audit.webp";
import velavan from "../assets/img/client-velavan.webp";
import luminoAvatar from "../assets/img/avatar-lumino.webp";
import lumino from "../assets/img/client-lumino.webp";
import gobyk from "../assets/img/client-gobyk.webp";
import yedvi from "../assets/img/client-yedvi.webp";
import sriVelavan from "../assets/img/client-sri-velavan.webp";
import legendaryExim from "../assets/img/client-legendary-exim.webp";
import redcar from "../assets/img/client-redcar.webp";
import customer from "../assets/img/client-customer.webp";
import freshSupermarket from "../assets/img/client-fresh-supermarket.webp";

/* Section headline for the customer-proof block. */
export const PROOF_HEADLINE = "7 Days Audit Becomes 1 Day Effort.";

/* `small` cards sit three-across on desktop; the first two are the lead stories.
   `avatar` is a logo image, `initials` a monogram. `stars` and `tag` are alternatives. */
export const TESTIMONIALS = [
  {
    photo: { src: vmcShowroom, alt: "VMC Royal Enfield showroom, Chennai", width: 820, height: 489 },
    avatar: { src: velavan, alt: "Velavan Motorcycles" },
    name: "Operations Manager",
    role: ["VMC Royal Enfield, Chennai", "Multi-location Royal Enfield dealer"],
    stars: true,
    quote:
      "“We were drowning in spreadsheets. With Stockount, the same audit that used to take 7 days now finishes in 2, and we know our shrinkage the moment it happens, not at year-end.”",
    before: "Excel workarounds across locations, no live view of mismatches",
    after: "one audit system, parallel team counts, a live variance dashboard",
    stats: [
      ["88%", "fewer stock discrepancies"],
      ["70%", "less audit time"],
      ["3", "audit cycles to full control"],
    ],
  },
  {
    photo: { src: luminoPlant, alt: "Wire stranding line at a cables plant", width: 678, height: 452 },
    avatar: { src: luminoAvatar, alt: "Lumino Industries" },
    name: "Bikash Agarwal",
    role: ["Lumino Industries Ltd.", "Wires and cables manufacturing"],
    stars: true,
    quote:
      "“With tablet-based counting, instant batch identification, and live progress visibility, we now audit 7 to 8 storages in a single day. Our system-versus-physical stock variance has dropped remarkably.”",
    before: "reconciliation took months, storages audited one at a time",
    after: "tablet counting with instant batch identification and live progress",
    stats: [
      ["7 to 8", "storages audited in a day"],
      ["1 day", "to reconcile, down from months"],
      ["Live", "progress across storages"],
    ],
  },
  {
    small: true,
    photo: { src: atlasWarehouse, alt: "Atlas Distribution Group warehouse", width: 820, height: 493 },
    initials: "DW",
    name: "Daniel Walsh",
    role: ["Chief Operating Officer", "Atlas Distribution Group, 3PL"],
    tag: "8 warehouses · 25 client brands",
    quote:
      "“Our team was drowning in Excel files. Stockount became our single counting layer: every brand its own item group, every warehouse its own branch. The Excel files are gone. The errors are gone.”",
    before: "8 warehouses on different software, paper counts re-typed into Excel",
    after: "one system, every brand kept separate, reports sent in hours",
    stats: [
      ["Hours", "for client reports, down from 4 days"],
      ["12", "client ERPs connected"],
      ["200+", "staff counting on phones"],
    ],
  },
  {
    small: true,
    photo: { src: northboundShowroom, alt: "Northbound Bicycles showroom", width: 820, height: 493, bottom: true },
    initials: "EL",
    name: "Emily Larsen",
    role: ["Director of Retail Operations", "Northbound Bicycles, retail"],
    tag: "200+ dealers · D2C · Amazon",
    quote:
      "“For years, our inventory was four separate truths. Stockount didn't replace any of our systems. It just made every system tell the same story. We stopped guessing.”",
    before: "4 different stock numbers, counted once a year",
    after: "one stock number everywhere, weekly cycle counts",
    stats: [
      ["90%", "fewer oversold orders"],
      ["Weekly", "counts, up from once a year"],
      ["0.8 pts", "less shrinkage in 2 quarters"],
    ],
  },
  {
    small: true,
    photo: { src: gulfAudit, alt: "Gulf Audit Solutions auditor at a pharma client site", width: 820, height: 493 },
    initials: "KH",
    name: "Khalid Hassan",
    role: ["Founder and CEO", "Gulf Audit Solutions, pharma audits"],
    tag: "6 GCC countries",
    quote:
      "“We configure once, our auditors scan in seconds, and every client's data stays separate. We've grown from auditing 15 pharma clients to over 60, with the same team size.”",
    before: "half a day mapping barcodes before every new client",
    after: "barcode set-up in 15 minutes, auditors counting within minutes",
    stats: [
      ["15 to 60+", "clients, same team"],
      ["15 min", "set-up, down from 4 hours"],
      ["3x", "faster audits"],
    ],
  },
];

export const CLIENT_LOGOS = [
  { src: velavan, alt: "Velavan Motorcycles" },
  { src: lumino, alt: "Lumino Industries" },
  { src: gobyk, alt: "Gobyk" },
  { src: yedvi, alt: "Yedvi" },
  { src: sriVelavan, alt: "Sri Velavan Motors" },
  { src: legendaryExim, alt: "Legendary Exim" },
  { src: redcar, alt: "Redcar" },
  { src: customer, alt: "Stockount customer" },
  { src: freshSupermarket, alt: "Fresh Supermarket" },
];
