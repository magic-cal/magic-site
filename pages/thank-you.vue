<template>
  <div>
    <v-sheet color="grey darken-4" dark class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <v-icon color="accent" size="56" class="mb-4">{{
              mdiCheckCircleOutline
            }}</v-icon>
            <h1 class="display-1 mb-3">Thanks - your message is on its way</h1>
            <p class="headline mb-0">
              Callum aims to reply to every enquiry within 24 hours, with
              availability and a quote for your event.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">What happens next</h2>
            <v-list color="transparent">
              <v-list-item v-for="step in steps" :key="step.title">
                <v-list-item-icon>
                  <v-icon color="accent">{{ step.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{
                    step.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{
                    step.detail
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <p class="body-1 black--text mt-6">
              If your event is soon and you would rather talk it through now,
              call <a href="tel:+447481768042">07481 768042</a> or email
              <a href="mailto:info@magic-cal.co.uk">info@magic-cal.co.uk</a>.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="display-1 mb-4 black--text">While you wait</h2>
            <p class="body-1 black--text mb-6">
              Have a look at what close-up magic actually looks like on the
              night.
            </p>
            <v-btn outlined color="accent" nuxt to="/testimonials" class="ma-1">
              Read reviews
            </v-btn>
            <v-btn outlined color="accent" nuxt to="/close-up-magician" class="ma-1">
              What is close-up magic?
            </v-btn>
            <v-btn outlined color="accent" nuxt to="/faqs" class="ma-1">
              FAQs
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mdiCalendarCheck, mdiCheckCircleOutline, mdiEmailFast } from '@mdi/js'
import { buildHead } from '~/utils/seo'

const steps = [
  {
    icon: mdiEmailFast,
    title: 'Your enquiry has reached Callum',
    detail:
      'It goes straight to his inbox, along with the date, venue and details you entered.',
  },
  {
    icon: mdiCalendarCheck,
    title: 'He checks the date',
    detail:
      'You will get a reply within 24 hours confirming whether the date is free, and what it would cost.',
  },
  {
    icon: mdiCheckCircleOutline,
    title: 'No obligation',
    detail:
      'A quote is just a quote - nothing is booked until you say so, and there is no deposit to pay to ask.',
  },
]

export default defineComponent({
  setup() {
    return { steps, mdiCheckCircleOutline }
  },
  head() {
    const head = buildHead({
      title: 'Thank You | Callum McClure Magician',
      description:
        'Thanks for getting in touch. Callum aims to reply to every enquiry within 24 hours with availability and a quote.',
      path: '/thank-you',
    })
    // Only ever reached by sending the form, so there is nothing here for
    // search results - and indexing it would let people arrive without having
    // enquired, which would make it useless as a conversion signal later.
    head.meta.push({ hid: 'robots', name: 'robots', content: 'noindex, follow' })
    return head
  },
})
</script>
