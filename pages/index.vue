<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
      <v-parallax
        id="dim"
        :src="require('@/static/shuffle-cropped1.jpg')"
        :srcset="heroSrcset('/shuffle-cropped1.jpg')"
        sizes="100vw"
        :src-width="1920"
        :src-height="1279"
        fetchpriority="high"
        alt="Close-up of a deck of playing cards being riffle shuffled in two hands"
      >
        <v-row align="center">
          <v-col align="center">
            <h1>
              <div class="display-4">Callum McClure</div>
              <div class="display-1">Close-Up Magician in Surrey &amp; London</div>
              <div class="display-5">Member of The Magic Circle</div>
            </h1>
            <div class="mt-6">
              <v-btn
                large
                color="accent"
                dark
                nuxt
                to="/contact"
                class="mr-2"
              >
                Check Availability
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-parallax>

      <credentials-bar />

      <v-sheet color="white" class="py-0">
        <v-row no-gutters align="stretch">
          <v-col cols="12" md="6" order="2" order-md="1">
            <v-img
              src="/skill.jpg"
              height="520"
              cover
              position="center top"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
            order="1"
            order-md="2"
            class="d-flex align-center pa-8 pa-md-12"
            style="background: #fff"
          >
            <div>
              <div class="overline accent--text mb-2 font-weight-bold">Member of The Magic Circle</div>
              <p class="display-1 black--text mb-6 font-weight-light">
                Award-winning close-up magic for hire in Surrey &amp; London
              </p>
              <p class="body-1 grey--text text--darken-2 mb-4">
                From the drinks reception at a Surrey wedding to a trade show stand in
                London, close-up magic that happens inches from your guests' eyes,
                in their own hands, with borrowed objects. No stage. No setup.
              </p>
              <p class="body-1 grey--text text--darken-2 mb-6">
                Over a decade of professional experience performing at weddings,
                corporate events and private parties across the South East.
              </p>
              <v-btn outlined color="accent" nuxt to="/contact">
                Get a No-Obligation Quote
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-sheet>

      <about-snippet />

      <v-sheet color="grey lighten-4" class="py-14">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-8">
              <h2 class="display-1">Magic for Every Occasion</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="svc in services"
              :key="svc.subtitle"
              cols="12"
              sm="4"
              :class="{ 'd-none d-sm-flex': svc.hideOnXs }"
              class="d-flex flex-column"
            >
              <v-card flat class="flex-grow-1 service-card">
                <v-img
                  :src="svc.src"
                  :alt="svc.alt"
                  height="220px"
                  cover
                  :position="svc.position || 'top center'"
                  class="service-card-img"
                />
                <v-card-title class="black--text pb-1">{{ svc.subtitle }}</v-card-title>
                <v-card-text class="black--text">{{ svc.details }}</v-card-text>
                <v-card-actions>
                  <v-btn
                    text
                    color="accent"
                    nuxt
                    :to="svc.href"
                    :aria-label="`Learn more about ${svc.subtitle}`"
                    >Learn more</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <v-img src="/reception-card-trick.jpg" height="460" cover position="center 30%">
        <div
          class="fill-height d-flex align-center"
          style="background: linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 100%)"
        >
          <v-container>
            <v-row>
              <v-col cols="12" sm="7" md="5">
                <p class="display-1 white--text font-weight-light mb-4">
                  Close-up magic that happens in your guests' own hands
                </p>
                <nuxt-link to="/close-up-magician" class="white--text">
                  What is close-up magic?
                </nuxt-link>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-img>

      <company-carousel
        title="Some of the Companies Callum has performed for"
        :logos="companyLogos"
        color="white"
      />

      <v-sheet color="white" class="py-6">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <p class="body-1 grey--text text--darken-1">
                Performing across
                <nuxt-link to="/areas/guildford">Guildford</nuxt-link>,
                <nuxt-link to="/areas/surrey">Surrey</nuxt-link> and
                <nuxt-link to="/areas/london">London</nuxt-link>.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <faqs-section />
      <contact-section />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { buildHead } from '~/utils/seo'
import { localBusiness } from '~/utils/schema'
import { heroSrcset } from '~/utils/heroImages'

export default defineComponent({
  setup() {
    const companyLogos = [
      { src: require('@/static/Raddison.png'), alt: 'Radisson Hotel Logo', hideOnXs: true },
      { src: require('@/static/BBC.jpg'), alt: 'BBC Logo', hideOnXs: false },
      { src: require('@/static/Barclays.png'), alt: 'Barclays Logo', hideOnXs: false },
      { src: require('@/static/Disney.png'), alt: 'Disney Logo', hideOnXs: true },
      { src: require('@/static/Independent.png'), alt: 'The Independent Logo', hideOnXs: false },
      { src: require('@/static/Age-UK.jpg'), alt: 'Age UK Logo', hideOnXs: false },
      { src: require('@/static/Marriott.png'), alt: 'Marriott Hotels Logo', hideOnXs: false },
      { src: require('@/static/Lloyds.png'), alt: 'Lloyds Bank Logo', hideOnXs: false },
      { src: require('@/static/GLive.jpg'), alt: 'G Live Guildford Logo', hideOnXs: true },
      { src: require('@/static/Btg.jpg'), alt: 'BTG Logo', hideOnXs: true },
      { src: require('@/static/CAM.jpg'), alt: 'University of Cambridge Logo', hideOnXs: true },
      { src: require('@/static/Arqiva.jpg'), alt: 'Arqiva Logo', hideOnXs: true },
    ]

    const services = [
      {
        src: require('@/static/wedding-astonished-reaction.jpg'),
        position: 'center 35%',
        alt: 'Callum McClure performing close-up magic at a Surrey wedding reception',
        hideOnXs: false,
        details: 'Award-winning close-up magic for your drinks reception, wedding breakfast or evening. Makes those in-between moments unforgettable.',
        href: '/wedding-magician',
        subtitle: 'Wedding Magician',
      },
      {
        src: require('@/static/square/corporate.jpg'),
        alt: 'Callum McClure performing close-up magic at a corporate networking event in Surrey',
        hideOnXs: false,
        details: 'From conferences and trade shows to Christmas parties, close-up magic breaks the ice and gets rooms full of people genuinely enjoying themselves.',
        href: '/corporate-magician',
        subtitle: 'Corporate Magician',
      },
      {
        src: require('@/static/square/wedding-card-reveal.jpg'),
        alt: 'Callum McClure performing walkaround magic at a birthday party near Guildford',
        hideOnXs: true,
        details: 'Birthdays, anniversaries, private dinners and garden parties. Magic that works for every age in the room.',
        href: '/party-magician',
        subtitle: 'Party Magician',
      },
    ]
    return { companyLogos, services, heroSrcset }
  },
  head() {
    return buildHead({
      title: 'Close-Up Magician Surrey & Guildford | Callum McClure',
      description:
        "Award-winning Magic Circle magician for weddings, corporate events & parties across Surrey & London. 10+ years' experience. Check availability & get a quote.",
      path: '/',
      jsonLd: [localBusiness()],
    })
  },
})
</script>

<style scoped>
.v-parallax {
  transform: none !important;
  width: 100% !important;
  object-fit: cover;
  height: 85vh !important;
}

.v-parallax__image {
  margin: -100px 0px 0px -180px !important;
}

* >>> .v-parallax__content {
  background: linear-gradient(45deg, black, transparent) !important;
}

h1 {
  font-weight: normal;
}

.service-card {
  border-radius: 4px;
  overflow: hidden;
  background: white;
}

.service-card-img {
  border-radius: 0;
}
</style>
