import { SITE_URL, SITE_IMAGE } from '~/utils/constants'

interface SeoOptions {
  title: string
  description: string
  path: string
  ogImage?: string
  ogType?: string
  jsonLd?: object[]
}

export const buildHead = (opts: SeoOptions) => {
  const url = `${SITE_URL}${opts.path}`
  const image = opts.ogImage || SITE_IMAGE
  const ogType = opts.ogType || 'website'

  const scripts = (opts.jsonLd || []).map((ld: any) => ({
    hid: `ld-json-${ld['@type'] || 'unknown'}`,
    type: 'application/ld+json',
    innerHTML: JSON.stringify(ld),
  }))

  return {
    title: opts.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: opts.description,
      },
      { hid: 'og:type', property: 'og:type', content: ogType },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:title', property: 'og:title', content: opts.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: opts.description,
      },
      { hid: 'og:image', property: 'og:image', content: image },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: url,
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: opts.title,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: opts.description,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: image,
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: url,
      },
    ],
    script: scripts,
    __dangerouslyDisableSanitizersByTagID: Object.fromEntries(
      scripts.map((s) => [s.hid, ['innerHTML']])
    ),
  }
}
