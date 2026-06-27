<template>
  <v-sheet class="pb-6 pt-12" color="white">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <div class="text-h4 mb-1 text-accent">FAQs</div>
        </v-col>
        <v-col v-for="(faq, i) in faqs" :key="i" cols="12" sm="6" md="4">
          <v-expansion-panels>
            <v-expansion-panel elevation="6">
              <v-expansion-panel-title class="text-accent">
                {{ faq.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <!-- eslint-disable-next-line vue/no-v-html -- trusted static FAQ content -->
                <div class="faq-answer" v-html="faq.answer" />
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { highlightedFaqs } from '@/content/faqs'

const faqs = highlightedFaqs
</script>

<style lang="scss" scoped>
.faq-answer {
  color: black;
}
</style>
