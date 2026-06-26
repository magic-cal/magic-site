import colors from 'vuetify/es5/util/colors'

export default {
  ssr: true,
  target: 'static',

  server: {
    port: 8080,
  },

  router: {
    base: '/',
  },

  generate: {
    fallback: '404.html',
  },

  sitemap: {
    hostname: 'https://www.magic-cal.co.uk',
    gzip: false,
  },

  // Global page headers
  head: {
    title: 'Close-Up Magician Surrey & Guildford | Callum McClure',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Award-winning Magic Circle magician for weddings, corporate events & parties across Surrey. 10+ years\' experience. Check availability & get a quote.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.magic-cal.co.uk/' },
      {
        property: 'og:title',
        content: 'Close-Up Magician Surrey & Guildford | Callum McClure',
      },
      {
        property: 'og:description',
        content:
          'Award-winning Magic Circle magician for weddings, corporate events & parties across Surrey. 10+ years\' experience.',
      },
      {
        property: 'og:image',
        content:
          'https://www.magic-cal.co.uk/shuffle/callum_mcclure_shuffle.jpg',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap',
      },
    ],
  },

  css: [],

  plugins: ['~/content/faqs.ts'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  content: {},

  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: '#b12827',
          secondary: colors.amber.darken3,
          background: '#bababa1f',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.blue.darken2,
          accent: '#b12827',
          secondary: colors.amber.darken3,
          background: '#bababa1f',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  emailJs: {
    user_id: process.env.EMAILJS_USER_ID,
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
  },

  build: {
    extend(config) {
      config.resolve.alias['@vue/composition-api'] = 'vue'
    },
  },
}
