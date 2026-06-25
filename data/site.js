// =============================================================================
//  CHINA WOK — SITE CONFIG
//  Edit the values here to update the whole site. No layout code to touch.
// =============================================================================

export const SITE = {
  name: "China Wok",
  // Short, warm, honest tagline — shown under the name in the hero.
  tagline: "Hearty Chinese-American takeout, made for the neighborhood.",

  // ---- Ordering (off-site via Hero Foodie) --------------------------------
  // Live Hero Foodie ordering link. Every "Order Online" button uses this and
  // opens it in a new tab.
  orderUrl: "https://thechinawok168.com/order/#/pages/menu/menu?urlparam=china-wok-chapel-hill-27514",
  orderLabel: "via Hero Foodie", // small note shown next to the order button

  // ---- Contact ------------------------------------------------------------
  phoneDisplay: "(919) 942-6388",
  phoneHref: "tel:+19199426388",

  address: {
    line1: "1129 Weaver Dairy Rd #D",
    city: "Chapel Hill",
    state: "NC",
    zip: "27514",
  },

  // ---- Hours --------------------------------------------------------------
  // 24h "HH:MM" in the restaurant's local time (Eastern). Used for the
  // "Open now / Closed" indicator AND rendered into the Hours tables.
  // Index 0 = Sunday ... 6 = Saturday (matches JavaScript's Date.getDay()).
  timezone: "America/New_York",
  hours: [
    { day: "Sunday", closed: true },
    { day: "Monday", open: "11:00", close: "21:30" },
    { day: "Tuesday", open: "11:00", close: "21:30" },
    { day: "Wednesday", open: "11:00", close: "21:30" },
    { day: "Thursday", open: "11:00", close: "21:30" },
    { day: "Friday", open: "11:00", close: "22:30" },
    { day: "Saturday", open: "11:00", close: "22:30" },
  ],

  // ---- Map ----------------------------------------------------------------
  // Keyless Google Maps embed + directions link (no API key required).
  mapEmbedUrl:
    "https://www.google.com/maps?q=1129+Weaver+Dairy+Rd+%23D,+Chapel+Hill,+NC+27514&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1129%20Weaver%20Dairy%20Rd%20%23D%2C%20Chapel%20Hill%2C%20NC%2027514",

  // ---- Social (optional) --------------------------------------------------
  // Leave a URL blank ("") to hide that link. [PLACEHOLDER]
  social: {
    facebook: "",
    instagram: "",
  },
};
