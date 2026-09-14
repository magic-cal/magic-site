import Vue from 'vue'
import {
  addParallax,
  observeReveal,
  removeParallax,
  unobserveReveal,
} from '~/utils/motion'

// Registered on the server too, where the hooks never run, so that hydrating
// the prerendered markup does not warn about unknown directives.

Vue.directive('reveal', {
  inserted(el) {
    observeReveal(el)
  },
  unbind(el) {
    unobserveReveal(el)
  },
})

Vue.directive('parallax-scroll', {
  inserted(el) {
    addParallax(el)
  },
  unbind(el) {
    removeParallax(el)
  },
})
