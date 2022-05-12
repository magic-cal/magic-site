<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
      <heading-section title="FAQs" subtitle="Frequently Asked Questions" />
      <!-- <v-sheet class="pb-6 pt-12 text-center" color="white">
          <v-img :src="require('@/static/shuffle-cropped.jpg')"> </v-img>
        </v-sheet> -->
    </v-col>
    <v-col>
      <faqs-text-section />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { allFaqs } from '@/content/faqs'

export default defineComponent({
  setup() {
    return { allFaqs }
  },
})
</script>
