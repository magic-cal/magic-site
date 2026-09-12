// Shared plumbing for the site's scroll motion: one IntersectionObserver for
// every reveal-on-scroll element, and one rAF-throttled scroll loop for every
// parallax image. Registering each effect centrally means a page with a hero,
// a section break and a dozen revealing cards still costs exactly one scroll
// listener and one animation frame, rather than one of each per element.
//
// Everything here is a no-op unless the browser supports IntersectionObserver
// and the visitor has not asked for reduced motion, so the fallback in both
// cases is the static page the site rendered before any of this existed.

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function motionEnabled(): boolean {
  return (
    typeof window !== 'undefined' &&
    'IntersectionObserver' in window &&
    !prefersReducedMotion()
  )
}

/* -------------------------------------------------------------------------
 * Reveal on scroll
 * ---------------------------------------------------------------------- */

let revealObserver: IntersectionObserver | null = null

function getRevealObserver(): IntersectionObserver {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          // One-shot: nothing re-hides on the way back up, so scrolling
          // against the grain never replays an animation.
          observer.unobserve(entry.target)
          entry.target.classList.add('is-revealed')
        })
      },
      // A slice off the bottom of the viewport, so a block starts settling as
      // it comes up into view rather than only once it is fully on screen.
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    )
  }
  return revealObserver
}

export function observeReveal(el: Element): void {
  if (!motionEnabled()) {
    // Belt and braces: the CSS only hides .reveal under html[data-motion], but
    // marking it revealed means nothing can leave content stuck at opacity 0.
    el.classList.add('is-revealed')
    return
  }
  getRevealObserver().observe(el)
}

export function unobserveReveal(el: Element): void {
  if (revealObserver) revealObserver.unobserve(el)
}

/* -------------------------------------------------------------------------
 * Parallax
 * ---------------------------------------------------------------------- */

// Element -> the travel (in px) it may drift, read once from its computed
// --parallax-travel rather than every frame: getComputedStyle inside the
// scroll loop would force a style recalc on each target on each frame.
const parallaxTargets = new Map<HTMLElement, number>()
let frame = 0
let listening = false

function readTravel(el: HTMLElement): number {
  return (
    parseFloat(getComputedStyle(el).getPropertyValue('--parallax-travel')) || 0
  )
}

function update(): void {
  frame = 0
  const viewport = window.innerHeight

  // Measure everything before writing anything: interleaving the two would
  // invalidate layout between reads and make each measurement a fresh reflow.
  const writes: Array<[HTMLElement, number]> = []
  parallaxTargets.forEach((travel, el) => {
    if (!travel) return
    const rect = el.getBoundingClientRect()
    if (rect.bottom <= 0 || rect.top >= viewport) return
    // Drive the offset from where the element sits on screen rather than from
    // the image's intrinsic height: naturalHeight varies per srcset candidate,
    // and on a phone the 640w variant is shorter than its container.
    const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport
    writes.push([el, Math.max(-travel, Math.min(travel, -progress * travel))])
  })

  writes.forEach(([el, y]) => {
    el.style.setProperty('--parallax-y', `${y.toFixed(1)}px`)
  })
}

function schedule(): void {
  if (!frame) frame = window.requestAnimationFrame(update)
}

// The travel is set in CSS and changes at the mobile breakpoint, so it has to
// be re-read whenever the viewport does.
function remeasure(): void {
  parallaxTargets.forEach((_travel, el) => {
    parallaxTargets.set(el, readTravel(el))
  })
  schedule()
}

export function addParallax(el: HTMLElement): void {
  if (!motionEnabled()) return
  parallaxTargets.set(el, readTravel(el))

  if (!listening) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', remeasure, { passive: true })
    listening = true
  }

  // Measure again on the next frame: on a client-side route change the new
  // page's stylesheet can land after the element is inserted, in which case
  // the first read above sees no travel at all.
  window.requestAnimationFrame(remeasure)
}

export function removeParallax(el: HTMLElement): void {
  if (!parallaxTargets.delete(el)) return
  el.style.removeProperty('--parallax-y')

  if (!parallaxTargets.size && listening) {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', remeasure)
    listening = false
    if (frame) {
      window.cancelAnimationFrame(frame)
      frame = 0
    }
  }
}
