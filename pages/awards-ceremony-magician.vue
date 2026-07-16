<template>
  <div>
    <page-hero src="/perf5.jpg">
          <div>
            <h1 class="display-2 mb-4 white--text">Awards Ceremony Magician - London &amp; Surrey</h1>
            <p class="headline mb-6 white--text">
              Close-up magic for awards nights, industry dinners and recognition events.
              Makes the whole evening memorable, not just the trophy moment.
              Magic Circle member.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Enquire About Your Awards Night
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              Every awards evening has two distinct acts: the dinner before the ceremony,
              and the drinks and dancing that follow. Both are perfect for close-up magic
              - and together they transform a good evening into an extraordinary one.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure - an award-winning close-up magician and member of
              <strong>The Magic Circle</strong>. I've performed at corporate awards
              evenings, industry dinner ceremonies and recognition events across London
              and Surrey for over a decade. My act is entirely table-to-table and
              requires no stage, no PA, and no spot on the programme - I work around
              your format, not instead of it.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Where the magic fits into an awards evening</h2>
            <v-list color="transparent">
              <v-list-item v-for="slot in slots" :key="slot.title">
                <v-list-item-icon><v-icon color="accent">mdi-trophy</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ slot.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ slot.detail }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-6 black--text">Awards events I perform at</h2>
            <v-list color="transparent">
              <v-list-item v-for="ev in events" :key="ev">
                <v-list-item-icon><v-icon color="accent">mdi-check-circle</v-icon></v-list-item-icon>
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
            <h2 class="display-1 mb-4 black--text">Why close-up magic works at awards nights</h2>
            <p class="body-1 black--text">
              Awards ceremonies tend to have a problem: long gaps between things
              happening. Guests sit at their tables, watching a stage from a distance,
              waiting for their category. Close-up magic fills that space perfectly.
              it happens right where the guests are, it's immediate and personal, and
              it doesn't compete with the programme on stage.
            </p>
            <p class="body-1 black--text">
              It also gives tables that didn't win something to talk about and enjoy
              alongside the ones that did.
            </p>
            <p class="body-1 black--text">
              See also:
              <nuxt-link to="/gala-dinner-magician">gala dinner magician</nuxt-link>,
              <nuxt-link to="/charity-ball-magician">charity ball magician</nuxt-link>,
              <nuxt-link to="/after-dinner-magician">after dinner magician</nuxt-link>.
            </p>
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Get a Quote for Your Awards Night
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

const slots = [
  {
    title: 'Pre-dinner drinks reception',
    detail:
      'Walk-around close-up magic as nominees and guests arrive, before being seated for the dinner.',
  },
  {
    title: 'During the dinner',
    detail:
      'Table-to-table magic between courses - I work around service and the programme on stage.',
  },
  {
    title: 'During the ceremony itself',
    detail:
      "While the main stage is running categories, I move quietly through the room - tables that aren't on stage still have something extraordinary happening right in front of them.",
  },
  {
    title: 'Post-ceremony networking / drinks',
    detail:
      "After the trophies are handed out, as guests celebrate and congratulate, I keep the energy going with more walk-around magic.",
  },
]

const events = [
  'Corporate awards dinners and annual recognition evenings',
  'Industry association award ceremonies',
  'Media, marketing and advertising awards nights',
  'Property, law, finance and tech sector awards',
  'Charity gala dinners with prize draws and auction elements',
  'Regional and national business awards evenings',
  'Employee of the year and internal recognition events',
  'Sports club and association annual awards dinners',
]

const faqs = [
  {
    q: 'Can you perform during the awards ceremony as well as at dinner?',
    a: "Yes - I can work during the drinks reception, between courses at dinner, and during the ceremony itself on tables that are waiting for their category to come up. We'll map out the best slots for your specific running order.",
  },
  {
    q: "What if some tables are focused on the stage? Won't the magic distract them?",
    a: "I read the room. If a table is watching an important category or presentation, I move on and come back. Close-up magic is quiet and personal enough that it doesn't compete with what's happening on stage.",
  },
  {
    q: 'How many tables can you cover in an evening?',
    a: "A typical awards dinner gives me enough time to visit every table at least once. For very large events (200+ guests), we can discuss coverage in advance.",
  },
  {
    q: 'Do you cover London awards venues?',
    a: "Yes - I perform at awards evenings across London, from Park Lane hotels and the Grosvenor House to City livery halls, the Guildhall and Battersea. Also regularly in Surrey at venues like Pennyhill Park and Wotton House.",
  },
  {
    q: 'How much does an awards ceremony magician cost?',
    a: "Fees range from £350 to £1,500 depending on duration, guest count, date and location. Get in touch for a no-obligation quote.",
  },
]

export default defineComponent({
  setup() {
    return { slots, events, faqs }
  },
  head() {
    return buildHead({
      title: 'Awards Ceremony Magician London & Surrey | Awards Night Entertainment | Callum McClure',
      description:
        'Close-up magician for awards ceremonies, industry dinners and recognition events in London & Surrey. Magic Circle member. Table magic between courses and after the ceremony. Get a quote.',
      path: '/awards-ceremony-magician',
      jsonLd: [
        service(
          'Awards Ceremony Magician',
          'Awards Ceremony Magician London & Surrey',
          '/awards-ceremony-magician'
        ),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([
          { name: 'Awards Ceremony Magician', item: '/awards-ceremony-magician' },
        ]),
      ],
    })
  },
})
</script>
