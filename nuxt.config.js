import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    port: 8080, // default: 3000
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'catchAll',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
  },

  generate: {
    fallback: '404.html',
  },

  sitemap: {
    hostname: process.env.hostname || 'https://www.magic-cal.co.uk/',
    exclude: ['/about'],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Callum McClure Award-Winning Magician',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Callum McClure Award-Winning Magician' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Multi-Award winning Magician with over a decade of performing experience with specialties in performing close-up magic at Weddings, Dinners, Balls and Parties of all kinds.',
      },
      { name: 'format-detection', content: 'telephone=no' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.magic-cal.co.uk/' },
      {
        property: 'og:title',
        content: 'Callum McClure Award-Winning Magician',
      },
      {
        property: 'og:description',
        content:
          'Multi-Award winning Magician with over a decade of performing experience with specialties in performing close-up magic at Weddings, Dinners, Balls and Parties of all kinds.',
      },
      {
        property: 'og:image',
        content:
          'https://www.magic-cal.co.uk/shuffle/callum_mcclure_shuffle.jpg',
      },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://www.magic-cal.co.uk/' },
      {
        property: 'twitter:title',
        content: 'Callum McClure Award-Winning Magician',
      },
      {
        property: 'twitter:description',
        content:
          'Multi-Award winning Magician with over a decade of performing experience with specialities in performing close-up magic at Weddings, Dinners, Balls and Parties of all kinds.',
      },
      {
        property: 'twitter:image',
        content:
          'https://www.magic-cal.co.uk/shuffle/callum_mcclure_shuffle.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/content/faqs.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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

  // Environment variables
  emailJs: {
    user_id: process.env.EMAILJS_USER_ID,
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
