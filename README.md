# China Wok — Website

A fast, static, mobile-first marketing site for **China Wok**, a family-run
Chinese-American restaurant in Chapel Hill, NC. No database, no backend, no
build step for content. Online ordering is handled off-site by **Hero Foodie**.

---

## Quick start (preview it locally)

The site uses JavaScript modules, so open it through a tiny local server (not by
double-clicking `index.html`). Any one of these works:

```bash
# Option A — Node (no install thanks to npx)
npm run dev          # then open the URL it prints (usually http://localhost:3000)

# Option B — Python (already on most Macs)
python3 -m http.server 8000   # then open http://localhost:8000
```

When deployed to Vercel/Netlify it just works — those serve over HTTP.

---

## Editing content (no coding needed)

Everything you'd normally change lives in plain data files in **`data/`**:

| You want to change…                        | Edit this file        |
| ------------------------------------------ | --------------------- |
| Menu items, prices, favorites, spicy marks | `data/menu.js`        |
| Phone, address, hours, **Hero Foodie link**, social | `data/site.js` |
| Which photos appear (search terms / real photos) | `data/images.js` |

Each file has step-by-step comments at the top. Save the file and refresh.

> ⚠️ **Before launch:** the menu names/prices in `data/menu.js` are realistic
> **placeholders**. Replace them with China Wok's real menu. The four signature
> dishes (Curry Chicken, Hunan Beef, Moo Shu Pork, Ma Po Tofu) are pre-marked
> as favorites.

### Set the Hero Foodie ordering link

Open `data/site.js` and paste your real ordering URL:

```js
orderUrl: "https://INSERT-HERO-FOODIE-URL-HERE",   // ← replace this
```

Every "Order Online" button updates automatically and opens in a new tab.
(Until you set it, the buttons just scroll to the Hours & Location section.)

---

## Images (Unsplash placeholders) — API walkthrough

Real China Wok photos aren't ready yet, so the site can auto-fetch **warm,
cinematic placeholder photos** from Unsplash. These are temporary and are *not*
photos of China Wok.

**You only need to do this once (it's optional — the site looks fine without it,
showing warm color blocks instead of photos).**

### 1. Get a free Unsplash API key

1. Go to <https://unsplash.com/developers> and **Register as a developer** (free).
2. Click **New Application**, accept the terms, and give it a name (e.g. "China Wok site").
3. On the app page, copy the **Access Key** (a long string). That's all you need.

### 2. Save your key

```bash
cp .env.example .env
```

Open `.env` and paste your key:

```
UNSPLASH_ACCESS_KEY=your-real-key-here
```

`.env` is git-ignored, so your key never gets committed.

### 3. Fetch the images

```bash
npm run fetch:images
```

This reads the search terms in `data/images.js`, grabs one photo per slot, and
writes `data/images.generated.js`. Reload the site to see them. Photo credits
appear automatically in the footer (required by Unsplash's license).

> Free Unsplash keys allow **50 requests/hour** — plenty for this site. If you
> hit a limit, just wait an hour and re-run.

### Swapping in real photos later

When you have real photos (e.g. shot on a DJI Osmo Pocket 3):

1. Drop the file into `assets/img/` (create the folder), e.g. `assets/img/hero.jpg`.
2. In `data/images.js`, set that slot's `src`:
   ```js
   hero: { query: "...", alt: "China Wok storefront", src: "assets/img/hero.jpg" },
   ```

When `src` is set, the Unsplash query and its attribution are ignored for that
slot. No layout changes, ever.

---

## Deploying

This is a static site — host it anywhere. Two easy free options:

### Netlify (drag & drop)
1. Go to <https://app.netlify.com/drop>.
2. Drag the **whole project folder** onto the page. Done — you get a live URL.

### Vercel
1. Push this folder to a GitHub repo.
2. Import it at <https://vercel.com/new>. Framework preset: **Other**. Deploy.

> Tip: run `npm run fetch:images` **before** deploying so the photos are baked
> into `data/images.generated.js`. The site never needs your Unsplash key at
> runtime — only when fetching.

---

## Project structure

```
.
├── index.html              # page structure (sections, sticky header, SEO/JSON-LD)
├── assets/
│   ├── css/styles.css      # all styling (warm palette, mobile-first)
│   └── js/main.js          # renders menu, images, open/closed status, config
├── data/
│   ├── site.js             # phone, address, hours, Hero Foodie link, social
│   ├── menu.js             # the menu (placeholder content)
│   ├── images.js           # image slots -> Unsplash queries / real-photo paths
│   └── images.generated.js # auto-written by the fetch script (starts empty)
├── scripts/
│   └── fetch-images.mjs    # one-time Unsplash fetch (needs your free key)
├── .env.example            # template for your Unsplash key
└── package.json
```

## Good to know

- **No tracking, no cookies, no analytics** are included by default.
- The **map** uses Google's keyless embed — no API key required.
- The **Open now / Closed** badge is computed in the restaurant's timezone
  (`America/New_York`, set in `data/site.js`) and updates every minute.
- If you change the hours in `data/site.js`, also update the matching hours in
  the `application/ld+json` block in `index.html` (used by Google Search).
