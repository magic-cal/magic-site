<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
      <div v-parallax-scroll class="hero">
        <img
          class="hero__img"
          src="/shuffle-cropped1.jpg"
          :srcset="heroSrcset('/shuffle-cropped1.jpg')"
          sizes="100vw"
          width="1920"
          height="1279"
          alt="Close-up of a deck of playing cards being riffle shuffled in two hands"
          fetchpriority="high"
          decoding="async"
        />
        <v-row align="center" no-gutters class="hero__content">
          <v-col align="center">
            <h1 class="hero-heading">
              <span class="hero-heading__name">Callum McClure</span>
              <span class="hero-heading__tagline">Close-Up Magician in Surrey &amp; London</span>
            </h1>
            <p class="hero-heading__credential">Member of The Magic Circle</p>
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
      </div>

      <credentials-bar />

      <v-sheet color="white" class="py-0">
        <v-row no-gutters align="stretch">
          <v-col cols="12" md="6" order="2" order-md="1" class="hover-zoom">
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
            <div v-reveal class="reveal">
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
            <v-col v-reveal cols="12" class="text-center mb-8 reveal">
              <h2 class="display-1">Magic for Every Occasion</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="(svc, i) in services"
              :key="svc.subtitle"
              v-reveal
              cols="12"
              sm="4"
              :class="[
                { 'd-none d-sm-flex': svc.hideOnXs },
                `reveal reveal--d${i + 1}`,
              ]"
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

      <parallax-band
        src="/reception-card-trick.jpg"
        alt="Guests gathered around a table watching a card trick at a drinks reception"
        :height="460"
        position="center 30%"
        scrim="linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 100%)"
      >
        <v-container>
          <v-row>
            <v-col v-reveal cols="12" sm="7" md="5" class="reveal">
              <p class="display-1 white--text font-weight-light mb-4">
                Close-up magic that happens in your guests' own hands
              </p>
              <nuxt-link to="/close-up-magician" class="white--text">
                What is close-up magic?
              </nuxt-link>
            </v-col>
          </v-row>
        </v-container>
      </parallax-band>

      <company-carousel
        title="Some of the Companies Callum has performed for"
        :logos="companyLogos"
        color="white"
      />

      <v-sheet color="white" class="py-6">
        <v-container>
          <v-row justify="center">
            <v-col v-reveal cols="12" md="8" class="text-center reveal">
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
/* The image is sized with object-fit rather than from its intrinsic dimensions,
   which keeps the hands/cards framed at every width; the extra height above and
   below is the headroom the parallax slides within. */
/* min-height, not height: the hero is overflow:hidden, so a fixed height clips
   the heading off the top and the CTA off the bottom once the text wraps on a
   narrow screen. Growing to fit keeps the whole block visible; the image is
   absolutely positioned so it covers whatever height results. */
.hero {
  position: relative;
  display: flex;
  overflow: hidden;
  min-height: clamp(400px, 58vh, 620px);
  --parallax-travel: 90px;
  --parallax-y: 0px;
}

.hero__img {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(-1 * var(--parallax-travel));
  width: 100%;
  height: calc(100% + 2 * var(--parallax-travel));
  object-fit: cover;
  object-position: center 42%;
  transform: translate3d(0, var(--parallax-y), 0);
}

.hero__content {
  position: relative;
  flex: 1 1 auto;
  align-content: center;
  /* Even scrim across the whole image, deepening at the top (so the app bar
     stays readable) and at the bottom (so the hero settles into the dark
     credentials bar below it) rather than a diagonal that leaves one corner
     of the text on bare highlights. */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.68) 0%,
    rgba(0, 0, 0, 0.45) 35%,
    rgba(0, 0, 0, 0.5) 65%,
    rgba(0, 0, 0, 0.78) 100%
  );
  padding: clamp(48px, 8vh, 88px) 24px;
  color: #fff;
}

.hero-heading,
.hero-heading__credential {
  font-weight: normal;
  display: block;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.55);
}

/* Fluid sizing instead of Vuetify's display-* classes: display-4 is a fixed
   6rem, which swamps a phone screen, and there is no display-5 at all. */
.hero-heading__name,
.hero-heading__tagline,
.hero-heading__credential {
  display: block;
}

.hero-heading__name {
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -0.015em;
}

.hero-heading__tagline {
  /* Wide enough for one line on a desktop, narrow enough that a phone breaks
     it into two balanced lines rather than one orphaned word. */
  max-width: 38ch;
  text-wrap: balance;
  margin: 0.5em auto 0;
  font-size: clamp(1.05rem, 2.2vw, 1.6rem);
  line-height: 1.35;
  letter-spacing: 0.01em;
}

.hero-heading__credential {
  /* Outside the h1 so the heading stays under 70 characters. */
  margin: 0.75em 0 0;
  font-size: clamp(0.75rem, 1.1vw, 0.875rem);
  line-height: 1.4;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
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
