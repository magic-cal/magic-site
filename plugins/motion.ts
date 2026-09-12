import Vue from 'vue'
import {
  addParallax,
  observeReveal,
  removeParallax,
  unobserveReveal,
} from '~/utils/motion'

// Registered universally rather than client-only: the hooks below exist only
// on the client (Vue never runs inserted/unbind while rendering on the server),
// but having the directives defined on both sides keeps Vue from warning about
// unknown directives as it hydrates the prerendered markup.

// v-reveal: fade-and-rise a block the first time it scrolls into view.
// Pair it with class="reveal" (and optionally reveal--d1..d5 to stagger a
// group). The class is what hides the element, and it has to be in the
// server-rendered HTML: adding it during hydration would flash the content in
// and straight back out again.
Vue.directive('reveal', {
  inserted(el) {
    observeReveal(el)
  },
  unbind(el) {
    unobserveReveal(el)
  },
})

// v-parallax-scroll: drift a .parallax-style element's image against the page
// as it scrolls. Goes on the clipping container, not the image; the container
// owns --parallax-travel and receives --parallax-y.
Vue.directive('parallax-scroll', {
  inserted(el) {
    addParallax(el)
  },
  unbind(el) {
    removeParallax(el)
  },
})
