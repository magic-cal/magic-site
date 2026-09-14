<template>
  <div v-parallax-scroll class="parallax-band" :style="{ height: cssHeight }">
    <!-- A plain <img> rather than <v-img>, for the same reason as PageHero:
         v-img paints a background-image client-side, so the photo carries no
         alt text and stays invisible to the preload scanner. -->
    <img
      class="parallax-band__img"
      :src="src"
      :srcset="srcset"
      sizes="100vw"
      :width="dims && dims.width"
      :height="dims && dims.height"
      :alt="alt"
      :style="{ objectPosition: position }"
      loading="lazy"
      decoding="async"
    />
    <div
      v-if="$slots.default"
      class="parallax-band__overlay d-flex align-center"
      :style="scrim ? { background: scrim } : null"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { heroImageDims, heroSrcset } from '~/utils/heroImages'

// A full-bleed photo that breaks up a run of text sections, drifting gently
// against the scroll. Pass a slot to lay copy over it; without one the photo
// is decorative and alt should be left empty.
export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
    position: {
      type: String,
      required: false,
      default: 'center 30%',
    },
    height: {
      type: [String, Number],
      required: false,
      default: 420,
    },
    // Gradient laid over the photo so overlaid copy stays readable. Left off
    // for a decorative band.
    scrim: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props) {
    const cssHeight = computed(() =>
      typeof props.height === 'number' || /^\d+$/.test(String(props.height))
        ? `${props.height}px`
        : String(props.height)
    )
    const dims = computed(() => heroImageDims[props.src])
    const srcset = computed(() => heroSrcset(props.src))
    return { cssHeight, dims, srcset }
  },
})
</script>

<style scoped>
.parallax-band {
  position: relative;
  overflow: hidden;
  /* Nothing drifts unless the motion flag is set - see assets/motion.css. */
  --parallax-travel: 0px;
  --parallax-y: 0px;
}

html[data-motion] .parallax-band {
  --parallax-travel: 40px;
}

@media (min-width: 960px) {
  html[data-motion] .parallax-band {
    --parallax-travel: 64px;
  }
}

/* Taller than the box by the travel at each end, so the photo can drift
   inside the crop without ever exposing an edge. */
.parallax-band__img {
  position: absolute;
  top: calc(-1 * var(--parallax-travel));
  left: 0;
  width: 100%;
  height: calc(100% + 2 * var(--parallax-travel));
  object-fit: cover;
  transform: translate3d(0, var(--parallax-y), 0);
}

.parallax-band__overlay {
  position: relative;
  height: 100%;
}
</style>
