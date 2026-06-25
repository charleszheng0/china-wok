// =============================================================================
//  CHINA WOK — DISHES
// =============================================================================
//  SHOWCASE = curated "this week's picks" cards (photo + name + price + an
//             "Order now" button). DISHES = the full, real menu, grouped by
//             CATEGORIES (shown in the menu section with filter pills).
//
//  Edit a price: change the `price` string (no "$"; it's added for you).
//  Per-dish order link (showcase only): add  order: "https://…"  to send the
//  "Order now" button straight to that dish online. If omitted, the button
//  falls back to the main Hero Foodie menu link in data/site.js.
// =============================================================================

//  Each showcase dish gets a detail page at  dish.html?dish=<slug>.
//    slug  — URL id (keep it unique, lowercase, hyphenated)
//    blurb — the delicious description shown on the detail page
//    img   — detail-page food photo (e.g. "assets/img/beef-broccoli.jpg").
//            Leave null to show a placeholder until a real shot is dropped in.
//    order — optional per-dish online order link (falls back to SITE.orderUrl)
export const SHOWCASE = [
  { name: "Beef & Broccoli", price: "15.95", slug: "beef-and-broccoli", img: "assets/img/beef-and-broccoli.webp",
    blurb: "Tender slices of marinated flank beef seared at high heat for unmistakable smoky depth. Broccoli and sweet ribbons of carrot are tossed in and finished in a rich, glossy savory brown sauce." },
  { name: "Hot & Spicy Shredded Beef", price: "15.95", slug: "hot-spicy-shredded-beef", img: null,
    blurb: "Hand-shredded beef fried until crisp, then tossed with sliced peppers and onions in a sweet-and-spicy chili sauce." },
  { name: "Singapore Angel Hair", price: "14.45", slug: "singapore-angel-hair", img: "assets/img/singapore-angel-hair.jpg",
    blurb: "Thin rice noodles stir-fried at high heat with tender shrimp, shredded chicken, roasted pork, crisp vegetables, and a silky scrambled egg, all tossed in a fragrant curry seasoning." },
  { name: "Salt & Pepper Shrimp", price: "17.45", slug: "salt-and-pepper-shrimp", img: null,
    blurb: "Battered velveted jumbo shrimp fried at high heat until golden, tossed with toasted salt, cracked pepper, and fragrant garlic over a bed of lettuce, diced onions and peppers." },
  { name: "Mongolian Beef or Chicken", price: "15.95", slug: "mongolian-beef-or-chicken", img: null,
    blurb: "Tender slices of beef or chicken stir-fried with sweet onions and peppers in a rich, savory brown sauce, served over crispy noodles and fresh lettuce." },
  { name: "Eggplant with Garlic Sauce", price: "13.95", slug: "eggplant-with-garlic-sauce", img: null,
    blurb: "Tender wok-cooked eggplant blistered at high heat, tossed in a bold, savory garlic sauce." },
  { name: "Flounder Fish", price: "16.95", slug: "flounder-fish", img: null,
    blurb: "Thick-cut battered flounder fried until golden and crisp, finished with your choice of savory sauce." },
  { name: "Pad Thai", price: "15.45", slug: "pad-thai", img: null,
    blurb: "Silky rice noodles wok-tossed at high heat with golden egg and crisp bean sprouts, glazed in a sweet, tangy, and lightly spicy tamarind sauce, finished with crushed roasted peanuts and a bright squeeze of lemon." },
  { name: "Moo Shu Chicken", price: "14.95", slug: "moo-shu-chicken", img: null,
    blurb: "Tender shredded chicken wok-fried with golden egg, savory mushrooms, and crisp shredded vegetables, served with thin pancakes and sweet plum sauce to wrap at the table." },
  { name: "Happy Family", price: "18.45", slug: "happy-family", img: null,
    blurb: "Plump shrimp, tender sea scallops, sliced beef, juicy chicken, and savory roast pork wok-tossed at high heat with crisp garden vegetables, all glazed in a rich, glossy brown sauce." },
  { name: "Shrimp with Lobster Sauce", price: "15.95", slug: "shrimp-with-lobster-sauce", img: "assets/img/shrimp-with-lobster-sauce.jpeg",
    blurb: "Plump jumbo shrimp simmered in a silky, savory white sauce with slowly drizzled beaten egg and sweet green peas." },
  { name: "Sesame Chicken", price: "15.95", slug: "sesame-chicken", img: null,
    blurb: "Crispy battered chicken fried until golden and crisp, tossed in a sweet, glossy sesame glaze and finished with toasted sesame seeds." },
];

export const CATEGORIES = [
  "Appetizers", "Soups", "Combination", "Chicken", "Pork", "Shrimp", "Beef",
  "Hong Kong Noodles", "Fried Rice or Lo Mein", "Egg Foo Young", "Thai Dishes",
  "Vegetarian", "House Specialties",
];

const EXTRA_PANCAKES = "Extra pancakes $0.75 each.";

export const DISHES = [
  // ---- Chicken ----
  { category: "Chicken", name: "Chicken & Broccoli", price: "14.95" },
  { category: "Chicken", name: "Moo Goo Gai Pan", price: "14.95" },
  { category: "Chicken", name: "Chicken & Cashew Nuts", price: "14.95" },
  { category: "Chicken", name: "Sweet & Sour Chicken", price: "14.95" },
  { category: "Chicken", name: "Moo Shu Chicken w/ Pancakes (4)", price: "14.95", desc: EXTRA_PANCAKES },
  { category: "Chicken", name: "Chicken w/ Mixed Vegetables", price: "14.95" },
  { category: "Chicken", name: "Hunan Chicken", price: "14.95" },
  { category: "Chicken", name: "Kung Pao Chicken", price: "14.95" },
  { category: "Chicken", name: "Chicken w/ Garlic Sauce", price: "14.95" },
  { category: "Chicken", name: "Szechuan Chicken", price: "14.95" },
  { category: "Chicken", name: "Curry Chicken", price: "14.95" },
  { category: "Chicken", name: "Hot & Spicy Chicken", price: "14.95" },
  { category: "Chicken", name: "Lemon Chicken", price: "14.95" },

  // ---- Pork ----
  { category: "Pork", name: "Roast Pork w/ Broccoli", price: "14.95" },
  { category: "Pork", name: "Moo Shu Pork w/ Pancakes (4)", price: "14.95", desc: EXTRA_PANCAKES },
  { category: "Pork", name: "Pork w/ Mixed Vegetables", price: "14.95" },
  { category: "Pork", name: "Sweet & Sour Pork", price: "14.95" },
  { category: "Pork", name: "Pork w/ Garlic Sauce", price: "14.95" },
  { category: "Pork", name: "Double Cooked Pork", price: "14.95" },
  { category: "Pork", name: "Hot & Spicy Shredded Pork", price: "14.95" },

  // ---- Beef ----
  { category: "Beef", name: "Beef w/ Broccoli", price: "15.95" },
  { category: "Beef", name: "Beef w/ Snow Peas", price: "15.95" },
  { category: "Beef", name: "Beef w/ Mixed Vegetables", price: "15.95" },
  { category: "Beef", name: "Beef Pepper Steak w/ Onions", price: "15.95" },
  { category: "Beef", name: "Moo Shu Beef w/ Pancakes (4)", price: "15.95", desc: EXTRA_PANCAKES },
  { category: "Beef", name: "Hunan Beef", price: "15.95" },
  { category: "Beef", name: "Beef w/ Garlic Sauce", price: "15.95" },
  { category: "Beef", name: "Szechuan Beef", price: "15.95" },
  { category: "Beef", name: "Curry Beef", price: "15.95" },
  { category: "Beef", name: "Sha Cha Beef", price: "15.95" },
  { category: "Beef", name: "Hot & Spicy Shredded Beef", price: "15.95" },

  // ---- Shrimp ----
  { category: "Shrimp", name: "Shrimp Chow Mein", price: "15.95" },
  { category: "Shrimp", name: "Shrimp w/ Broccoli", price: "15.95" },
  { category: "Shrimp", name: "Shrimp w/ Mixed Vegetables", price: "15.95" },
  { category: "Shrimp", name: "Shrimp w/ Cashew Nuts", price: "15.95" },
  { category: "Shrimp", name: "Sweet & Sour Shrimp", price: "15.95" },
  { category: "Shrimp", name: "Shrimp w/ Lobster Sauce", price: "15.95" },
  { category: "Shrimp", name: "Hunan Shrimp", price: "15.95" },
  { category: "Shrimp", name: "Shrimp w/ Garlic Sauce", price: "15.95" },
  { category: "Shrimp", name: "Szechuan Shrimp", price: "15.95" },
  { category: "Shrimp", name: "Curry Shrimp", price: "15.95" },
  { category: "Shrimp", name: "Salt & Pepper Shrimp", price: "17.45" },
  { category: "Shrimp", name: "Moo Shu Shrimp", price: "15.95" },
  { category: "Shrimp", name: "Hot & Spicy Shrimp", price: "15.95" },

  // ---- House Specialties ----
  { category: "House Specialties", name: "Happy Family", price: "18.45",
    desc: "Jumbo shrimp, scallops, beef, chicken, and pork sautéed with vegetables in a brown sauce." },
  { category: "House Specialties", name: "Seafood Delight", price: "18.95",
    desc: "Scallops, shrimp, crabmeat, squid, and mussels sautéed with vegetables in a special sauce." },
  { category: "House Specialties", name: "Triple Delight", price: "16.95",
    desc: "Chicken, beef, shrimp, and mixed vegetables in a brown sauce." },
  { category: "House Specialties", name: "Four Seasons", price: "16.95",
    desc: "Jumbo shrimp, beef, chicken, and roast pork sautéed with vegetables." },
  { category: "House Specialties", name: "Dragon & Tiger", price: "17.45",
    desc: "Jumbo shrimp & sliced beef sautéed with mixed vegetables in a brown sauce." },
  { category: "House Specialties", name: "Teriyaki Shrimp & Chicken", price: "16.95",
    desc: "Jumbo shrimp & sliced chicken with mixed vegetables in teriyaki sauce." },
  { category: "House Specialties", name: "Jumbo Shrimp & Chicken in Garlic Sauce", price: "16.95",
    desc: "Stir-fried with green peppers, baby corn, broccoli, water chestnuts, and wood ear mushrooms." },
  { category: "House Specialties", name: "Bangkok Shrimp", price: "16.95",
    desc: "Jumbo shrimp & mixed vegetables in our chef's house special sauce." },
  { category: "House Specialties", name: "Beef w/ Scallops", price: "17.95",
    desc: "Beef & scallops with mixed vegetables in our chef's house special sauce." },
  { category: "House Specialties", name: "Asian Jalapeño Beef", price: "15.95",
    desc: "Marinated sliced beef with jalapeño peppers, served on a bed of fresh lettuce." },
  { category: "House Specialties", name: "Mongolian Beef or Chicken", price: "15.95",
    desc: "Sautéed with onions and scallions, served on crispy angel hair noodles with crisp lettuce." },
  { category: "House Specialties", name: "Ginger Chicken", price: "14.95" },
  { category: "House Specialties", name: "Flounder Fish", price: "16.95",
    desc: "Your choice of sauce: red curry, basil, garlic, hunan, or sweet & sour." },
  { category: "House Specialties", name: "Squid in Sha Cha Sauce", price: "16.45",
    desc: "Wok-seared squid with green peppers, onions, mushrooms, tender bamboo, and baby corn in sha cha sauce." },
  { category: "House Specialties", name: "Sesame Chicken", price: "15.95" },
  { category: "House Specialties", name: "Sesame Beef or Shrimp", price: "16.95" },
  { category: "House Specialties", name: "General Tso's Chicken", price: "15.95" },
  { category: "House Specialties", name: "Orange Chicken or Beef", price: "15.95" },

  // ---- Thai Dishes ----
  { category: "Thai Dishes", name: "Thai Style Fried Tofu w/ Bean Sprouts", price: "14.95" },
  { category: "Thai Dishes", name: "Thai Basil Sauce", price: "16.45",
    desc: "Choice of chicken, beef, shrimp, or roast pork." },
  { category: "Thai Dishes", name: "Red Curry", price: "16.45",
    desc: "Choice of chicken, beef, shrimp, or roast pork." },
  { category: "Thai Dishes", name: "Lemongrass", price: "16.45",
    desc: "Choice of chicken, beef, shrimp, or roast pork." },
  { category: "Thai Dishes", name: "Massaman Curry with Chicken or Shrimp", price: "16.45" },
  { category: "Thai Dishes", name: "Thai Pineapple Fried Rice", price: "15.45",
    desc: "Chicken & shrimp stir-fried with pineapple, carrots, basil leaves, and eggs in a mild curry sauce." },
  { category: "Thai Dishes", name: "Pad Thai", price: "15.45",
    desc: "Choice of chicken, beef, or shrimp. Pan-fried rice noodles with bean sprouts, egg, tofu, scallions, and crushed peanuts." },

  // ---- Vegetarian ----
  { category: "Vegetarian", name: "Broccoli w/ Bean Curd", price: "14.45" },
  { category: "Vegetarian", name: "Sautéed Broccoli", price: "12.25" },
  { category: "Vegetarian", name: "Moo Shu Vegetables w/ Pancakes (4)", price: "13.95", desc: EXTRA_PANCAKES },
  { category: "Vegetarian", name: "Mixed Vegetables w/ Garlic Sauce", price: "12.25" },
  { category: "Vegetarian", name: "Sesame Tofu w/ Sesame Sauce", price: "14.45" },
  { category: "Vegetarian", name: "Bean Curd Home Style", price: "14.45" },
  { category: "Vegetarian", name: "Ma Po Tofu", price: "13.95" },
  { category: "Vegetarian", name: "Eggplant w/ Garlic Sauce", price: "13.95" },
  { category: "Vegetarian", name: "Mixed Vegetables w/ Brown Sauce", price: "12.25" },

  // ---- Egg Foo Young ----
  { category: "Egg Foo Young", name: "Egg Foo Young — Vegetable, Pork, or Chicken", price: "14.95" },
  { category: "Egg Foo Young", name: "Egg Foo Young — Shrimp or Beef", price: "15.45" },

  // ---- Hong Kong Noodles ----
  { category: "Hong Kong Noodles", name: "Chow Fun (Vegetable, Chicken, or Roast Pork)", price: "14.45" },
  { category: "Hong Kong Noodles", name: "Chow Fun (Shrimp or Beef)", price: "14.95",
    desc: "Wide rice noodles stir-fried with scallions, bean sprouts, and snow peas." },
  { category: "Hong Kong Noodles", name: "Singapore Angel Hair", price: "14.45",
    desc: "Thin rice noodles with chicken, shrimp, pork, eggs, scallions, bean sprouts, bell peppers, and yellow curry." },
  { category: "Hong Kong Noodles", name: "Angel Hair", price: "13.95",
    desc: "Choice of chicken, shrimp, beef, or pork. Thin rice noodles with sour cabbage, scallions, bean sprouts, bamboo, and carrots." },
  { category: "Hong Kong Noodles", name: "Hong Kong Style Wonton Noodle Soup", price: "12.55" },
  { category: "Hong Kong Noodles", name: "Roast Pork & Wonton Noodle Soup", price: "13.45" },
  { category: "Hong Kong Noodles", name: "Chicken & Vegetable Noodle Soup", price: "13.95" },
  { category: "Hong Kong Noodles", name: "Shrimp & Vegetable Noodle Soup", price: "14.95" },
  { category: "Hong Kong Noodles", name: "Seafood Noodle Soup", price: "16.45" },

  // ---- Fried Rice or Lo Mein ----
  { category: "Fried Rice or Lo Mein", name: "Plain Fried Rice", price: "9.25" },
  { category: "Fried Rice or Lo Mein", name: "Vegetable Fried Rice or Lo Mein", price: "12.75" },
  { category: "Fried Rice or Lo Mein", name: "Chicken Fried Rice or Lo Mein", price: "13.15" },
  { category: "Fried Rice or Lo Mein", name: "Beef Fried Rice or Lo Mein", price: "13.95" },
  { category: "Fried Rice or Lo Mein", name: "Pork Fried Rice or Lo Mein", price: "12.95" },
  { category: "Fried Rice or Lo Mein", name: "Shrimp Fried Rice or Lo Mein", price: "13.95" },
  { category: "Fried Rice or Lo Mein", name: "House Fried Rice or Lo Mein", price: "13.95" },
  { category: "Fried Rice or Lo Mein", name: "Plain Lo Mein", price: "11.45" },

  // ---- Combination (all $13.95) ----
  { category: "Combination", name: "Lo Mein (Chicken, Beef, Shrimp, or Roast Pork)", price: "13.95" },
  { category: "Combination", name: "Broccoli (Chicken, Beef, Shrimp, or Roast Pork)", price: "13.95" },
  { category: "Combination", name: "Mixed Vegetable (Chicken, Beef, Shrimp, or Roast Pork)", price: "13.95" },
  { category: "Combination", name: "Pepper Steak", price: "13.95" },
  { category: "Combination", name: "Beef or Shrimp w/ Chinese Vegetable", price: "13.95" },
  { category: "Combination", name: "Moo Goo Gai Pan", price: "13.95" },
  { category: "Combination", name: "Chicken w/ Cashew Nuts", price: "13.95" },
  { category: "Combination", name: "Sweet & Sour Chicken or Pork", price: "13.95" },
  { category: "Combination", name: "Curry Chicken w/ Onion", price: "13.95" },
  { category: "Combination", name: "Kung Pao Chicken or Shrimp", price: "13.95" },
  { category: "Combination", name: "Sesame Chicken", price: "13.95" },
  { category: "Combination", name: "General Tso's Chicken", price: "13.95" },
  { category: "Combination", name: "Mixed Vegetable in Garlic Sauce", price: "13.95" },
  { category: "Combination", name: "Fried Tofu w/ Mixed Vegetable", price: "13.95" },
  { category: "Combination", name: "Shrimp w/ Lobster Sauce", price: "13.95" },
  { category: "Combination", name: "Hot & Spicy Shrimp or Chicken", price: "13.95" },
  { category: "Combination", name: "Szechuan Chicken, Beef, or Shrimp", price: "13.95" },
  { category: "Combination", name: "Garlic (Chicken, Beef, Shrimp, or Roast Pork)", price: "13.95" },
  { category: "Combination", name: "Hunan Style (Chicken, Beef, or Shrimp)", price: "13.95" },
  { category: "Combination", name: "Eggplant in Garlic Sauce", price: "13.95" },

  // ---- Appetizers ----
  { category: "Appetizers", name: "Vegetable Spring Roll (1)", price: "1.95" },
  { category: "Appetizers", name: "Egg Roll (1)", price: "2.55" },
  { category: "Appetizers", name: "Shrimp Egg Roll (1)", price: "2.65" },
  { category: "Appetizers", name: "Crab Rangoon (6)", price: "7.15" },
  { category: "Appetizers", name: "Shrimp Toast (4)", price: "7.95" },
  { category: "Appetizers", name: "Fried Shrimp (15)", price: "8.95" },
  { category: "Appetizers", name: "Chicken Wings (6)", price: "8.55" },
  { category: "Appetizers", name: "Fried Dumplings (6)", price: "7.75" },
  { category: "Appetizers", name: "Steamed Dumplings (6)", price: "7.75" },
  { category: "Appetizers", name: "Barbecued Beef Sticks (2)", price: "8.25" },
  { category: "Appetizers", name: "Barbecued Spare Ribs", price: "13.25" },
  { category: "Appetizers", name: "Boneless Spare Ribs", price: "12.55" },
  { category: "Appetizers", name: "Barbecued Chicken Sticks (4)", price: "9.45" },
  { category: "Appetizers", name: "Edamame", price: "5.45" },

  // ---- Soups ----
  { category: "Soups", name: "Egg Drop Soup", price: "3.65" },
  { category: "Soups", name: "Wonton Soup", price: "3.65" },
  { category: "Soups", name: "Hot & Sour Soup", price: "4.75" },
  { category: "Soups", name: "Wonton Egg Drop Soup", price: "4.75" },
  { category: "Soups", name: "Tofu & Vegetable Soup", price: "5.95" },
  { category: "Soups", name: "House Special Soup", price: "8.95" },
  { category: "Soups", name: "Seafood Soup", price: "9.15" },

  // ---- Health dish (listed under Vegetarian) ----
  { category: "Vegetarian", name: "Design Your Own Health Dish", price: "11.95",
    desc: "Steamed. Pick a sauce on the side and 4 items: carrots, broccoli, zucchini, tofu, eggplant, baby corn, snow peas, water chestnuts, mushrooms, or Chinese greens. Add chicken, roast pork, or baby shrimp +$3.00; jumbo shrimp or beef +$3.85." },
];
