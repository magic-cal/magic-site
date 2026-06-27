<template>
  <v-sheet :color="color" class="text-center mt-0 py-12">
    <v-row>
      <v-col cols="12">
        <div class="eyebrow">As Seen With</div>
        <h3 class="section-title">
          {{ title }}
        </h3>
        <div class="gold-rule"></div>
      </v-col>
    </v-row>
    <v-row class="mx-auto pt-6 pb-8" justify="center" align="center">
      <v-col v-for="logo in logos" :key="logo.src" cols="3" sm="2" md="1">
        <v-img
          class="client-logo"
          :src="logo.src"
          :alt="logo.alt"
          max-height="90px"
          contain
          eager
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'

export interface ImageItem {
  alt?: String
  src: String
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
    // const filteredLogos = computed(() => {
    //   return props.logos.filter((logo) => !logo.hideOnXs)
    // })
    return {
      // filteredLogos,
    }
  },
})
</script>

<style lang="scss" scoped>
.client-logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.3s ease, opacity 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
}
</style>
