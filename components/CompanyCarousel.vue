<template>
  <v-sheet :color="color" class="text-center mt-0">
    <v-row>
      <v-col cols="12">
        <h3 class="brand1--text py-8 accent--text">
          {{ title }}
        </h3>
      </v-col>
    </v-row>
    <v-row class="mx-auto pb-8" justify="center" align="center">
      <v-col v-for="logo in logos" :key="logo.src" cols="2" sm="1">
        <v-img
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
