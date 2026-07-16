<template>
  <div>
    <page-hero src="/action.jpg">
          <div>
            <h1 class="display-2 mb-4 white--text">Christmas Party Magician - London &amp; Surrey</h1>
            <p class="headline mb-6 white--text">
              Award-winning close-up magic for corporate Christmas parties, works nights
              out and private celebrations. Magic Circle member. 10+ years.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Check Christmas Availability
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              Christmas parties are the biggest event of most companies' year - and a
              <strong>Christmas party magician</strong> is the single addition that
              gets people off their phones, away from their cliques and actually talking
              to each other.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure - an award-winning close-up magician based in London,
              and a member of <strong>The Magic Circle</strong>. I specialise in
              mix-and-mingle close-up magic that works inches from your guests' eyes,
              with borrowed objects and no setup at all. For over a decade I've made
              corporate Christmas parties, works nights out and private festive
              celebrations genuinely memorable - from Mayfair hotel ballrooms to Surrey
              manor houses.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Why book a magician for your Christmas party?</h2>
            <v-list color="transparent">
              <v-list-item v-for="reason in reasons" :key="reason.title">
                <v-list-item-icon><v-icon color="accent">mdi-check-circle</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ reason.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ reason.detail }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-6 black--text">Christmas events I perform at</h2>
            <v-list color="transparent">
              <v-list-item v-for="ev in events" :key="ev.title">
                <v-list-item-icon><v-icon color="accent">mdi-snowflake</v-icon></v-list-item-icon>
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
            <h2 class="display-1 mb-4 black--text">London &amp; Surrey Christmas party venues</h2>
            <p class="body-1 black--text">
              I perform at <strong>Christmas parties in London</strong> regularly - from
              hotel ballrooms in the City and Mayfair to private members' clubs and
              riverside venues in Southbank and Canary Wharf. For Surrey Christmas
              parties, I know venues like <strong>Pennyhill Park</strong>,
              <strong>Wotton House</strong> and <strong>Loseley Park</strong> well, and
              cover the full corridor from Guildford and Woking through to the capital.
            </p>
            <p class="body-1 black--text">
              Looking specifically for a
              <nuxt-link to="/christmas-party-magician-london">Christmas party magician in London</nuxt-link>?
              See my dedicated London Christmas page.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">What to expect</h2>
            <p class="body-1 black--text">
              I arrive early, need no stage, no setup and no AV. During your drinks
              reception or dinner I move table to table and group to group - the magic
              happens in people's own hands with borrowed objects. Routines are
              self-contained, so I can dip in and out of conversations without ever
              interrupting the programme.
            </p>
            <p class="body-1 black--text">
              For most corporate Christmas parties I perform for 1.5 to 3 hours
              depending on guest numbers. I'll advise on timing when you get in touch.
              Branded and bespoke Christmas routines are also available for larger
              events - see my
              <nuxt-link to="/corporate-magician">corporate magician page</nuxt-link>
              for more.
            </p>
            <div class="text-center mt-8">
              <v-btn outlined color="accent" nuxt to="/contact">
                Get a Christmas Quote
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">How much does a Christmas party magician cost?</h2>
            <p class="body-1 black--text">
              Christmas party magicians typically cost between <strong>£350 and £1,500</strong>
              depending on the duration, number of guests, and your event date and location.
              December dates book up fast - I'd recommend enquiring by October to secure
              your preferred slot.
            </p>
            <p class="body-1 black--text">
              <nuxt-link to="/blog/how-much-does-a-wedding-magician-cost">
                Read the full magician pricing guide
              </nuxt-link>
            </p>
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
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Check My Availability
              </v-btn>
            </div>
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
              <nuxt-link to="/corporate-magician">Corporate magician for hire</nuxt-link> ·
              <nuxt-link to="/party-magician">Party magician</nuxt-link> ·
              <nuxt-link to="/areas/london">Magician in London</nuxt-link> ·
              <nuxt-link to="/areas/surrey">Magician in Surrey</nuxt-link>
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

const reasons = [
  {
    title: 'Breaks the ice immediately',
    detail:
      "People who've never met - or who only know each other from Zoom - relax and laugh together within minutes. Magic gives everyone an easy reason to talk.",
  },
  {
    title: 'Works with any format',
    detail:
      'Standing drinks reception, seated dinner, or a mix of both - close-up magic adapts to however your party is running without any staging or setup.',
  },
  {
    title: 'Memorable, not just entertaining',
    detail:
      'Your team will be talking about it on Monday morning. A great Christmas party gets remembered; a magician is the difference between "it was fine" and "did you see that?"',
  },
  {
    title: 'No stage, no fuss, no AV',
    detail:
      'I need nothing from the venue. Just space to move among your guests. That makes booking and logistics completely straightforward.',
  },
]

const events = [
  {
    title: 'Corporate Christmas parties',
    detail:
      'The full company event - drinks reception through to dinner and dancing. I typically perform during drinks and the first part of the evening.',
  },
  {
    title: 'Works Christmas nights out',
    detail:
      'Smaller department or team nights out where the magic creates a shared experience for the whole group.',
  },
  {
    title: 'Client Christmas dinners',
    detail:
      'Impress clients at private dinners with sleight of hand that happens right in their hands. Leaves a lasting impression that no gift will match.',
  },
  {
    title: 'Christmas private parties',
    detail:
      'Family and friends Christmas celebrations, festive birthdays and private home events.',
  },
]

const faqs = [
  {
    q: 'How far in advance should I book a Christmas party magician?',
    a: "December weekends fill up quickly - often by September or October. If you're planning a November or early December event you may have more flexibility, but I'd always recommend booking as early as possible to secure your date.",
  },
  {
    q: 'How long do you perform at a Christmas party?',
    a: 'Typically one to three hours depending on guest numbers and how your event is structured. For most corporate Christmas parties, two hours of mix-and-mingle magic covers a drinks reception and the early part of dinner comfortably.',
  },
  {
    q: 'Do you perform at works Christmas parties as well as large corporate events?',
    a: 'Absolutely. I perform at everything from team nights out of 20 people to company-wide events of 300+. The magic scales: for smaller groups I can give everyone a longer, more personal experience.',
  },
  {
    q: 'Can you do Christmas-themed magic?',
    a: "I have routines that work especially well at festive events - and I can tailor the performance to the occasion. It's still close-up sleight of hand rather than props and costumes, but it lands perfectly at Christmas parties.",
  },
  {
    q: 'Do you cover London and Surrey Christmas parties?',
    a: "Yes. I'm based in London and perform regularly across the capital and across Surrey. I also travel further for the right event.",
  },
  {
    q: 'How much does a Christmas party magician cost?',
    a: "Fees typically range from £350 to £1,500 depending on duration, guest numbers, date and location. Get in touch and I'll send you a clear, no-obligation quote.",
  },
]

export default defineComponent({
  setup() {
    return { reasons, events, faqs }
  },
  head() {
    return buildHead({
      title: 'Christmas Party Magician London & Surrey | Corporate Christmas Entertainment | Callum McClure',
      description:
        'Award-winning close-up magician for corporate Christmas parties, works nights out and private celebrations in London & Surrey. Magic Circle member. Check availability.',
      path: '/christmas-party-magician',
      jsonLd: [
        service(
          'Christmas Party Magician',
          'Christmas Party Magician London & Surrey',
          '/christmas-party-magician'
        ),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([
          { name: 'Christmas Party Magician', item: '/christmas-party-magician' },
        ]),
      ],
    })
  },
})
</script>
