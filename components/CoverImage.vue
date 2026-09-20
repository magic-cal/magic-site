<template>
  <picture>
    <source v-if="webpSrcset" :srcset="webpSrcset" :sizes="sizes" type="image/webp" />
    <img
      class="cover-image"
      :src="src"
      :srcset="srcset || null"
      :sizes="srcset ? sizes : null"
      :alt="alt"
      :width="dims && dims.width"
      :height="dims && dims.height"
      :style="{ height: cssHeight, objectPosition: position }"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
    />
  </picture>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { imageDims, srcsetFor, webpSrcsetFor } from '~/utils/responsiveImages'

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
      default: 'center center',
    },
    height: {
      type: [String, Number],
      required: false,
      default: 420,
    },
    sizes: {
      type: String,
      required: false,
      default: '100vw',
    },
    eager: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const cssHeight = computed(() =>
      typeof props.height === 'number' || /^\d+$/.test(String(props.height))
        ? `${props.height}px`
        : String(props.height)
    )
    const dims = computed(() => imageDims[props.src])
    const srcset = computed(() => srcsetFor(props.src))
    const webpSrcset = computed(() => webpSrcsetFor(props.src))
    return { cssHeight, dims, srcset, webpSrcset }
  },
})
</script>

<style scoped>
picture {
  display: block;
}

.cover-image {
  display: block;
  width: 100%;
  object-fit: cover;
}
</style>
