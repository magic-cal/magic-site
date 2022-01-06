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
        <v-col v-for="(faq, i) in faqs" :key="i" :cols="12">
          <div>{{ faq.question }}</div>
          <div>{{ faq.answer }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {
      faqs: [
        {
          question: 'Question',
          answer: 'Hello',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
div {
  color: black;
}
</style>
