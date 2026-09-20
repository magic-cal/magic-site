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
              Callum will get back to you within 24 hours about availability for
              your date.
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
    title: 'Your enquiry has been sent to Callum',
    detail:
      'Your enquiry has been send to Callum and his team, along with the date, venue and details you entered.',
  },
  {
    icon: mdiCalendarCheck,
    title: 'You will hear back within 24 hours',
    detail:
      'The first reply covers availability for your date. A full quote will be provided once all the details are clear.',
  },
  {
    icon: mdiCheckCircleOutline,
    title: 'No obligation',
    detail:
      'Asking commits you to nothing, and nothing is booked until you confirm.',
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
        'Thanks for getting in touch. You will get a reply within 24 hours about availability for your date.',
      path: '/thank-you',
    })
    head.meta.push({ hid: 'robots', name: 'robots', content: 'noindex, follow' })
    return head
  },
})
</script>
