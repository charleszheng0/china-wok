Build a static marketing website for China Wok, a family-run Chinese-American 
restaurant in a strip mall in Chapel Hill, NC. This is an info/marketing site only — 
all online ordering happens off-site via Hero Foodie, so there is no cart, checkout, 
or backend. Keep it simple, fast, and mobile-first.

BRAND FEEL
Unpretentious strip-mall fixture. Hearty, family-run, cozy — not upscale, not 
"modern Asian fusion," not minimalist-elevated. Think honest local takeout spot, 
the kind of place a family has run for years. Warm and trustworthy, not flashy.

TECH STACK
- Next.js (static export) or plain HTML/CSS/JS — no database, no auth, no server logic
- Deployable to Vercel/Netlify
- Mobile-first responsive design

PAGES / SECTIONS (single page is fine, with anchor nav)
1. Hero
   - Restaurant name "China Wok," short tagline (something warm/honest, not corporate)
   - Large "Order Online" button -> links out to Hero Foodie ordering page 
     [INSERT HERO FOODIE URL], opens in new tab
   - Small label near button like "via Hero Foodie" so the handoff isn't jarring
   - Placeholder for a real hero photo (food or storefront) — use a warm 
     placeholder image for now, I'll swap in real photos later

2. Menu
   - Full categorized menu, scannable, mobile-friendly
   - Categories: Lunch Specials, Appetizers, Soups, Combo Plates, Chicken, 
     Beef, Pork, Seafood, Vegetable/Tofu, Noodles/Lo Mein, Fried Rice, Sides
   - Use [PLACEHOLDER] item names and prices for now — structure it so it's 
     trivial to swap in real text later (e.g. a single menu-data.js/json file 
     I can edit without touching layout code)
   - Specifically include callouts for: Curry Chicken, Hunan Beef, Moo Shu Pork, 
     Ma Po Tofu (real dishes they're known for)

3. About
   - Short, warm paragraph — family-run, located in Chapel Hill, serving the 
     community for years, hearty Chinese-American comfort food
   - Avoid generic "authentic Chinese cuisine" language — keep it specific and human

4. Hours / Location / Contact
   - Address: 1129 Weaver Dairy Rd #D, Chapel Hill, NC 27514
   - Phone: (919) 942-6388
   - Hours: Mon-Thu 11:00 AM-9:30 PM, Fri-Sat 11:00 AM-10:30 PM, Sun Closed
   - Click-to-call phone link, "Get Directions" link to Google Maps
   - Embedded Google Map

5. Footer
   - Repeat hours/phone/address
   - Order Online button again
   - Social links if applicable [PLACEHOLDER]

DESIGN DIRECTION
- Warm color palette — think warm paper/cream tones with restrained red/gold 
  accents, not neon-takeout-menu red
- Clean, friendly, readable typography (system fonts or a simple Google Font 
  like Inter/Lato for body, something with a touch of warmth for headings)
- Real-photography-first design (build for photos, use tasteful placeholders 
  until I supply real ones)
- No heavy animation, no bloated JS — should feel as fast and unfussy as the 
  restaurant itself
- Sticky header with hours/phone/order button visible on scroll (this is a 
  "decide fast on my phone" site)

DO NOT
- Build any cart, checkout, or payment logic
- Build a CMS or database — this is a static site I'll edit by hand
- Over-design it — no glassmorphism, no heavy gradients, no "elevated dining" 
  aesthetic
  IMAGES (placeholder strategy)
Since real restaurant photography isn't ready yet, use the Unsplash API 
(https://unsplash.com/developers) to auto-fetch placeholder images so the 
site doesn't ship empty. This is for cinematic, warm, food/restaurant-style 
imagery only — not actual photos of China Wok.

- Use the Unsplash API (free tier, requires a free API key from 
  unsplash.com/developers — I'll provide the key) to fetch images by search 
  term, e.g. "chinese food wok," "asian restaurant interior cozy," 
  "stir fry close up," "chinese takeout food"
- Pull images with a warm, moody, slightly cinematic feel where possible 
  (search Unsplash's "editorial"/curated results, prefer photos with warm 
  tones and shallow depth of field over flat product shots)
- Build a small images.js/json config mapping each image slot (hero, about, 
  menu category headers) to its Unsplash search query, so swapping in real 
  photos later is just replacing the URL/file, not touching layout code
- Always include the required Unsplash attribution per their API guidelines 
  (small credit link, e.g. in the footer) since the free API requires it
- Do NOT scrape or hotlink images from Google Images, Yelp, Tripadvisor, or 
  any other restaurant listing site — these are copyrighted photos owned by 
  other people/businesses and are not licensed for reuse here

These are TEMPORARY placeholders. Structure the code so every placeholder 
image can be swapped for a real photo (shot on a DJI Osmo Pocket 3) by 
replacing a single file/URL — no layout changes needed later.