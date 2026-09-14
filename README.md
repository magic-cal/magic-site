# magic-cal

## About

This is a personal website to showcase my magic business. Performing professionally for over a decade and all over the world. This website also acts as a testing ground for my website development

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Motion

`assets/motion.css` + `utils/motion.ts`, all gated on `html[data-motion]` - set
by an inline script in `nuxt.config.js` when the browser supports
IntersectionObserver and the visitor has not asked for reduced motion. Without
the flag the site renders fully visible and static.

- `class="reveal"` + `v-reveal` fades a block up as it scrolls into view. Both
  are needed: the class hides the element in the server-rendered HTML, the
  directive registers it with the shared observer. `reveal--d1`..`reveal--d5`
  stagger a row, `reveal--fade` drops the movement.
- `class="reveal-stagger"` + `v-reveal` on a list brings its items in one after
  another, delays per `:nth-child`.
- `v-parallax-scroll` on a clipping container drifts its image against the
  scroll - see `PageHero.vue` for the `--parallax-travel` / `--parallax-y` pair.

Never reveal a block containing the page's `<h1>`: it is the largest-contentful
paint, and opacity 0 delays it.
