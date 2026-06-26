<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
      <v-parallax id="dim" :src="require('@/static/shuffle-cropped1.jpg')">
        <v-row align="center">
          <v-col align="center">
            <h1>
              <div class="display-4">Callum McClure</div>
              <div class="display-1">Close-Up Magician — Surrey & London</div>
              <div class="display-5">Member of The Magic Circle</div>
            </h1>
            <div class="mt-6">
              <v-btn
                x-large
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

      <v-sheet color="white" class="py-10">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <p class="headline black--text">
                Award-winning close-up magician for hire across Surrey, Guildford and London.
                I'm Callum McClure — a member of <strong>The Magic Circle</strong> with
                over a decade of performing experience — and I create moments of genuine
                wonder at weddings, corporate events and private parties.
              </p>
              <p class="body-1 grey--text text--darken-2 mt-4">
                From the drinks reception at a Surrey wedding to a trade show stand in
                London, my sleight-of-hand magic happens inches from your guests' eyes —
                in their own hands, with borrowed objects. No stage. No setup. Just
                magic that gets everyone talking.
              </p>
              <v-btn
                large
                color="accent"
                dark
                nuxt
                to="/contact"
                class="mt-4"
              >
                Get a No-Obligation Quote
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <section-break-img :size="125" />
      <about-snippet />
      <card-reveal />

      <company-carousel
        title="Some of the Companies Callum has performed for"
        :logos="companyLogos"
        color="white"
      />

      <v-sheet color="grey lighten-4" class="py-10">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-4">
              <h2 class="display-1">Magic for Every Occasion</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="svc in services"
              :key="svc.subtitle"
              cols="12"
              sm="4"
              class="text-center"
              :class="{ 'd-none d-sm-block': svc.hideOnXs }"
            >
              <v-img
                class="service-img mx-auto"
                :src="svc.src"
                :alt="svc.alt"
                max-height="200px"
                max-width="200px"
                contain
                eager
              />
              <h3 class="pb-2 pt-4">{{ svc.subtitle }}</h3>
              <p>{{ svc.details }}</p>
              <v-btn text color="accent" nuxt :to="svc.href">Learn more</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <v-sheet color="white" class="py-8">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <p class="body-1 grey--text text--darken-1">
                I also perform across
                <nuxt-link to="/areas/guildford">Guildford</nuxt-link>,
                <nuxt-link to="/areas/surrey">Surrey</nuxt-link> and
                <nuxt-link to="/areas/london">London</nuxt-link>.
                <nuxt-link to="/close-up-magician">Learn more about close-up magic</nuxt-link>
                or read my
                <nuxt-link to="/testimonials">client testimonials</nuxt-link>.
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

export default defineComponent({
  setup() {
    const companyLogos = [
      {
        src: require('@/static/Raddison.png'),
        alt: 'Radisson Hotel Logo',
        hideOnXs: true,
      },
      { src: require('@/static/BBC.jpg'), alt: 'BBC Logo', hideOnXs: false },
      {
        src: require('@/static/Barclays.png'),
        alt: 'Barclays Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Disney.png'),
        alt: 'Disney Logo',
        hideOnXs: true,
      },
      {
        src: require('@/static/Independent.png'),
        alt: 'The Independent Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Age-UK.jpg'),
        alt: 'Age UK Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Marriott.png'),
        alt: 'Marriott Hotels Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Lloyds.png'),
        alt: 'Lloyds Bank Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/GLive.jpg'),
        alt: 'G Live Guildford Logo',
        hideOnXs: true,
      },
      { src: require('@/static/Btg.jpg'), alt: 'BTG Logo', hideOnXs: true },
      {
        src: require('@/static/CAM.jpg'),
        alt: 'University of Cambridge Logo',
        hideOnXs: true,
      },
      {
        src: require('@/static/Arqiva.jpg'),
        alt: 'Arqiva Logo',
        hideOnXs: true,
      },
    ]

    const services = [
      {
        src: require('@/static/square/wedding.jpg'),
        alt: 'Callum McClure performing close-up magic at a Surrey wedding reception',
        hideOnXs: false,
        details:
          'Award-winning close-up magic for your drinks reception, wedding breakfast or evening. Makes those in-between moments unforgettable.',
        href: '/wedding-magician',
        subtitle: 'Wedding Magician',
      },
      {
        src: require('@/static/square/corporate.jpg'),
        alt: 'Callum McClure performing close-up magic at a corporate networking event in Surrey',
        hideOnXs: false,
        details:
          'From conferences and trade shows to Christmas parties, close-up magic breaks the ice and gets rooms full of people genuinely enjoying themselves.',
        href: '/corporate-magician',
        subtitle: 'Corporate Magician',
      },
      {
        src: require('@/static/square/magicShowcase.jpg'),
        alt: 'Callum McClure performing walkaround magic at a birthday party near Guildford',
        hideOnXs: true,
        details:
          'Birthdays, anniversaries, private dinners and garden parties — I mingle through your guests with magic that works for every age in the room.',
        href: '/party-magician',
        subtitle: 'Party Magician',
      },
    ]
    return { companyLogos, services }
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

.service-img {
  border-radius: 25%;
}
</style>
