<template>
  <v-sheet class="pb-6 pt-12" color="white">
    <v-container>
      <v-row>
        <v-col :cols="12">
          <v-row>
            <v-col
              :cols="12"
              class="d-flex"
              style="flex-direction: column"
              align="center"
            >
              <div class="display-1 mb-1 flex-grow-1 accent--text">FAQs</div>
            </v-col>
          </v-row>
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
import { highlightedFaqs } from '~/content/faqs'

export default defineComponent({
  setup() {
    return {
      faqs: highlightedFaqs,
    }
  },
})
</script>

<style lang="scss" scoped>
div {
  color: black;
}
</style>
