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

Scroll animations live in `assets/motion.css` and `utils/motion.ts`:

- `class="reveal"` + `v-reveal` fades a block up the first time it scrolls into
  view. The class has to be in the template (it is what hides the element in the
  server-rendered HTML); the directive only registers it with the shared
  IntersectionObserver. Add `reveal--d1`..`reveal--d5` to stagger a row, or
  `reveal--fade` to drop the upward movement. Never put it on a block containing
  the page's `<h1>` - that is the largest-contentful paint, and starting it at
  opacity 0 delays it.
- `v-parallax-scroll` on a clipping container drifts its image against the
  scroll; see `components/PageHero.vue` and `components/ParallaxBand.vue` for
  the `--parallax-travel` / `--parallax-y` pair it drives. One shared scroll
  listener and one animation frame cover every parallax element on the page.
- All of it is gated on `html[data-motion]`, set by an inline script in
  `nuxt.config.js` only when the browser supports IntersectionObserver and the
  visitor has not asked for reduced motion. With that flag absent the site
  renders fully visible and static.
