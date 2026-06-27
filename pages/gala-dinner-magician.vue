<template>
  <div>
    <v-sheet color="grey darken-4" dark class="py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-2 mb-4">Gala Dinner Magician — London &amp; Surrey</h1>
            <p class="headline mb-6">
              Close-up magic for gala dinners, black tie evenings and formal corporate
              entertaining. Award-winning. Magic Circle member. 10+ years.
            </p>
            <v-btn x-large color="accent" dark nuxt to="/contact">
              Enquire About Your Gala Dinner
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              Gala dinners demand entertainment that matches the occasion — polished,
              impressive and effortlessly professional. Close-up magic is the perfect fit:
              no stage, no PA, no awkward compere — just extraordinary sleight of hand
              that happens right at the table, in your guests' own hands.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure — an award-winning close-up magician and member of
              <strong>The Magic Circle</strong>. I've performed at gala dinners and black
              tie events for major corporations, charities and private clients across
              London and Surrey, including appearances at multi-national corporate
              events and performances for BBC News.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">How close-up magic works at a gala dinner</h2>
            <v-list color="transparent">
              <v-list-item v-for="stage in stages" :key="stage.title">
                <v-list-item-icon><v-icon color="accent">mdi-check-circle</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ stage.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ stage.detail }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Gala dinner events I regularly perform at</h2>
            <v-list color="transparent">
              <v-list-item v-for="ev in events" :key="ev">
                <v-list-item-icon><v-icon color="accent">mdi-star</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">{{ ev }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">London &amp; Surrey gala dinner venues</h2>
            <p class="body-1 black--text">
              I perform at gala dinners across London — from Grosvenor House and the
              Dorchester in Mayfair to the Guildhall, Battersea Evolution and private
              members' clubs in the City and West End. In Surrey, I regularly attend
              gala evenings at <strong>Pennyhill Park</strong>,
              <strong>Wotton House</strong> and <strong>Great Fosters</strong>.
            </p>
            <p class="body-1 black--text">
              See also:
              <nuxt-link to="/awards-ceremony-magician">awards ceremony magician</nuxt-link>,
              <nuxt-link to="/charity-ball-magician">charity ball magician</nuxt-link>,
              <nuxt-link to="/after-dinner-magician">after dinner magician</nuxt-link>.
            </p>
            <div class="text-center mt-8">
              <v-btn x-large color="accent" dark nuxt to="/contact">
                Get a Gala Dinner Quote
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Frequently asked questions</h2>
            <v-expansion-panels light>
              <v-expansion-panel v-for="faq in faqs" :key="faq.q">
                <v-expansion-panel-header class="black--text font-weight-bold">
                  {{ faq.q }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="black--text">
                  {{ faq.a }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { buildHead } from '~/utils/seo'
import { service, faqPage, breadcrumb } from '~/utils/schema'

const stages = [
  {
    title: 'Pre-dinner drinks reception',
    detail:
      'Walk-around magic as guests arrive and mingle before being seated. The perfect warm-up for the evening.',
  },
  {
    title: 'Between courses at the table',
    detail:
      'Short table sets of five to ten minutes during the meal, timed around service. Close-up magic for the people right in front of you.',
  },
  {
    title: 'After the formalities',
    detail:
      "Once the speeches and awards are done, a final pass through the tables keeps the energy high and the evening memorable long after it's over.",
  },
]

const events = [
  'Annual corporate gala dinners and black tie awards evenings',
  'Charity fundraising dinners and auction galas',
  'Industry association dinners and recognition evenings',
  'Client entertainment evenings and VIP hospitality dinners',
  'Property and law firm annual dinners',
  'Medical, legal and finance sector black tie events',
  'University and alumni black tie galas',
  'Summer and winter balls',
]

const faqs = [
  {
    q: 'Is close-up magic appropriate for a formal black tie gala dinner?',
    a: "Absolutely — it's one of the most popular choices for black tie events precisely because it's sophisticated and personal. There's no stage act or compere. The magic is quiet, impressive and happens right at the table.",
  },
  {
    q: 'How do you handle very large gala dinners with many tables?',
    a: "For larger events I plan a circuit route covering as many tables as possible. I'll discuss the layout and format with you in advance to make sure everyone gets a memorable experience.",
  },
  {
    q: 'Can you combine drinks reception and table magic at the same gala?',
    a: "Yes — that's the most popular combination. I perform walk-around magic during the drinks reception, then work the tables during dinner or between courses. The two-slot format gives every guest two opportunities to see the magic.",
  },
  {
    q: 'Do you need a dressing room or specific venue facilities?',
    a: "No. I'm fully self-contained and need nothing from the venue other than access.",
  },
  {
    q: 'How much does a gala dinner magician cost?',
    a: "Fees typically range from £350 to £1,500 depending on duration, guest numbers, date and location. Get in touch for a tailored quote.",
  },
]

export default defineComponent({
  setup() {
    return { stages, events, faqs }
  },
  head() {
    return buildHead({
      title: 'Gala Dinner Magician London & Surrey | Black Tie Close-Up Magic | Callum McClure',
      description:
        'Award-winning close-up magician for gala dinners, black tie evenings and formal corporate entertaining in London & Surrey. Magic Circle member. Get a quote.',
      path: '/gala-dinner-magician',
      jsonLd: [
        service(
          'Gala Dinner Magician',
          'Gala Dinner Magician London & Surrey',
          '/gala-dinner-magician'
        ),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([{ name: 'Gala Dinner Magician', item: '/gala-dinner-magician' }]),
      ],
    })
  },
})
</script>
