<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" class="pa-0">
      <heading-section title="FAQs" subtitle="Frequently Asked Questions" />
    </v-col>
    <v-col cols="12">
      <faqs-text-section />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { allFaqs } from '@/content/faqs'

useSeoMeta({
  title: 'FAQs — Callum McClure Magician',
  description:
    'Answers to common questions about booking Callum McClure for weddings, corporate events, parties and more.',
})

// Expose FAQs as structured data for rich results in search.
useSchemaOrg(
  allFaqs.map((faq) =>
    defineQuestion({
      name: faq.question,
      acceptedAnswer: faq.answer.replace(/<br\s*\/?>/g, ' '),
    })
  )
)
</script>
