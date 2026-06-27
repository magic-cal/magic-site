<template>
  <v-sheet class="pb-6 pt-12" color="white">
    <v-container>
      <v-row>
        <v-col :cols="12" class="text-center pb-6">
          <div class="eyebrow">Good to Know</div>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <div class="gold-rule"></div>
        </v-col>
        <v-expansion-panels light :multiple="!$vuetify.breakpoint.xs">
          <v-col v-for="(faq, i) in faqs" :key="i" :cols="12" :sm="6" :md="4">
            <v-expansion-panel light elevation="6">
              <v-expansion-panel-header class="accent--text">
                {{ faq.question }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-html="faq.answer" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-col>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { highlightedFaqs } from '@/content/faqs'

export default defineComponent({
  setup() {
    return {
      faqs: highlightedFaqs,
    }
  },
})
</script>

<style lang="scss" scoped>
.v-expansion-panel-header,
.v-expansion-panel-content {
  color: rgba(0, 0, 0, 0.82);
}
</style>
