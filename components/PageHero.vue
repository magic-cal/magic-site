<template>
  <div class="page-hero" :style="{ height: cssHeight }">
    <!-- A plain <img> rather than <v-img> on purpose. v-img applies its source
         client-side, so the hero (the LCP element on every page that uses this)
         was invisible to the preload scanner and carried no alt text. -->
    <img
      class="page-hero__img"
      :src="src"
      :alt="alt"
      :style="{ objectPosition: position }"
      fetchpriority="high"
      decoding="async"
    />
    <div class="page-hero__overlay d-flex align-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: false,
      // Bias the crop toward the upper portion where the face/hands sit,
      // rather than the default center-center (which crops through the torso).
      default: 'center 25%',
    },
    height: {
      type: [String, Number],
      required: false,
      default: 440,
    },
  },
  setup(props) {
    const cssHeight = computed(() =>
      typeof props.height === 'number' || /^\d+$/.test(String(props.height))
        ? `${props.height}px`
        : String(props.height)
    )
    return { cssHeight }
  },
})
</script>

<style scoped>
.page-hero {
  position: relative;
  overflow: hidden;
}

.page-hero__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero__overlay {
  position: relative;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.35) 100%);
}
</style>
