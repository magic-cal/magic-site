// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://www.magic-cal.co.uk'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // Statically generate the whole site (great for SEO and GitHub Pages).
  ssr: true,

  modules: ['vuetify-nuxt-module', '@nuxtjs/seo', '@nuxt/eslint'],

  // Site-wide SEO config consumed by @nuxtjs/seo (sitemap, robots, schema.org…)
  site: {
    url: siteUrl,
    name: 'Callum McClure — Award-Winning Magician',
    description:
      'Multi-award winning magician with over a decade of experience, specialising in close-up magic for weddings, dinners, balls and parties.',
    defaultLocale: 'en',
  },

  // Keep static generation robust: render OG images at runtime is heavy and the
  // site already ships a fixed share image, and the link checker shouldn't fail
  // the build on external links.
  ogImage: { enabled: false },
  linkChecker: { enabled: false },

  css: ['@mdi/font/css/materialdesignicons.css'],

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
      },
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#1976D2',
              secondary: '#FF8F00',
              accent: '#B12827',
              info: '#26A69A',
              warning: '#FFC107',
              error: '#DD2C00',
              success: '#00C853',
            },
          },
        },
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ['/', '/about', '/contact', '/faqs', '/deception'],
    },
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },
})
