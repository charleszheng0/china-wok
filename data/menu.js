// =============================================================================
//  CHINA WOK — MENU DATA  [PLACEHOLDER CONTENT]
// =============================================================================
//  Every item name and price below is a PLACEHOLDER so the site looks complete
//  for review. Replace them with China Wok's real menu before launch.
//
//  HOW TO EDIT (no layout/CSS knowledge needed):
//    • Change a price:   edit the "price" string (no "$" — it's added for you).
//    • Rename a dish:    edit the "name" string.
//    • Add an item:      copy a { ... } line into the right category's items[].
//    • Remove an item:   delete its { ... } line.
//    • House favorite:   add  favorite: true   (shows a gold ★ badge).
//    • Spicy dish:       add  spicy: true       (shows a 🌶 marker).
//    • Extra note:       add  desc: "..."       (small grey text under the name).
//
//  The four dishes China Wok is known for are pre-marked as favorites:
//    Curry Chicken · Hunan Beef · Moo Shu Pork · Ma Po Tofu
// =============================================================================

export const MENU = {
  placeholder: true,
  categories: [
    {
      id: "lunch",
      name: "Lunch Specials",
      note: "Served 11:00 AM – 3:00 PM with steamed rice.",
      items: [
        { name: "Curry Chicken", price: "8.95", favorite: true, spicy: true },
        { name: "General Tso's Chicken", price: "8.95", spicy: true },
        { name: "Sesame Chicken", price: "8.95" },
        { name: "Chicken with Broccoli", price: "8.95" },
        { name: "Pepper Steak with Onion", price: "8.95" },
        { name: "Sweet & Sour Chicken", price: "8.95" },
        { name: "Shrimp with Lobster Sauce", price: "9.50" },
        { name: "Beef with Broccoli", price: "9.25" },
      ],
    },
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        { name: "Egg Roll (1)", price: "1.75" },
        { name: "Spring Roll (1)", price: "1.75" },
        { name: "Crab Rangoon (6)", price: "6.25" },
        { name: "Fried Dumplings (8)", price: "7.50" },
        { name: "Steamed Dumplings (8)", price: "7.50" },
        { name: "BBQ Spare Ribs (small)", price: "8.95" },
        { name: "Chicken Wings (6)", price: "7.50" },
        { name: "Fried Wonton (10)", price: "5.50" },
      ],
    },
    {
      id: "soups",
      name: "Soups",
      note: "Pint / quart available — ask when you order.",
      items: [
        { name: "Wonton Soup", price: "3.25" },
        { name: "Egg Drop Soup", price: "3.25" },
        { name: "Hot & Sour Soup", price: "3.95", spicy: true },
        { name: "Wonton Egg Drop Mix", price: "3.50" },
        { name: "House Special Soup", price: "6.95" },
      ],
    },
    {
      id: "combos",
      name: "Combo Plates",
      note: "Served with pork fried rice and an egg roll.",
      items: [
        { name: "General Tso's Chicken Combo", price: "10.95", spicy: true },
        { name: "Sesame Chicken Combo", price: "10.95" },
        { name: "Chicken with Broccoli Combo", price: "10.95" },
        { name: "Pepper Steak Combo", price: "10.95" },
        { name: "Shrimp with Broccoli Combo", price: "11.95" },
        { name: "Sweet & Sour Chicken Combo", price: "10.95" },
      ],
    },
    {
      id: "chicken",
      name: "Chicken",
      items: [
        { name: "Curry Chicken", price: "11.95", favorite: true, spicy: true },
        { name: "General Tso's Chicken", price: "11.95", spicy: true },
        { name: "Sesame Chicken", price: "11.95" },
        { name: "Chicken with Broccoli", price: "10.95" },
        { name: "Kung Pao Chicken", price: "11.50", spicy: true },
        { name: "Cashew Chicken", price: "11.50" },
        { name: "Moo Goo Gai Pan", price: "10.95" },
        { name: "Sweet & Sour Chicken", price: "10.95" },
      ],
    },
    {
      id: "beef",
      name: "Beef",
      items: [
        { name: "Hunan Beef", price: "13.50", favorite: true, spicy: true },
        { name: "Pepper Steak with Onion", price: "12.50" },
        { name: "Beef with Broccoli", price: "12.50" },
        { name: "Mongolian Beef", price: "13.50" },
        { name: "Beef with Garlic Sauce", price: "12.95", spicy: true },
        { name: "Beef with Mixed Vegetables", price: "12.50" },
      ],
    },
    {
      id: "pork",
      name: "Pork",
      items: [
        {
          name: "Moo Shu Pork",
          price: "11.95",
          favorite: true,
          desc: "Served with four pancakes & hoisin sauce.",
        },
        { name: "Roast Pork with Chinese Vegetables", price: "10.95" },
        { name: "Sweet & Sour Pork", price: "10.95" },
        { name: "Pork with Garlic Sauce", price: "11.50", spicy: true },
        { name: "BBQ Spare Ribs", price: "13.95" },
        { name: "Roast Pork Lo Mein", price: "10.50" },
      ],
    },
    {
      id: "seafood",
      name: "Seafood",
      items: [
        { name: "Shrimp with Lobster Sauce", price: "13.95" },
        { name: "Kung Pao Shrimp", price: "13.95", spicy: true },
        { name: "Shrimp with Broccoli", price: "13.50" },
        { name: "Sweet & Sour Shrimp", price: "13.50" },
        { name: "Salt & Pepper Shrimp", price: "14.95", spicy: true },
        { name: "Scallops with Mixed Vegetables", price: "15.95" },
      ],
    },
    {
      id: "veggie",
      name: "Vegetable & Tofu",
      items: [
        { name: "Ma Po Tofu", price: "10.95", favorite: true, spicy: true },
        { name: "Buddha's Delight (Mixed Vegetables)", price: "9.95" },
        { name: "Sautéed String Beans", price: "10.50" },
        { name: "Eggplant with Garlic Sauce", price: "10.95", spicy: true },
        { name: "Broccoli with Garlic Sauce", price: "9.95", spicy: true },
        { name: "Family-Style Tofu", price: "10.95" },
      ],
    },
    {
      id: "noodles",
      name: "Noodles & Lo Mein",
      items: [
        { name: "Chicken Lo Mein", price: "9.95" },
        { name: "Roast Pork Lo Mein", price: "9.95" },
        { name: "Beef Lo Mein", price: "10.95" },
        { name: "Shrimp Lo Mein", price: "10.95" },
        { name: "Vegetable Lo Mein", price: "8.95" },
        { name: "House Special Lo Mein", price: "11.50" },
        { name: "Singapore Mei Fun", price: "11.95", spicy: true },
        { name: "Chicken Chow Fun", price: "11.50" },
      ],
    },
    {
      id: "friedrice",
      name: "Fried Rice",
      items: [
        { name: "Chicken Fried Rice", price: "9.50" },
        { name: "Roast Pork Fried Rice", price: "9.50" },
        { name: "Beef Fried Rice", price: "10.50" },
        { name: "Shrimp Fried Rice", price: "10.50" },
        { name: "Vegetable Fried Rice", price: "8.50" },
        { name: "House Special Fried Rice", price: "11.50" },
      ],
    },
    {
      id: "sides",
      name: "Sides",
      items: [
        { name: "Steamed White Rice", price: "2.25" },
        { name: "Brown Rice", price: "2.75" },
        { name: "Pork Fried Rice (side)", price: "4.50" },
        { name: "Egg Roll", price: "1.75" },
        { name: "Crispy Noodles", price: "1.50" },
        { name: "Fortune Cookies (4)", price: "1.00" },
      ],
    },
  ],
};
