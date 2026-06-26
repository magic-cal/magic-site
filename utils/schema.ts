const SITE_URL = 'https://www.magic-cal.co.uk'
const PHONE = '+447481768042'
const EMAIL = 'info@magic-cal.co.uk'
const IMAGE = `${SITE_URL}/shuffle/callum_mcclure_shuffle.jpg`

export const localBusiness = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Callum McClure Magician',
  description:
    'Award-winning close-up magician for weddings, corporate events and parties across London, Surrey and the South East.',
  url: `${SITE_URL}/`,
  image: IMAGE,
  telephone: PHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
  areaServed: ['London', 'Guildford', 'Surrey', 'South East England'],
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
  areaServed: ['London', 'Guildford', 'Surrey', 'South East England'],
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
  url: `${SITE_URL}${opts.url}`,
  datePublished: opts.datePublished,
  dateModified: opts.dateModified,
  author: {
    '@type': 'Person',
    name: 'Callum McClure',
    url: `${SITE_URL}/about`,
  },
  publisher: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Callum McClure Magician',
    logo: {
      '@type': 'ImageObject',
      url: IMAGE,
    },
  },
  image: IMAGE,
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
  image: IMAGE,
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
