<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
      <v-parallax id="dim" :src="require('@/static/shuffle-cropped1.jpg')">
        <v-row align="center">
          <v-col align="center">
            <div class="display-4">Callum McClure</div>
            <div class="display-1">Multi-Award Winning Magician</div>
            <div class="display-5">Member of The Magic Circle</div>
          </v-col>
        </v-row>
      </v-parallax>
      <section-break-img :size="125" />
      <faqs-section />
      <about-snippet />
      <card-reveal />
      <company-carousel
        title="Some of the Companies Callum has performed for"
        :logos="companyLogos"
        color="white"
      />

      <contact-section />
      <!-- <services-section title="Which Style of Magic" :services="services" /> -->
      <!-- color="white" -->
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
// import ServicesSection from '~/components/ServicesSection.vue'

export default defineComponent({
  // components: { ServicesSection },
  setup() {
    const companyLogos = [
      {
        src: require('@/static/Raddison.png'),
        alt: 'Raddison Logo',
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
        alt: 'AgeUk Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Marriott.png'),
        alt: 'Marriott Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Lloyds.png'),
        alt: 'Lloyds Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/GLive.jpg'),
        alt: 'GLive Logo',
        hideOnXs: true,
      },
      { src: require('@/static/Btg.jpg'), alt: 'BTG Logo', hideOnXs: true },
      {
        src: require('@/static/CAM.jpg'),
        alt: 'Cambridge Logo',
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
        src: require('@/static/Raddison.png'),
        alt: 'Raddison Logo',
        hideOnXs: true,
        details:
          'Whether for an office party, fundraiser or entertaining clients, Magic really gets people talking. Businesses big and small love this personal, professional Magic.',
        href: '/',
        subtitle: 'Corporate Magic',
      },
      {
        src: require('@/static/dollar-coins.jpg'),
        alt: 'BBC Logo',
        hideOnXs: false,
        details:
          'Magic that is right there, in front of your eyes. A personal, entertaining style of magic for small groups or tables',
        href: '/',
        subtitle: 'Close-Up/Table Magic',
      },
      {
        src: require('@/static/Barclays.png'),
        alt: 'Barclays Logo',
        hideOnXs: false,
        details:
          'Make your special day more Magical. Let family and friends relax and share an expeience together. Between ceremony and reception or during meals, magic is perfect.',
        href: '/',
        subtitle: 'Wedding Day Magic',
      },
    ]
    return { companyLogos, services }
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
</style>
