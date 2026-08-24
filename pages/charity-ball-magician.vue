<template>
  <div>
    <page-hero src="/perf4.jpg" position="center 30%">
          <div>
            <h1 class="display-2 mb-4 white--text">Charity Ball Magician - London &amp; Surrey</h1>
            <p class="headline mb-6 white--text">
              Award-winning close-up magic for charity balls, fundraising galas and
              black tie charity dinners. Gets guests in the mood to give.
              Magic Circle member.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Enquire About Your Charity Ball
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              Charity balls and fundraising galas work best when the whole room is
              buzzing - and close-up magic is one of the most reliable ways to get
              there. It warms up a room faster than almost any other form of
              entertainment, gets strangers talking, and creates exactly the kind of
              generous, celebratory atmosphere that makes people open their wallets
              at the auction.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure - an award-winning close-up magician and member of
              <strong>The Magic Circle</strong>. I've performed at charity balls,
              fundraising dinners and gala evenings for a range of organisations
              across London and Surrey, from drinks reception right through to the
              post-auction celebrations.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">How I fit into a charity ball evening</h2>
            <v-list color="transparent">
              <v-list-item v-for="slot in slots" :key="slot.title">
                <v-list-item-icon><v-icon color="accent">mdi-check-circle</v-icon></v-list-item-icon>
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
            <h2 class="display-1 mb-4 black--text">Magic that supports your fundraising goals</h2>
            <p class="body-1 black--text">
              A charity ball needs a warm, generous room. When guests arrive, they're
              often a mix of donors, volunteers and supporters who may not know each
              other well. Close-up magic breaks that down within minutes: shared
              astonishment is a powerful social glue, and people who've just seen
              something wonderful together are much more likely to bid generously at
              the auction.
            </p>
            <p class="body-1 black--text">
              I can also work the room between the auction lots - keeping energy and
              attention high during the waiting periods that inevitably happen at
              charity ball fundraising events.
            </p>
            <p class="body-1 black--text">
              See also:
              <nuxt-link to="/gala-dinner-magician">gala dinner magician</nuxt-link>,
              <nuxt-link to="/awards-ceremony-magician">awards ceremony magician</nuxt-link>,
              <nuxt-link to="/after-dinner-magician">after dinner magician</nuxt-link>.
            </p>
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Get a Quote for Your Charity Ball
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
    title: 'Pre-dinner drinks & canapés',
    detail:
      "Walk-around magic as guests arrive - breaks the ice between donors, supporters and volunteers who may not all know each other.",
  },
  {
    title: 'Between courses at dinner',
    detail:
      'Table magic that keeps the room energised and the mood generous ahead of the auction.',
  },
  {
    title: 'During the silent auction',
    detail:
      "While guests browse the auction lots, I move through the room - filling the natural lull and keeping people in a celebratory mood.",
  },
  {
    title: 'Post-live-auction celebration',
    detail:
      "After the bidding closes and winners are announced, close-up magic extends the high and keeps people on the floor.",
  },
]

const faqs = [
  {
    q: 'Is close-up magic right for a charity ball?',
    a: "It's one of the best choices. Close-up magic warms up a room fast - it gets strangers laughing and talking together, which creates the generous, celebratory atmosphere that makes charity balls work. It also fills the gaps in the programme naturally without requiring a compere or stage act.",
  },
  {
    q: 'Can you time your performance around the auction?',
    a: "Absolutely. I work around your programme. The drinks reception and the gaps during silent auction browsing are ideal slots. I can also perform between courses if there's a live auction later in the evening.",
  },
  {
    q: 'How much does a charity ball magician cost?',
    a: "Fees range from £350 to £1,500 depending on duration, guest numbers, date and location. Many charities book me for a combined drinks + dinner slot. Get in touch and I'll give you a clear no-obligation quote.",
  },
  {
    q: 'Do you offer charity discounts?',
    a: "Get in touch and tell me about your event - I'm always happy to have a conversation about registered charities and causes I'd like to support.",
  },
  {
    q: 'Where do you cover charity balls?',
    a: "I perform at charity balls across London and Surrey, as well as the wider South East. I'm based in London and happy to travel.",
  },
]

export default defineComponent({
  setup() {
    return { slots, faqs }
  },
  head() {
    return buildHead({
      title: 'Charity Ball Magician London & Surrey | Fundraising Gala Entertainment | Callum McClure',
      description:
        'Award-winning close-up magician for charity balls and fundraising galas in London & Surrey. Warms up the room and supports your auction. Magic Circle member. Get a quote.',
      path: '/charity-ball-magician',
      jsonLd: [
        service(
          'Charity Ball Magician',
          'Charity Ball Magician London & Surrey',
          '/charity-ball-magician'
        ),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([{ name: 'Charity Ball Magician', item: '/charity-ball-magician' }]),
      ],
    })
  },
})
</script>
