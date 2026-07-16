<template>
  <div>
    <page-hero src="/perf2.jpg">
          <div>
            <h1 class="display-2 mb-4 white--text">After Dinner Magician - London &amp; Surrey</h1>
            <p class="headline mb-6 white--text">
              Award-winning close-up magic between the courses and after the speeches,
              for corporate dinners, gala evenings, wedding breakfasts and private
              celebrations. Magic Circle member.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Enquire About After Dinner Magic
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              After dinner is the golden window for close-up magic. The meal is done,
              the speeches are over, the room is warm and relaxed - and that's exactly
              when sleight of hand that happens an inch from someone's nose lands the
              hardest.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure - an award-winning <strong>after dinner magician</strong>
              and member of <strong>The Magic Circle</strong>. I've performed after-dinner
              close-up magic at corporate gala dinners, charity balls, awards evenings and
              private celebrations across London and Surrey for over a decade. My act is
              table-to-table and entirely self-contained: no stage, no PA, no setup - just
              astonishing sleight of hand with borrowed objects, right in your guests' hands.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">When I perform at dinner events</h2>
            <v-list color="transparent">
              <v-list-item v-for="slot in slots" :key="slot.title">
                <v-list-item-icon><v-icon color="accent">mdi-clock-outline</v-icon></v-list-item-icon>
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
            <h2 class="display-1 mb-6 black--text">Events I perform at</h2>
            <v-list color="transparent">
              <v-list-item v-for="ev in events" :key="ev.title">
                <v-list-item-icon><v-icon color="accent">mdi-check-circle</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ ev.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ ev.detail }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-4 black--text">What makes after dinner magic different</h2>
            <p class="body-1 black--text">
              Walk-around magic at a drinks reception and after dinner magic are two
              different beasts. During drinks people are standing, moving, meeting.
              At the table they're settled, they're focused, and the person next to
              them is about to watch the same thing they are - which multiplies the
              reaction significantly.
            </p>
            <p class="body-1 black--text">
              I perform short, self-contained sets at each table - typically five to
              ten minutes per group - so that the magic feels personal rather than
              like a performance to the room. You choose whether I work the tables
              during dinner, between courses, after the speeches, or a combination.
            </p>
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Get a Quote
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

    <v-sheet color="grey lighten-4" class="py-10">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <p class="body-2 grey--text">
              See also:
              <nuxt-link to="/gala-dinner-magician">Gala dinner magician</nuxt-link> ·
              <nuxt-link to="/awards-ceremony-magician">Awards ceremony magician</nuxt-link> ·
              <nuxt-link to="/charity-ball-magician">Charity ball magician</nuxt-link> ·
              <nuxt-link to="/table-magician">Table magician</nuxt-link> ·
              <nuxt-link to="/corporate-magician">Corporate magician</nuxt-link>
            </p>
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
    title: 'Drinks reception / pre-dinner',
    detail:
      'As guests arrive and gather before being seated - the classic mix-and-mingle slot.',
  },
  {
    title: 'Between courses',
    detail:
      'Short table sets of five to ten minutes per table, timed around service so I never clash with the food.',
  },
  {
    title: 'After the speeches',
    detail:
      'Once the formalities are over, when people are relaxed and in the mood to be surprised. Often the highest-reaction slot of the night.',
  },
  {
    title: 'Evening / post-dinner',
    detail:
      'As guests move from the dining room to the bar or dance floor, close-up magic keeps the energy going and the conversations flowing.',
  },
]

const events = [
  {
    title: 'Corporate gala dinners',
    detail:
      'Annual company dinners, awards evenings and client entertainment - the after dinner slot is the premium close-up magic opportunity at any corporate event.',
  },
  {
    title: 'Charity balls & fundraising dinners',
    detail:
      'Between courses or post-auction entertainment that keeps energy high and guests engaged all evening.',
  },
  {
    title: 'Wedding breakfasts',
    detail:
      'Table-to-table magic during the meal or between speeches and the first dance. See also my dedicated wedding magician page.',
  },
  {
    title: 'Awards ceremonies',
    detail:
      'Pre-dinner drinks and table magic at the dinner that follows - perfect for making the whole evening memorable, not just the trophy moment.',
  },
  {
    title: 'Private dinner parties',
    detail:
      'Intimate close-up magic for a dinner party of 8 or a restaurant private hire of 80.',
  },
]

const faqs = [
  {
    q: 'What is an after dinner magician?',
    a: "An after dinner magician is a close-up magician who performs at the table during or after a formal dinner. Rather than a stage show, the magic happens right in front of each group - in their own hands, with borrowed objects. I perform a series of short, self-contained sets table by table through the evening.",
  },
  {
    q: 'When is the best time for after dinner magic at a corporate dinner?',
    a: "Most event planners find between courses and immediately after the speeches work best. The room is settled and attentive, and the magic lands harder than it does during a standing drinks reception. I'll advise on timing once I know your running order.",
  },
  {
    q: 'How long do you perform for at a dinner event?',
    a: "Typically one to two hours, depending on the number of tables and how long your event is. I can do a pure after-dinner set or combine drinks reception magic with table sets - your call.",
  },
  {
    q: 'Do you need a stage, AV or any setup?',
    a: "None whatsoever. I need only a seat and the people around the table. No PA, no technical requirements, no briefing from the AV team.",
  },
  {
    q: 'How much does an after dinner magician cost?',
    a: "Fees typically range from £350 to £1,500 depending on duration, guest numbers, date and location. Get in touch and I'll send a clear, no-obligation quote.",
  },
  {
    q: 'Do you cover London and Surrey dinner events?',
    a: "Yes - I'm London-based and regularly perform at dinner events across London and Surrey. I also travel nationwide for the right event.",
  },
]

export default defineComponent({
  setup() {
    return { slots, events, faqs }
  },
  head() {
    return buildHead({
      title: 'After Dinner Magician London & Surrey | Close-Up Table Magic | Callum McClure',
      description:
        'Award-winning after dinner magician for corporate gala dinners, charity balls, awards evenings and wedding breakfasts in London & Surrey. Magic Circle member. Get a quote.',
      path: '/after-dinner-magician',
      jsonLd: [
        service(
          'After Dinner Magician',
          'After Dinner Magician London & Surrey',
          '/after-dinner-magician'
        ),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([{ name: 'After Dinner Magician', item: '/after-dinner-magician' }]),
      ],
    })
  },
})
</script>
