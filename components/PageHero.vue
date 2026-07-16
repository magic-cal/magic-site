<template>
  <v-img :src="src" height="440" cover>
    <div
      class="fill-height d-flex align-center"
      style="background: linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 100%)"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-img>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
})
</script>
