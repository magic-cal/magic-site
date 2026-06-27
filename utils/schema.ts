import { SITE_URL, SITE_IMAGE } from '~/utils/constants'

const PHONE = '+447481768042'
const EMAIL = 'info@magic-cal.co.uk'
const AREA_SERVED = ['London', 'Guildford', 'Surrey', 'South East England']

interface LocalBusinessOpts {
  areaServed?: string | string[]
  idSuffix?: string
}

export const localBusiness = (opts?: LocalBusinessOpts) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business${opts?.idSuffix ? `-${opts.idSuffix}` : ''}`,
  name: 'Callum McClure Magician',
  description:
    'Award-winning close-up magician for weddings, corporate events and parties across London, Surrey and the South East.',
  url: `${SITE_URL}/`,
  image: SITE_IMAGE,
  telephone: PHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
  areaServed: opts?.areaServed ?? AREA_SERVED,
  founder: {
    '@type': 'Person',
    name: 'Callum McClure',
    memberOf: {
      '@type': 'Organization',
      name: 'The Magic Circle',
    },
  },
  sameAs: [
    'https://www.facebook.com/MagicCal/',
    'https://www.instagram.com/mcclure_magic/',
  ],
})

export const service = (
  serviceType: string,
  name: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType,
  name,
  url: `${SITE_URL}${url}`,
  areaServed: AREA_SERVED,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
  },
})

export const faqPage = (
  items: Array<{ question: string; answer: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

export const breadcrumb = (
  items: Array<{ name: string; item: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_URL}/`,
    },
    ...items.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: crumb.name,
      item: `${SITE_URL}${crumb.item}`,
    })),
  ],
})

export const article = (opts: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.headline,
  description: opts.description,
  datePublished: opts.datePublished,
  dateModified: opts.dateModified,
  author: {
    '@type': 'Person',
    name: 'Callum McClure',
    url: `${SITE_URL}/about`,
  },
  publisher: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#business`,
    name: 'Callum McClure Magician',
    logo: {
      '@type': 'ImageObject',
      url: SITE_IMAGE,
    },
  },
  image: SITE_IMAGE,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${opts.url}`,
  },
})

export const personProfile = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Callum McClure',
  url: `${SITE_URL}/about`,
  image: SITE_IMAGE,
  jobTitle: 'Magician',
  description:
    'Multi-award-winning close-up magician and member of The Magic Circle, based in London and performing across Surrey and the South East.',
  memberOf: {
    '@type': 'Organization',
    name: 'The Magic Circle',
    url: 'https://www.themagiccircle.co.uk',
  },
  sameAs: [
    'https://www.facebook.com/MagicCal/',
    'https://www.instagram.com/mcclure_magic/',
  ],
  worksFor: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
  },
})

interface EventOpts {
  name: string
  description: string
  url: string
  startDate?: string
  endDate?: string
  venueName?: string
  venueLocality?: string
  isFree?: boolean
  ogImage?: string
}

export const theaterEvent = (opts: EventOpts) => {
  const event: any = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    image: opts.ogImage || SITE_IMAGE,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: {
      '@type': 'Person',
      name: 'Callum McClure',
      url: `${SITE_URL}/about`,
    },
    organizer: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#business`,
      name: 'Callum McClure Magician',
    },
  }

  if (opts.startDate) event.startDate = opts.startDate
  if (opts.endDate) event.endDate = opts.endDate

  if (opts.venueName) {
    event.location = {
      '@type': 'Place',
      name: opts.venueName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: opts.venueLocality || 'Edinburgh',
        addressCountry: 'GB',
      },
    }
  }

  if (opts.isFree) {
    event.offers = {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: 'https://freefringe.org.uk/shows/callum-mcclure-wont-get-fooled-again/',
    }
  }

  return event
}
