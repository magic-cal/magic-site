<template>
  <v-container>
    <v-row>
      <v-col :cols="12">
        <!-- <v-sheet class="pb-6 pt-12 text-center" color="white">
          <v-img :src="require('@/static/shuffle-cropped.jpg')"> </v-img>
        </v-sheet> -->
      </v-col>
      <v-col>
        <faqs-section />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { allFaqs } from '~/content/faqs'

export default defineComponent({
  setup() {
    return { allFaqs }
  },
})
</script>
