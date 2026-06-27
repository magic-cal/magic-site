# magic-cal

## About

This is a personal website to showcase my magic business. Performing professionally for over a decade and all over the world. This website also acts as a testing ground for my website development.

## Tech stack

- [Nuxt 4](https://nuxt.com) (statically generated for SEO + GitHub Pages)
- [Vuetify 4](https://vuetifyjs.com) via [`vuetify-nuxt-module`](https://nuxt.vuetifyjs.com)
- [`@nuxtjs/seo`](https://nuxtseo.com) — sitemap, robots, structured data (schema.org)
- [`@emailjs/browser`](https://www.emailjs.com) for the contact form

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production (SSR/Nitro)
$ npm run build

# statically generate the site to .output/public
$ npm run generate

# preview the production build
$ npm run preview

# lint
$ npm run lint
```

The site is deployed to GitHub Pages from the generated `.output/public`
directory by the workflow in `.github/workflows/nuxtjs.yml`.
