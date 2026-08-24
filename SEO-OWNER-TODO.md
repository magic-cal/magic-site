# SEO Owner Checklist - magic-cal.co.uk

Everything in this repo is done. The items below are off-page or DNS tasks
only you can complete. Work through them roughly in order - the first four
have the biggest impact.

---

## 1. Deploy the branch

Merge `claude/seo-audit-organic-traffic-qbbs1w` into `master`. The GitHub
Action deploys to Pages on every push to master. After deploy:

```
curl -s https://www.magic-cal.co.uk/wedding-magician/ | grep "Magic Circle"
```

Should return real copy. If it still returns `Loading...`, check the Pages
settings - it may need to be set to deploy from `gh-pages` branch rather than
`master` root.

---

## 2. Google Search Console

1. Go to https://search.google.com/search-console
2. Add property `https://www.magic-cal.co.uk` (URL-prefix method)
3. Verify ownership (HTML file or DNS TXT record)
4. Submit sitemap: **https://www.magic-cal.co.uk/sitemap.xml**
5. Use "URL Inspection" on `/wedding-magician` and `/corporate-magician`
   - click "Test Live URL" and confirm rendered HTML contains your copy
6. Request indexing for each new page

---

## 3. Google Business Profile

1. Go to https://business.google.com
2. Claim or create listing for **Callum McClure Magician**
3. Category: **Magician** (primary)
4. Address: London (or service-area business if you prefer not to show an address)
5. Phone: **07481 768042** (must match the site exactly)
6. Website: **https://www.magic-cal.co.uk**
7. Add photos (performance shots with descriptive filenames)
8. Write a description that matches the homepage copy

---

## 4. NAP consistency audit

Your Name / Address / Phone must be identical everywhere. Search for your
business on the following and correct any differences:

- **Bark.com** - update URL to `/wedding-magician` or `/contact`
- **Yelp** - phone `07481 768042`, URL `www.magic-cal.co.uk`
- **Yell.com** - same
- **Magicshow.co.uk** (if listed) - same
- Any directory listings from old address or old phone number

---

## 5. www vs non-www redirect

Currently `magic-cal.co.uk` (no www) and `www.magic-cal.co.uk` serve
independently. Pick one as canonical (the site uses `www`) and redirect the
other. This is a DNS / GitHub Pages CNAME setting - add a CNAME record for
`www` pointing to `magic-cal.github.io` and enable "Enforce HTTPS" in
Pages settings.

---

## 6. Press and backlinks

- **BBC Surrey quote** - if there's an online article, email them to link to
  `https://www.magic-cal.co.uk` rather than any old URL.
- **Surrey Live / GetSurrey** - reach out about a feature (local magician angle).
- **Venue partnerships** - ask Loseley Park, Wotton House, Pennyhill Park etc.
  if they have a preferred suppliers page and request a link.

---

## 7. Reviews - gather and then add schema

The site currently shows quotes but no star ratings (no schema either, which
is correct until you have real structured reviews).

To unlock `AggregateRating` schema later:
1. After each event, send a short follow-up email:
   *"If you enjoyed the magic, a Google review would mean the world - [link]"*
2. Once you have 5+ Google reviews, add `AggregateRating` to `utils/schema.ts`
   `localBusiness()` and redeploy.

---

## 8. Rich Results validation (one-off)

For each JSON-LD type the site emits, paste the rendered page URL into:
https://search.google.com/test/rich-results

Pages to test:
- `/wedding-magician` → Service + FAQPage + Breadcrumb
- `/corporate-magician` → Service + FAQPage + Breadcrumb
- `/blog/how-much-does-a-wedding-magician-cost` → Article + FAQPage + Breadcrumb
- `/about` → Person
- `/` → LocalBusiness

---

## 9. Image filenames (P2)

Rename key images in `static/` to keyword-rich filenames before next deploy:

| Current | Suggested |
|---|---|
| `shuffle/callum_mcclure_shuffle.jpg` | already good |
| `square/wedding.jpg` | `callum-mcclure-wedding-magician-surrey.jpg` |
| `square/corporate.jpg` | `callum-mcclure-corporate-magician-london.jpg` |
| `square/magicShowcase.jpg` | `callum-mcclure-party-magician-guildford.jpg` |

Update `alt` text in `pages/index.vue` if you rename.

---

## 10. Core Web Vitals (P2)

Run https://pagespeed.web.dev on the live URL after deploy. Main things to
check:
- LCP (largest image): add `loading="eager"` + explicit `width`/`height` to
  the hero image
- CLS: ensure Vuetify layout doesn't shift on load
- Aim for green (90+) on mobile

---

*Last updated: 2026-06-26*
