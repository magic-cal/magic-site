<template>
  <v-sheet :color="color" class="text-center mt-0">
    <v-row>
      <v-col v-reveal cols="12" class="reveal">
        <h3 class="brand1--text py-8 accent--text">
          {{ title }}
        </h3>
      </v-col>
    </v-row>
    <v-row class="mx-auto pb-8" justify="center" align="center">
      <v-col
        v-for="(logo, i) in logos"
        :key="logo.src"
        v-reveal
        cols="2"
        sm="1"
        class="reveal reveal--fade logo-tile"
        :style="{ '--reveal-delay': `${i * 70}ms` }"
      >
        <picture>
          <source
            :srcset="logoWebpSrcsetFor(logo.src)"
            sizes="90px"
            type="image/webp"
          />
          <img
            class="logo-img"
            :src="logo.src"
            :srcset="logoSrcsetFor(logo.src)"
            sizes="90px"
            :alt="logo.alt"
            :width="logo.width"
            :height="logo.height"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'
import { logoSrcsetFor, logoWebpSrcsetFor } from '~/utils/responsiveImages'

export interface ImageItem {
  alt?: String
  src: String
  width?: number
  height?: number
  hideOnXs?: boolean
}

export default defineComponent({
  name: 'LogosBar',
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'Primary',
    },
    logos: {
      type: Array as PropType<ImageItem[]>,
      default: () => [],
    },
  },
  setup() {
    return { logoSrcsetFor, logoWebpSrcsetFor }
  },
})
</script>

<style scoped>
.logo-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 90px;
  object-fit: contain;
}
</style>
