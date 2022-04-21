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

export default defineComponent({
  setup() {
    return {
      faqs: [
        {
          question: 'What type of magic do you perform?',
          answer:
            'Callum mainly performs Close-up magic: a way of performing personal magic without smoke or mirrors. Seeing the magic up close makes it that much more amazing.<br>For a bigger event Callum performs his award-winning stage magic show (including smoke and mirrors).',
        },
        {
          question: 'How far do you travel?',
          answer:
            'He regularly performs across the UK and happy to travel to entertain. Callum has performed around the world to thousands of people.',
        },
        {
          question: 'How long do you perform for?',
          answer:
            'Events are mostly between 1 to 3 hours however Callum is more than happy to adapt to any event.',
        },
        {
          question: 'How far in advance do you need to book?',
          answer:
            'It’s never too early to enquire about your event, especially for busy periods. Wedding season in summer months with November and December being the busiest months for corporate christmas parties.<br>Most events are booked 6 to 18 months in advance, but get in touch to check availability.',
        },
        {
          question: 'Are you a member of The Magic Circle?',
          answer:
            'Yes, Callum is a member of The Magic Circle. The Magic Circle is the premier magical society in the world, founded by magicians in order to advance the art of magic. Being a member is a prestigious honor.',
        },
        {
          question: 'How do I book Callum for an event?',
          answer:
            '1. Get in touch with Callum via email or phone - Giving details of time, venue, number of guests and what the event is for.' +
            '<br>2. Callum will contact you to confirm all the details and provide a quote' +
            '<br>3. Booking of the event - when you are happy with the arrangements, we book the date in' +
            '<br>4. Enjoy the magic',
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
