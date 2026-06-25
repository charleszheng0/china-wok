// =============================================================================
//  CHINA WOK — IMAGE CONFIG
// =============================================================================
//  These are TEMPORARY placeholder images pulled from Unsplash (warm, cinematic
//  food/restaurant photos) so the site never ships empty. They are NOT photos
//  of China Wok.
//
//  TWO WAYS TO SET AN IMAGE for any slot below:
//    1) Unsplash placeholder (default): leave  src: null  and set a  query.
//       Run  `npm run fetch:images`  to fill in real Unsplash URLs.
//    2) Your own real photo (later): drop the file in  assets/img/  and set
//       e.g.  src: "assets/img/hero.jpg".  When src is set, the query and the
//       Unsplash attribution are ignored for that slot. No layout changes.
//
//  Category slots are keyed  "cat-<id>"  to match the ids in data/menu.js.
// =============================================================================

export const IMAGES = {
  // Unsplash's free API license requires crediting photographers. When any
  // Unsplash image is used, a small credit line is shown in the footer.
  attributionRequired: true,

  slots: {
    hero: {
      query: "wok fired noodles dark moody steaming bowl",
      alt: "A steaming bowl of wok-fired noodles",
      src: null,
    },
    about: {
      query: "cozy asian restaurant interior warm light",
      alt: "Warm, casual dining room",
      src: null,
    },

    // ---- Top-of-page food showcase strip (4 across) ---------------------
    "showcase-1": { query: "chinese dumplings appetizer dark moody", alt: "Dumplings & egg rolls", src: null },
    "showcase-2": { query: "lo mein noodles chopsticks dark", alt: "Lo mein noodles", src: null },
    "showcase-3": { query: "general tso chicken close up dark", alt: "Crispy chicken", src: null },
    "showcase-4": { query: "chinese beef broccoli wok dark", alt: "Beef stir-fry", src: null },

    // ---- Catering -------------------------------------------------------
    cater: { query: "chinese food party platter spread table", alt: "Party platters for catering", src: null },

    // ---- Menu category banners ------------------------------------------
    "cat-lunch": { query: "chinese takeout lunch box rice", alt: "Chinese lunch special", src: null },
    "cat-appetizers": { query: "chinese dumplings appetizers plate", alt: "Dumplings and appetizers", src: null },
    "cat-soups": { query: "hot and sour soup bowl steam", alt: "Steaming bowl of soup", src: null },
    "cat-combos": { query: "chinese combo plate fried rice", alt: "Combo plate with fried rice", src: null },
    "cat-chicken": { query: "chinese chicken stir fry close up", alt: "Chicken stir-fry", src: null },
    "cat-beef": { query: "chinese beef stir fry wok", alt: "Beef stir-fry in a wok", src: null },
    "cat-pork": { query: "chinese roast pork dish", alt: "Pork dish", src: null },
    "cat-seafood": { query: "chinese shrimp stir fry", alt: "Shrimp stir-fry", src: null },
    "cat-veggie": { query: "tofu vegetable stir fry", alt: "Tofu and vegetables", src: null },
    "cat-noodles": { query: "lo mein noodles chopsticks", alt: "Lo mein noodles", src: null },
    "cat-friedrice": { query: "fried rice wok close up", alt: "Fried rice", src: null },
    "cat-sides": { query: "steamed white rice bowl", alt: "Bowl of steamed rice", src: null },
  },
};
