// =============================================================================
//  CHINA WOK — dish.js
//  Renders a single House Favorite detail page from  dish.html#<slug>.
//  Uses a URL hash (not a query string) so every browser/preview tool keeps it.
//  Breadcrumb + photo on the left, name + delicious description + Order Online.
// =============================================================================

import { SITE } from "../../data/site.js";
import { SHOWCASE } from "../../data/dishes.js";

const host = document.querySelector("[data-dish-detail]");

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const orderBase =
  SITE.orderUrl && !SITE.orderUrl.includes("INSERT-HERO-FOODIE-URL") ? SITE.orderUrl : "index.html#menu";

// Wire the shared header's Order link (matches the rest of the site).
document.querySelectorAll("[data-order-link]").forEach((a) => {
  a.href = orderBase;
  if (orderBase.startsWith("http")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
});

function currentSlug() {
  // Prefer the hash (dish.html#slug); fall back to the old ?dish= query.
  const fromHash = decodeURIComponent(location.hash.replace(/^#/, "")).trim();
  if (fromHash) return fromHash;
  return (new URLSearchParams(location.search).get("dish") || "").trim();
}

function render() {
  const slug = currentSlug();
  const dish = SHOWCASE.find((d) => d.slug === slug);

  if (!slug || !dish) {
    const items = SHOWCASE.map(
      (d) => `<li><a href="dish.html#${encodeURIComponent(d.slug)}">${esc(d.name)}</a></li>`
    ).join("");
    host.innerHTML =
      `<div class="container dish-index">
         <p class="eyebrow eyebrow-red">House Favorites</p>
         <h1 class="dish-detail-name">Choose a dish</h1>
         <ul class="dish-index-list">${items}</ul>
       </div>`;
    return;
  }

  const orderUrl = dish.order && !dish.order.includes("INSERT") ? dish.order : orderBase;
  const orderAttrs = orderUrl.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";

  const photo = dish.img
    ? `<div class="dish-photo" style="background-image:url('${esc(dish.img)}')" role="img" aria-label="${esc(dish.name)}"></div>`
    : `<div class="dish-photo dish-photo-empty"><i class="ti ti-bowl-chopsticks" aria-hidden="true"></i></div>`;

  host.innerHTML =
    `<div class="container">
       <nav class="breadcrumb" aria-label="Breadcrumb">
         <a href="index.html">Home</a><span aria-hidden="true">›</span>
         <a href="index.html#picks">House Favorites</a><span aria-hidden="true">›</span>
         <span class="breadcrumb-current">${esc(dish.name)}</span>
       </nav>
       <div class="dish-detail-grid">
         ${photo}
         <div class="dish-info">
           <p class="eyebrow eyebrow-red">House Favorite</p>
           <h1 class="dish-detail-name">${esc(dish.name)}</h1>
           <p class="dish-detail-desc">${esc(dish.blurb)}</p>
           <a class="btn btn-dark" href="${esc(orderUrl)}"${orderAttrs}>Order Online</a>
         </div>
       </div>
     </div>`;
}

// Render now, and again whenever the hash changes (e.g. from the index list).
render();
window.addEventListener("hashchange", render);
