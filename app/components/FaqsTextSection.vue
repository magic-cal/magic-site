<template>
  <v-sheet class="pb-6 pt-12" color="white">
    <v-container>
      <v-row>
        <v-col v-for="(faq, i) in faqs" :key="i" cols="12">
          <div class="text-h5">
            {{ faq.question }}
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -- trusted static FAQ content -->
          <div class="faq-answer py-4" v-html="faq.answer" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { allFaqs } from '@/content/faqs'

const faqs = allFaqs
</script>

<style lang="scss" scoped>
.faq-answer {
  color: black;
}
</style>
