/* The eight tap-to-answer qualifier questions, in order. Step 9 is the contact
   form and step 10 the slot picker. An option is either a string (value = label)
   or [value sent to Desk, label shown]. `key` is the Desk field name. */
export const OPTION_STEPS = [
  {
    key: "locations",
    title: "How many locations hold your stock?",
    hint: "Stores, warehouses, plants or dealer points.",
    options: ["1 to 4", "5 to 9", "10 to 19", "20 to 49", "50 to 199", "200 or more"],
  },
  {
    key: "skus",
    title: "Roughly how many items (SKUs) do you track?",
    hint: "Across all locations together.",
    options: ["Under 5,000", "5,000 to 20,000", "20,000 to 1 lakh", "Over 1 lakh"],
  },
  {
    key: "industry",
    title: "What kind of business is it?",
    options: [
      "Retail chain or stores",
      "Distribution, wholesale or 3PL",
      "Manufacturing",
      "Auto dealer group",
      "Pharma",
      "E-commerce or D2C warehouse",
      "Something else",
    ],
  },
  {
    key: "auditOwner",
    title: "Who runs your stock audits today?",
    options: [
      "Our own audit team",
      ["Outside auditors", "Outside auditors (CA firm or agency)"],
      "Store or warehouse staff",
      "We do not audit regularly",
    ],
  },
  {
    key: "erp",
    title: "Which software holds your stock?",
    twoColumns: true,
    options: ["Busy", "Tally", "Gofrugal", "Zoho", "SAP", "Odoo", ["Own or custom ERP", "Own or custom"], "Something else"],
  },
  {
    key: "goal",
    title: "When do you want your audits fixed?",
    options: ["This month", "Before the 31 March year-end", "Just exploring for now"],
  },
  {
    key: "role",
    title: "What is your role?",
    options: [
      "Owner or Director",
      "Head of audit or inventory control",
      "Operations or Warehouse head",
      "Finance or Accounts head",
      "Other team member",
    ],
  },
  {
    key: "attendee",
    title: "The review runs on your own audit data. Who will join the call?",
    hint: "30 minutes. The person who owns your audits gets the most out of it.",
    options: ["I will join myself", "I will join with our audit or operations head", "Our audit or operations head will join"],
  },
];

export const LANGUAGES = [
  ["English", "English"],
  ["Tamil", "தமிழ்"],
  ["Hindi", "हिंदी"],
];

/** Number of steps counted in "Step n of 9" (8 questions + the contact form). */
export const TOTAL_STEPS = OPTION_STEPS.length + 1;
export const FORM_STEP = TOTAL_STEPS;
export const BOOKING_STEP = TOTAL_STEPS + 1;
