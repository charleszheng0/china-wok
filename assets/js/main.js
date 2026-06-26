// =============================================================================
//  CHINA WOK — main.js
//  Nav scroll state, hero image, weekly-showcase shuffle, menu filters,
//  hours (today highlight), and config wiring (data/site.js). Vanilla JS.
// =============================================================================

import { SITE } from "../../data/site.js";
import { DISHES, SHOWCASE, CATEGORIES } from "../../data/dishes.js";

const DAY_ABBR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
function el(tag, cls) { const n = document.createElement(tag); if (cls) n.className = cls; return n; }
function fmtTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hr}${ampm}` : `${hr}:${String(m).padStart(2, "0")}${ampm}`;
}
function localDay(tz) {
  try {
    const wd = new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "short" }).format(new Date());
    return DAY_ABBR.indexOf(wd);
  } catch {
    return new Date().getDay();
  }
}

/* ---------- hero image slideshow ---------- */
// Rotating background photos for the hero. Swap these paths to change them.
const HERO_IMAGES = ["assets/img/hero-1.jpg", "assets/img/hero-2.jpg", "assets/img/DJI_20260626053229_0229_D.jpg"];
const HERO_INTERVAL = 6000; // ms between photos

function applyHeroImage() {
  const host = $('[data-img-slot="hero"]');
  if (!host) return;

  // Build two stacked layers we can crossfade between.
  host.innerHTML = "";
  const layers = [el("div", "hero-layer"), el("div", "hero-layer")];
  layers.forEach((l) => host.appendChild(l));

  layers[0].style.backgroundImage = `url("${HERO_IMAGES[0]}")`;
  layers[0].classList.add("is-active");

  if (HERO_IMAGES.length < 2 || reduceMotion) return;

  let idx = 0, active = 0;
  setInterval(() => {
    idx = (idx + 1) % HERO_IMAGES.length;
    const nextLayer = active === 0 ? 1 : 0;
    layers[nextLayer].style.backgroundImage = `url("${HERO_IMAGES[idx]}")`;
    layers[nextLayer].classList.add("is-active");
    layers[active].classList.remove("is-active");
    active = nextLayer;
  }, HERO_INTERVAL);
}

/* ---------- config wiring (data/site.js) ---------- */
function applyConfig() {
  const valid = SITE.orderUrl && !SITE.orderUrl.includes("INSERT-HERO-FOODIE-URL");
  $$("[data-order-link]").forEach((a) => {
    a.href = valid ? SITE.orderUrl : "#menu";
    if (valid) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  });
  $$("[data-tel]").forEach((a) => (a.href = SITE.phoneHref));
  $$("[data-phone-text]").forEach((n) => (n.textContent = SITE.phoneDisplay));
  const { line1, city, state, zip } = SITE.address;
  $$("[data-address]").forEach((n) => (n.textContent = `${line1}, ${city}, ${state} ${zip}`));
  const map = $("[data-map]");
  if (map && SITE.mapEmbedUrl) map.src = SITE.mapEmbedUrl;
  $$("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
  const ig = $('[data-social="instagram"]');
  if (ig) {
    if (SITE.social && SITE.social.instagram) ig.href = SITE.social.instagram;
    else ig.hidden = true;
  }
}

/* ---------- weekly showcase ---------- */
function initShowcase() {
  const grid = $("[data-showcase]");
  const prev = $("[data-carousel-prev]");
  const next = $("[data-carousel-next]");
  if (!grid) return;

  function card(dish) {
    const c = el("article", "dish-card");

    const thumb = el("div", "dish-thumb");
    if (dish.img) {
      thumb.classList.add("dish-thumb-photo");
      thumb.style.backgroundImage = `url('${dish.img}')`;
      thumb.setAttribute("role", "img");
      thumb.setAttribute("aria-label", dish.name);
    } else {
      thumb.innerHTML = '<i class="ti ti-bowl-chopsticks" aria-hidden="true"></i>';
    }

    const body = el("div", "dish-body");
    const name = el("h3", "dish-name");
    name.textContent = dish.name;

    // Each card links to the dish's own detail page (dish.html#<slug>).
    const details = el("a", "dish-detail-btn");
    details.href = `dish.html#${encodeURIComponent(dish.slug)}`;
    details.innerHTML = '<i class="ti ti-info-circle" aria-hidden="true"></i> See Details';
    details.setAttribute("aria-label", `See details for ${dish.name}`);

    body.append(name, details);
    c.append(thumb, body);
    return c;
  }
  grid.innerHTML = "";
  SHOWCASE.forEach((d) => grid.appendChild(card(d)));

  // page by the visible width minus one card, so a partial card stays in view
  function pageStep() {
    const first = grid.querySelector(".dish-card");
    const cardW = first ? first.getBoundingClientRect().width + 20 : grid.clientWidth;
    return Math.max(cardW, grid.clientWidth - cardW);
  }
  function updateArrows() {
    const max = grid.scrollWidth - grid.clientWidth - 1;
    if (prev) prev.disabled = grid.scrollLeft <= 0;
    if (next) next.disabled = grid.scrollLeft >= max;
  }
  function scrollBy(dir) {
    grid.scrollBy({ left: dir * pageStep(), behavior: reduceMotion ? "auto" : "smooth" });
  }

  if (prev) prev.addEventListener("click", () => scrollBy(-1));
  if (next) next.addEventListener("click", () => scrollBy(1));
  grid.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows);
  updateArrows();

  // click-and-drag to scroll side to side (touch/trackpad already swipe natively)
  let down = false, startX = 0, startScroll = 0, moved = false;
  grid.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") return; // let native touch scrolling handle it
    down = true; moved = false;
    startX = e.clientX;
    startScroll = grid.scrollLeft;
  });
  grid.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) { moved = true; grid.classList.add("is-dragging"); grid.setPointerCapture(e.pointerId); }
    grid.scrollLeft = startScroll - dx;
  });
  const endDrag = () => { down = false; grid.classList.remove("is-dragging"); };
  grid.addEventListener("pointerup", endDrag);
  grid.addEventListener("pointercancel", endDrag);
  // suppress the click on cards/links if the user was actually dragging
  grid.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
}

/* ---------- full menu ---------- */
const PROTEINS = ["Chicken", "Pork", "Shrimp", "Beef"];

function initMenu() {
  const pillsWrap = $("[data-filters]");
  const rowsWrap = $("[data-menu-rows]");
  const moreBtn = $("[data-menu-more]");
  if (!pillsWrap || !rowsWrap) return;

  const LIMIT = 6;
  let active = CATEGORIES[0];
  let expanded = false;

  function renderRows() {
    rowsWrap.innerHTML = "";
    const list = DISHES.filter((d) => d.category === active);
    list.forEach((d, i) => {
      const row = el("div", "menu-row");
      if (!expanded && i >= LIMIT) row.classList.add("is-hidden");
      const left = el("div");
      const name = el("p", "menu-row-name");
      name.textContent = d.name;
      left.appendChild(name);
      if (d.desc) {
        const desc = el("p", "menu-row-desc");
        desc.textContent = d.desc;
        left.appendChild(desc);
      }
      const price = el("span", "menu-row-price");
      price.textContent = `$${d.price}`;
      row.append(left, price);
      rowsWrap.appendChild(row);
    });
    if (moreBtn) {
      const overflow = list.length > LIMIT;
      moreBtn.style.display = overflow ? "" : "none";
      moreBtn.textContent = expanded ? "see less" : "see all";
    }
  }

  function setActive(cat) {
    active = cat;
    expanded = false;
    buildPills();
    renderRows();
  }

  function simplePill(cat) {
    const pill = el("button", "pill");
    pill.type = "button";
    pill.textContent = cat;
    pill.setAttribute("role", "tab");
    if (cat === active) pill.classList.add("active");
    pill.addEventListener("click", () => setActive(cat));
    return pill;
  }

  function proteinDropdown() {
    const onProtein = PROTEINS.includes(active);
    const wrap = el("div", "pill-dropdown");
    const trigger = el("button", "pill pill-trigger" + (onProtein ? " active" : ""));
    trigger.type = "button";
    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML =
      `<span>${onProtein ? active : "Protein"}</span><span class="pill-caret" aria-hidden="true">▾</span>`;

    const menu = el("div", "pill-menu");
    PROTEINS.forEach((m) => {
      const opt = el("button", "pill-option" + (m === active ? " active" : ""));
      opt.type = "button";
      opt.textContent = m;
      opt.addEventListener("click", (e) => { e.stopPropagation(); setActive(m); });
      menu.appendChild(opt);
    });

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.contains("open");
      closeOpen();
      if (!isOpen) {
        wrap.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        const r = trigger.getBoundingClientRect();
        menu.style.top = `${r.bottom + 6}px`;
        menu.style.left = `${Math.min(r.left, window.innerWidth - 190)}px`;
      }
    });
    wrap.append(trigger, menu);
    return wrap;
  }

  function buildPills() {
    pillsWrap.innerHTML = "";
    for (const cat of CATEGORIES) {
      if (PROTEINS.includes(cat)) {
        if (cat === PROTEINS[0]) pillsWrap.appendChild(proteinDropdown());
        continue;
      }
      pillsWrap.appendChild(simplePill(cat));
    }
  }

  // close the dropdown on outside click / Escape
  const closeOpen = () => {
    const open = pillsWrap.querySelector(".pill-dropdown.open");
    if (!open) return;
    open.classList.remove("open");
    const t = open.querySelector(".pill-trigger");
    if (t) t.setAttribute("aria-expanded", "false");
  };
  document.addEventListener("click", closeOpen);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeOpen(); });
  window.addEventListener("scroll", closeOpen, { passive: true });
  window.addEventListener("resize", closeOpen);

  if (moreBtn) {
    moreBtn.addEventListener("click", () => { expanded = !expanded; renderRows(); });
  }

  buildPills();
  renderRows();
}

/* ---------- hours ---------- */
function initHours() {
  const today = localDay(SITE.timezone);
  $$("[data-hours]").forEach((table) => {
    const tbody = table.querySelector("tbody") || table.appendChild(el("tbody"));
    tbody.innerHTML = "";
    for (const d of [1, 2, 3, 4, 5, 6, 0]) {
      const h = SITE.hours[d];
      const tr = el("tr");
      if (d === today) tr.className = "is-today";
      const th = el("th");
      th.textContent = h.day;
      const td = el("td");
      td.textContent = h.closed ? "Closed" : `${fmtTime(h.open)} – ${fmtTime(h.close)}`;
      tr.append(th, td);
      tbody.appendChild(tr);
    }
  });
}

/* ---------- nav scroll state ---------- */
function initNav() {
  const nav = $("[data-nav]");
  const hero = $(".hero");
  if (!nav) return;
  let threshold = 300;
  const measure = () => { threshold = hero ? Math.max(60, hero.offsetHeight - nav.offsetHeight) : 60; };
  measure();
  window.addEventListener("resize", measure);
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      nav.classList.toggle("scrolled", window.scrollY > threshold);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- boot ---------- */
function init() {
  try {
    applyConfig();
    applyHeroImage();
    initShowcase();
    initMenu();
    initHours();
    initNav();
  } catch (err) {
    console.error("[China Wok] init failed:", err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
