# Site Audit - magic-cal.co.uk

**Date:** 11 September 2026
**Scope:** speed, page weight, usability, SEO
**Method:** static analysis of the source tree plus a real `npm run generate`
production build, measured on disk. Every number below is from that build,
not an estimate.

The previous audit (`SEO-OWNER-TODO.md`) covered on-page copy, metadata,
schema and the hero LCP image, and that work is solid. This audit looks at
what is left: how much the site actually ships, what the served HTML
contains, and where the conversion path leaks.

---

## Headline numbers

Measured on the generated homepage (`dist/index.html`):

| | Size |
|---|---|
| HTML | 410 KB raw / 52 KB gzipped |
| ...of which inline CSS | **364 KB, repeated identically on all 27 pages** |
| JavaScript | 1,055 KB raw / 244 KB gzipped |
| Images | **~1,747 KB** |
| **Total** | **~3.2 MB uncompressed** |
| Whole `dist/` | 32 MB (8.7 MB of it a single unused GIF, shipped twice) |

Two structural facts drive most of what follows:

1. The served homepage HTML contains **exactly one `<img>` tag**. There are
   57 `v-image__image` divs, and in the served HTML they carry **no image URL
   at all**.
2. Every page re-downloads the same 364 KB stylesheet because it is inlined
   rather than linked.

---

## P0 - Performance

### 1. 364 KB of CSS is inlined into every single page

`dist/index.html` is 410 KB, of which 364 KB is one `<style>` block. The same
block appears byte-for-byte in `contact.html`, `about.html`, `faqs.html` and
every other page. Nothing is cached between page views: a visitor who looks at
three pages downloads that stylesheet three times.

**Fix:** one line in `nuxt.config.js`:

```js
build: {
  extractCSS: true,
  extend(config) { /* unchanged */ },
}
```

**Verified by rebuild.** With `extractCSS: true`:

| | Before | After |
|---|---|---|
| `index.html` raw | 410,456 B | 60,847 B |
| `index.html` gzipped | 52,423 B | **10,124 B** |
| `contact.html` | ~392 KB | 44 KB |
| CSS | inlined, uncacheable | `/_nuxt/css/b115171.css`, cached once site-wide |

That is an **81% cut in gzipped HTML** on every page, for a one-line change.
Highest impact-to-effort item in this audit by a wide margin.

### 2. Two render-blocking Google Fonts stylesheets, both largely waste

The served `<head>` contains:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap">
```

- **Open Sans** is declared in `nuxt.config.js`. The only `font-family: 'Open Sans'`
  in the codebase is `components/RoyalVariety.vue:38` - a component **no page
  uses**. This font is downloaded on every page view and applied to nothing.
- **Roboto at nine weights** is injected by `@nuxtjs/vuetify`. The config sets
  `defaultAssets: { icons: 'mdiSvg' }` but never disables the font, so the
  module's default Roboto link is emitted.
- Neither has a `preconnect`, so each costs a full DNS + TLS + request
  round-trip to a third-party origin **before first paint**.

**Fix:**
- Delete the Open Sans `link` from `nuxt.config.js` entirely.
- Set `defaultAssets: { font: false, icons: 'mdiSvg' }` and either self-host a
  subset of Roboto (2-3 weights) or use a system font stack.
- If any webfont stays, add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`.

### 3. ~1.7 MB of images on the homepage, most of them full-size originals in small boxes

| File | Actual size | Displayed at |
|---|---|---|
| `square/wedding-card-reveal.jpg` | 1280x1280, 361 KB | 220 px card |
| `square/corporate.jpg` | 869x868, 237 KB | 220 px card |
| `wedding-astonished-reaction.jpg` | 1920x1280, 222 KB | 220 px card |
| `promo-reaching.jpg` | 1230x1483, 197 KB | 500 px column |
| `reception-card-trick.jpg` | 1920x1280, 190 KB | 460 px band |
| `skill.jpg` | 1920x1280, 101 KB | 520 px half-column |
| 12 company logos | 361 KB total | ~90 px each, all `eager` |

The three service-card images alone are **820 KB to fill three 220 px-tall
cards** - roughly 30x more pixels than are ever displayed.

Worth noting: `scripts/generate-hero-srcset.js` **already generates** 640w/960w/1440w
variants for `skill.jpg`, `reception-card-trick.jpg` and
`wedding-astonished-reaction.jpg`. Those files exist in `static/` and are
**never referenced** outside `PageHero.vue`. Across the site there are 26
`v-img` instances and only 5 `srcset` usages.

**Fix:**
- Point the existing `heroSrcset()` helper at the band and column images that
  already have variants - near-zero work, immediate saving.
- Add card-sized crops (400w/800w) for the three service-card images.
- Drop `eager` from `CompanyCarousel.vue` and add `loading="lazy"` to
  everything below the fold.
- `sharp` is already a dependency but `optimize-images.js` only writes JPEG.
  Emitting AVIF/WebP alongside typically saves another 30-50% at the same
  visual quality.

### 4. An unused 4.2 MB GIF ships twice

`static/card-reveal-min.gif` is 4.2 MB. It is referenced only by
`components/CardReveal.vue`, which **no page uses**. It is nevertheless emitted
to both `dist/card-reveal-min.gif` and `dist/_nuxt/img/card-reveal-min.a12fd6a.gif`
- **8.7 MB of a 32 MB deploy**. `CallumMcClureDeceptionPoster.jpg` (772 KB)
likewise ships twice.

**Fix:** delete the unused component and the GIF. If the animation is wanted
later, an MP4/WebM of the same clip is roughly 200 KB.

---

## P0 - SEO

### 5. Only one image on the homepage exists in the served HTML

This is the most consequential SEO finding. The generated homepage contains:

- **1** `<img>` tag (the hero, correctly fixed by the previous audit)
- **57** `v-image__image` divs

and those divs look like this in the served HTML:

```html
<div class="v-image__image v-image__image--preload v-image__image--contain"
     style="background-position:center center"></div>
```

There is **no image URL in the markup**. Vuetify's `v-img` applies the source
client-side after hydration and an IntersectionObserver fire. Consequences:

- **No image other than the hero can be indexed by Google Images.** Background
  images are not indexed even when rendered - and for a magician, photos of
  real reactions at real weddings are a genuine discovery channel.
- The browser's preload scanner cannot find any of them, so they queue behind
  the JS bundle.
- `alt` text never reaches the accessibility tree.

`PageHero.vue` already carries a comment explaining exactly this problem and
the fix. Apply the same treatment to the rest: a plain `<img>` with
`src`, `srcset`, `alt`, `width`, `height` and `loading`.

### 6. Keyword cannibalisation - pages competing against each other

Two clusters where several pages target the same query, so Google picks one
and splits authority across the rest:

**Wedding / Surrey:**

| | `/wedding-magician` | `/wedding-magician-surrey` |
|---|---|---|
| Title | Wedding Magician **Surrey** \| Award-Winning Close-Up Magic | Wedding Magician **Surrey** \| Close-Up Magic \| Callum McClure |
| H1 | Wedding Magician in Surrey & Guildford | Wedding Magician in Surrey |
| H2 | Surrey weddings I know well | Surrey wedding venues I know well |
| H2 | How much does a wedding magician cost? | How much does a Surrey wedding magician cost? |
| Length | ~530 words | **~243 words (thin)** |

Two near-identical titles on the same search term.

**Christmas / London:** `/christmas-party-magician` (H2 "London & Surrey
Christmas party venues"), `/christmas-party-magician-london` (H2 "London
Christmas party venues") and `/areas/london` (H2 "London Christmas party
magician") all chase the same phrase.

**Fix:** give each query exactly one owner. Either:
- (a) Retitle `/wedding-magician` as the generic brand page ("Wedding Magician
  | Magic Circle Close-Up Magic") and let `-surrey` / `-london` own the geo
  terms - but then the geo pages need real depth, not 243 words; or
- (b) Canonical the thin `/wedding-magician-surrey` into `/wedding-magician`
  and invest in `/areas/surrey` instead.

Option (b) is less work and lower risk given current page depth.

### 7. Sixteen of 25 meta descriptions are too long

They will be truncated in results. Worst offenders:

| Chars | Page |
|---|---|
| 188 | `/wont-get-fooled-again` |
| 186 | `/awards-ceremony-magician` |
| 182 | `/areas/london` |
| 178 | `/corporate-magician` |
| 175 | `/christmas-party-magician-london` |

Target 140-160. Two are also too short: `/blog` (106) and the cost post (96).

### 8. `/blog` is orphaned

Zero internal links point to the blog index from any page, nav or footer. It
is in the sitemap, but nothing on the site links to it. The single post gets
4 internal links; its parent gets none.

**Fix:** add "Blog" to the footer's Information column in `layouts/default.vue`.
One line.

### 9. Sitemap has no `lastmod`

All 25 URLs are bare `<loc>` entries. Adding `lastmod` helps Google schedule
recrawls, which matters for a site that changes rarely - it stops the crawler
guessing.

### 10. The Open Graph image is the wrong size

`static/shuffle/callum_mcclure_shuffle.jpg` is **1091x727** (43 KB). Facebook,
LinkedIn and X want at least 1200x630 at roughly 1.91:1; this is below the
minimum width and at 1.50:1. Shared links will crop awkwardly or fall back to
a small card. Re-export at 1200x630.

### 11. Schema gaps

`utils/schema.ts` is well built. Missing pieces worth adding:

- `LocalBusiness` has no **`priceRange`** - Google looks for this specifically
  on local businesses - and no `geo` or `openingHoursSpecification`.
- `Service` nodes have no `offers`.
- No `WebSite` node.
- Correctly still **no `AggregateRating`** - right call until real reviews
  exist, per the existing owner checklist.

### 12. Fringe-show pages dilute commercial focus

`/deception` and `/wont-get-fooled-again` are Edinburgh Fringe show pages
sitting in the sitemap next to the for-hire pages. They are unlikely to earn
booking traffic and blur the site's topical signal. Consider `noindex`, or
move them behind a clearly separate section.

---

## P1 - Usability and conversion

The contact form is the entire commercial point of the site. It has four real
bugs.

### 13. A failed enquiry disappears silently

`components/ContactForm.vue:112` - the EmailJS failure handler is:

```js
(error) => {
  console.log('FAILED', error)
}
```

The visitor sees **nothing**. No error, no retry prompt, no phone number. The
form sits there looking unchanged and they assume it sent. Every network
failure, EmailJS outage or quota rejection is a booking lost without trace.

**Fix:** show a visible error with the phone number as a fallback route.

### 14. Success is a native `alert('Sent')`

No thank-you page, no confirmation of what happens next or when. And because
there is no `/thank-you` route, **there is no way to track conversions** once
analytics is added (see #21). A dedicated thank-you page fixes both.

### 15. The Send button has no loading or disabled state

It can be double-clicked into duplicate submissions.

### 16. The "Name *" field is not actually required

`required` on a Vuetify `v-text-field` is presentational only - it adds the
asterisk styling, not validation. There is no rule for `name` (compare
`emailRules`, which is properly implemented). A blank name passes `validate()`
and sends.

### 17. The date picker does not close when a date is chosen

`ContactForm.vue:40` and `ContactCards.vue:77` both do:

```js
@input="menu2 = false"
```

`menu2` does not exist - the ref is `datePopup`. The popup stays open after
selection in both components.

### 18. No mobile input types or autocomplete

Email and phone are plain text fields: no `type="email"`, no `type="tel"`, no
`autocomplete="name | email | tel"`. Mobile visitors get a full QWERTY
keyboard for a phone number, on the highest-intent form on the site.

### 19. All 12 company logos render on mobile, six per row

`components/CompanyCarousel.vue:11` iterates `logos` at `cols="2"` - six per
row on a phone. Seven of the twelve carry a `hideOnXs: true` flag that does
**nothing**: the `filteredLogos` computed that would honour it is commented out
at lines 52-56. Radisson, Disney, BBC and Barclays are strong trust signals
being rendered as unreadable specks.

### 20. The 404 page is a dead end

`layouts/error.vue` renders a bare `<h1>` and a single "Home page" link - no
app bar, no navigation, no contact CTA, and an `<v-app>` with no `<v-main>`.
Anyone landing on a stale URL has one exit.

### 21. No analytics at all

No GA4, no Plausible, no tag manager - nothing beyond `BingSiteAuth.xml`.
**You currently cannot tell whether any change on this list works.** This
should be the first thing fixed, not the last: every other item is
unmeasurable without it. Plausible or GA4 plus a `/thank-you` conversion goal
(#14) gives you enquiry-rate tracking.

---

## P2 - Semantics, accessibility and housekeeping

### 22. Section headings are paragraphs, not headings

`pages/index.vue:61` and `:134` use `<p class="display-1">` where the visual
design clearly reads as a section heading. `FaqsSection.vue:13` and
`FaqsTextSection.vue:6` use `<div class="display-1">FAQs</div>`.

Net effect: **the homepage has exactly one `<h2>` in the entire page**, and
the site has **zero `<h3>` elements anywhere**. Card titles like "No setup
required" are bold paragraphs. Screen-reader users cannot navigate by heading,
and the heading outline gives Google very little structure to work with.

### 23. Fifteen `v-img` instances have no `alt`

On live pages: `/corporate-magician` (`vr.jpg`), all seven images on
`/deception`, `/index` (`skill.jpg`, `reception-card-trick.jpg`),
`AboutSnippet` (`promo-reaching.jpg`), `CredentialsBar` (Magic Circle logo),
`/wedding-magician`, `/wont-get-fooled-again`.

Moot while they are background-image divs - fixing this and #5 is the same
edit, so do them together.

### 24. Six unused components still in the tree

`CardReveal`, `NuxtLogo`, `RoyalVariety`, `SectionBreakImg`, `ServicesSection`,
`VuetifyLogo`. `SectionBreakImg` also has leftover debug code - a ref
`myVar = ref('Hello there ')` used as a `v-if` condition.

Deleting `CardReveal` and `RoyalVariety` also resolves #4 and half of #2.

### 25. Dead configuration

`nuxt.config.js` has an `emailJs` block reading `EMAILJS_USER_ID`,
`EMAILJS_SERVICE_ID` and `EMAILJS_TEMPLATE_ID`. Nothing reads it -
`ContactForm.vue` hardcodes the service, template and user IDs. Either wire the
config through or delete the block; as it stands it implies configuration that
does not exist.

---

## Suggested order of work

**Do first - measurement, then the cheap structural wins**

| # | Item | Effort |
|---|---|---|
| 21 | Add analytics + Search Console | 30 min |
| 1 | `extractCSS: true` | 1 line, **-81% HTML** |
| 2 | Drop Open Sans, disable Roboto, add preconnect | 15 min |
| 4 | Delete unused GIF + components | 10 min, **-8.7 MB deploy** |
| 8 | Link `/blog` from the footer | 1 line |

**Then - conversion path**

| # | Item | Effort |
|---|---|---|
| 13 | Visible error state on send failure | 30 min |
| 17 | Fix `menu2` -> `datePopup` | 2 lines |
| 16 | Real validation on Name | 10 min |
| 18 | Input types + autocomplete | 15 min |
| 14 | `/thank-you` page + conversion goal | 1 hr |
| 15 | Loading state on Send | 15 min |

**Then - the bigger SEO and image work**

| # | Item | Effort |
|---|---|---|
| 6 | Resolve cannibalisation (pick one owner per query) | half day, decision-led |
| 5 | Replace `v-img` with real `<img>` site-wide | half day |
| 3 | srcset + lazy + WebP/AVIF | half day |
| 7 | Trim 16 meta descriptions | 1 hr |
| 22 | Fix heading semantics | 2 hrs |

**Then - polish**

Items 9, 10, 11, 12, 19, 20, 23, 24, 25.

---

## What is already good

Worth stating plainly, because it is unusual for a site this size:

- Canonical tags on **every** page, correct and absolute.
- Structured data across LocalBusiness, Service, FAQPage, BreadcrumbList,
  Article and Person, with `@id` references wired correctly between them.
- `subFolders: false` with the reasoning documented in the config - avoiding a
  redirect that would contradict the canonicals.
- `/show` excluded from the sitemap because it is `noindex` - a genuinely
  subtle catch.
- The hero LCP image handled properly: real `<img>`, `srcset`, `fetchpriority`,
  explicit dimensions, and a comment explaining why `v-img` was rejected.
- One `<h1>` on every page, all unique.
- Lint passes clean (10 warnings, 0 errors).

The foundation is sound. Most of what is above is weight and plumbing rather
than anything structural.
