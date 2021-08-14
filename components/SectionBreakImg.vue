<template>
  <v-row>
    <v-col align="center" class="magic-circle-logo">
      <v-img
        v-if="myVar"
        :style="imageStyle"
        :src="require('@/static/the-magic-circle.png')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    size: {
      type: Number,
      required: false,
      default: 100,
    },
  },
  setup(props) {
    const myVar = ref('Hello there ')

    const imageStyle = computed(() => {
      return {
        'margin-top': '-' + props.size / 2 + 'px',
        'margin-bottom': '-' + props.size / 2 + 'px',
        height: props.size + 'px',
        width: props.size + 'px',
      }
    })

    return { myVar, imageStyle }
  },
})
</script>
