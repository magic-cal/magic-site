<template>
  <v-sheet class="pb-16 pt-12" color="white">
    <v-container class="faq-container">
      <v-row>
        <v-col
          v-for="(faq, i) in faqs"
          :key="i"
          :cols="12"
          class="faq-item"
        >
          <h2 class="faq-question">
            {{ faq.question }}
          </h2>
          <div class="faq-answer" v-html="faq.answer" />
          <v-divider v-if="i < faqs.length - 1" class="mt-8" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { allFaqs } from '@/content/faqs'

export default defineComponent({
  setup() {
    return {
      faqs: allFaqs,
    }
  },
})
</script>

<style lang="scss" scoped>
.faq-container {
  max-width: 820px;
}

.faq-item {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.faq-question {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  color: #1c1c22;
  margin-bottom: 0.75rem;
}

.faq-answer {
  color: rgba(0, 0, 0, 0.74);
  font-size: 1.02rem;
  line-height: 1.75;

  ::v-deep a {
    color: #b12827;
    font-weight: 600;
  }
}
</style>
