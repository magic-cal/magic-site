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
import { buildHead } from '~/utils/seo'
import { faqPage, breadcrumb } from '~/utils/schema'

export default defineComponent({
  setup() {
    return { allFaqs }
  },
  head() {
    return buildHead({
      title: 'FAQs | Callum McClure Magician',
      description:
        'Answers to common questions about hiring Callum McClure — a Magic Circle close-up magician for weddings, corporate events and parties across London & Surrey.',
      path: '/faqs',
      jsonLd: [
        faqPage(allFaqs.map((f) => ({ question: f.question, answer: f.answer }))),
        breadcrumb([{ name: 'FAQs', item: '/faqs' }]),
      ],
    })
  },
})
</script>
