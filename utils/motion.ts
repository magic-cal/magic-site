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

let revealObserver: IntersectionObserver | null = null

function getRevealObserver(): IntersectionObserver {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(entry.target)
          entry.target.classList.add('is-revealed')
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    )
  }
  return revealObserver
}

export function observeReveal(el: Element): void {
  if (!motionEnabled()) {
    el.classList.add('is-revealed')
    return
  }
  getRevealObserver().observe(el)
}

export function unobserveReveal(el: Element): void {
  if (revealObserver) revealObserver.unobserve(el)
}

const parallaxTravel = new Map<HTMLElement, number>()
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

  // Every measurement before any write: interleaving the two reflows per target.
  const offsets: Array<[HTMLElement, number]> = []
  parallaxTravel.forEach((travel, el) => {
    if (!travel) return
    const rect = el.getBoundingClientRect()
    if (rect.bottom <= 0 || rect.top >= viewport) return
    const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport
    offsets.push([el, Math.max(-travel, Math.min(travel, -progress * travel))])
  })

  offsets.forEach(([el, y]) => {
    el.style.setProperty('--parallax-y', `${y.toFixed(1)}px`)
  })
}

function schedule(): void {
  if (!frame) frame = window.requestAnimationFrame(update)
}

function remeasure(): void {
  parallaxTravel.forEach((_travel, el) => {
    parallaxTravel.set(el, readTravel(el))
  })
  schedule()
}

export function addParallax(el: HTMLElement): void {
  if (!motionEnabled()) return
  parallaxTravel.set(el, readTravel(el))

  if (!listening) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', remeasure, { passive: true })
    listening = true
  }

  // On a client-side route change the page's stylesheet can land after the
  // element does, leaving the measurement above reading no travel at all.
  window.requestAnimationFrame(remeasure)
}

export function removeParallax(el: HTMLElement): void {
  if (!parallaxTravel.delete(el)) return
  el.style.removeProperty('--parallax-y')

  if (!parallaxTravel.size && listening) {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', remeasure)
    listening = false
    if (frame) {
      window.cancelAnimationFrame(frame)
      frame = 0
    }
  }
}
