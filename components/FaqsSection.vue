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
        <v-col v-for="(faq, i) in faqs" :key="i" :cols="4" :xs="12">
          <v-card light elevation="6">
            <v-card-title class="accent--text">
             {{ faq.question }}
            </v-card-title>
            <v-card-text>
              {{ faq.answer }}
            </v-card-text>
          </v-card>
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
          question: 'What type of magic do you perform?',
          answer:
            'Callum mainly performs Close-up magic: a way of performing personal magic without smoke or mirrors. Seeing the magic up close makes it that much more amazing. For a bigger event Callum performs his award-winning stage magic show (including smoke and mirrors).',
        },
        {
          question: 'How far do you travel?',
          answer:
            'He regularly performs across the UK and happy to travel to entertain. Callum has performed around the world to thousands of people.',
        },
        {
          question: 'What style of magic do you perform?',
          answer:
            'Callum mainly performs Close-up magic: a way of performing personal magic withought smoke or mirrors, which makes it even more amazing',
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
