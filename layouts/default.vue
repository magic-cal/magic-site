<template>
  <v-app dark>
    <app-bar />
    <v-main>
      <Nuxt />
    </v-main>

    <v-footer color="grey darken-4" padless>
      <v-container class="py-8">
        <v-row>
          <v-col cols="12" sm="4">
            <p class="white--text font-weight-bold mb-2">Services</p>
            <div v-for="link in serviceLinks" :key="link.to">
              <nuxt-link :to="link.to" class="footer-link">{{ link.text }}</nuxt-link>
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <p class="white--text font-weight-bold mb-2">Areas</p>
            <div v-for="link in areaLinks" :key="link.to">
              <nuxt-link :to="link.to" class="footer-link">{{ link.text }}</nuxt-link>
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <p class="white--text font-weight-bold mb-2">Information</p>
            <div v-for="link in infoLinks" :key="link.to">
              <nuxt-link :to="link.to" class="footer-link">{{ link.text }}</nuxt-link>
            </div>
            <div class="mt-4">
              <p class="grey--text text--lighten-1 mb-1 body-2">
                <v-icon small color="grey lighten-1">mdi-phone</v-icon>
                <a href="tel:+447481768042" class="footer-link ml-1">07481 768042</a>
              </p>
              <p class="grey--text text--lighten-1 mb-0 body-2">
                <v-icon small color="grey lighten-1">mdi-email</v-icon>
                <a href="mailto:info@magic-cal.co.uk" class="footer-link ml-1">info@magic-cal.co.uk</a>
              </p>
            </div>
          </v-col>
        </v-row>
        <v-divider dark class="mt-6 mb-4" />
        <v-row>
          <v-col cols="12" class="text-center grey--text text--lighten-1 caption">
            &copy; {{ new Date().getFullYear() }} Callum McClure Magician. Member of The Magic Circle.
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  data() {
    return {
      serviceLinks: [
        { text: 'Wedding Magician', to: '/wedding-magician' },
        { text: 'Corporate Magician', to: '/corporate-magician' },
        { text: 'Party Magician', to: '/party-magician' },
        { text: 'Close-Up Magic', to: '/close-up-magician' },
        { text: 'Testimonials', to: '/testimonials' },
      ],
      areaLinks: [
        { text: 'Magician in London', to: '/areas/london' },
        { text: 'Magician in Surrey', to: '/areas/surrey' },
        { text: 'Magician in Guildford', to: '/areas/guildford' },
      ],
      infoLinks: [
        { text: 'About Callum', to: '/about' },
        { text: 'How Much Does a Magician Cost?', to: '/blog/how-much-does-a-wedding-magician-cost' },
        { text: 'Blog', to: '/blog' },
        { text: 'FAQs', to: '/faqs' },
        { text: 'Contact / Get a Quote', to: '/contact' },
      ],
    }
  },
})
</script>

<style>
.footer-link {
  color: #bdbdbd !important;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 2;
  display: inline-block;
}
.footer-link:hover {
  color: #ffffff !important;
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (-o-min-device-pixel-ratio: 3/2),
  only screen and (min--moz-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
