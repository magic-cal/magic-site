<template>
  <v-sheet class="pb-6 pt-12" color="white">
    <v-container>
      <v-row>
        <v-col v-for="(faq, i) in faqs" :key="i" :cols="12">
          <div class="display-1">
            {{ faq.question }}
          </div>
          <div class="py-4" v-html="faq.answer" />
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
div {
  color: black;
}
</style>
