<template>
  <div v-parallax-scroll class="parallax-band" :style="{ height: cssHeight }">
    <img
      class="parallax-band__img"
      :src="src"
      :srcset="srcset || null"
      :sizes="srcset ? '100vw' : null"
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
