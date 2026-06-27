<template>
  <v-app dark>
    <app-bar />
    <v-main>
      <Nuxt />
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-footer :absolute="!fixed" app padless class="site-footer">
      <v-container class="py-10">
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="5" class="text-center text-md-left">
            <div class="footer-brand">Callum McClure</div>
            <div class="footer-tagline">
              Award-Winning Magician &middot; Member of The Magic Circle
            </div>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <div class="footer-contact">
              <a href="tel:07481768042">07481 768042</a>
              <span class="footer-dot">&middot;</span>
              <a href="mailto:info@magic-cal.co.uk">info@magic-cal.co.uk</a>
            </div>
            <div class="footer-location">Based in Surrey &mdash; happy to travel</div>
          </v-col>

          <v-col cols="12" md="3" class="text-center text-md-right">
            <v-btn
              icon
              color="white"
              href="https://fb.me/MagicCal"
              target="_blank"
              aria-label="Facebook"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              color="white"
              href="https://twitter.com/magic_cal"
              target="_blank"
              aria-label="Twitter"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-divider class="footer-divider my-6"></v-divider>

        <div class="footer-copy text-center">
          &copy; Callum McClure {{ new Date().getFullYear() }}. All rights
          reserved.
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
export default defineComponent({
  data() {
    const headerBarColour = computed(() => {
      console.log('scroll')
      return 'transparent'
    })

    return {
      headerBarColour,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact',
          to: '/contact',
        },
      ],
      // miniVariant: false,
      // right: true,
      // rightDrawer: false,
      title: 'Callum McClure Magician',
    }
  },
})
</script>

<style>
/* Stopping phantom side space */
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

/* Elegant dark footer */
.site-footer {
  background:
    linear-gradient(135deg, #1c1c22 0%, #24242e 60%, #1a1a20 100%) !important;
  border-top: 1px solid rgba(228, 186, 93, 0.35);
}
.footer-brand {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
}
.footer-tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  margin-top: 0.25rem;
}
.footer-contact a {
  color: rgb(228, 186, 93) !important;
  font-weight: 600;
}
.footer-contact a:hover {
  color: #fff !important;
}
.footer-dot {
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0.5rem;
}
.footer-location {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  margin-top: 0.35rem;
}
.footer-divider {
  border-color: rgba(255, 255, 255, 0.12) !important;
}
.footer-copy {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}
</style>
