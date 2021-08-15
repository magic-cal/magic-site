<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
      <v-parallax id="dim" :src="require('@/static/shuffle-cropped1.jpg')">
        <v-row align="center">
          <v-col align="center">
            <div class="display-4">Callum McClure</div>
            <div class="display-1">Multi-Award Winning Magician</div>
            <div class="display-5">Member of The Magic Circle</div>
          </v-col></v-row
        >
      </v-parallax>
      <section-break-img />
      <!-- <royal-variety /> -->
      <about-snippet />
      <card-reveal />
      <company-carousel
        title="Some of the Companies Callum has performed for"
        :logos="companyLogos"
        color="white"
      />
      <contact-section />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const companyLogos = [
      { src: '/Raddison.png', alt: 'Vuetify' },
      { src: '/guildford-borough.png', alt: 'Vuetify' },
      { src: '/Barclays.png', alt: 'Vuetify' },
      { src: '/BBC.jpg', alt: 'Vuetify' },
      { src: '/Independent.png', alt: 'Vuetify' },
      { src: '/Age-UK.jpg', alt: 'Vuetify' },
      { src: '/Arqiva.jpg', alt: 'Vuetify' },
      { src: '/Lloyds.png', alt: 'Vuetify' },
      { src: '/Btg.jpg', alt: 'Vuetify' },
      { src: '/GLive.jpg', alt: 'Vuetify' },
      { src: '/CAM.jpg', alt: 'Vuetify' },
      { src: '/Marriott.png', alt: 'Vuetify' },
    ]
    return { companyLogos }
  },
})
</script>

<style scoped>
.v-parallax {
  transform: none !important;
  width: 100% !important;
  object-fit: cover;
  height: 75vh !important;
}

.v-parallax__image {
  margin: -100px 0px 0px -180px !important;
}

* >>> .v-parallax__content {
  background: linear-gradient(45deg, black, transparent) !important;
}
</style>
