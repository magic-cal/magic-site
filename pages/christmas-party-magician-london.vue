<template>
  <div>
    <page-hero
      src="/action.jpg"
      alt="Magician Callum McClure catching a playing card in mid-air on stage" position="center 25%">
          <div>
            <h1 class="display-2 mb-4 white--text">Christmas Party Magician in London</h1>
            <p class="headline mb-6 white--text">
              London-based close-up magician for corporate Christmas parties, works nights
              out and private festive celebrations across the capital. Magic Circle member.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Check London Christmas Availability
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              I'm Callum McClure - a <strong>London Christmas party magician</strong>
              and member of The Magic Circle. I'm based in the capital and perform at
              London Christmas parties year-round, from City hotel ballrooms and Mayfair
              venues to private members' clubs in Soho and riverside spaces on the Southbank.
            </p>
            <p class="body-1 black--text">
              Close-up magic is the most flexible entertainment you can add to a London
              Christmas party: no stage, no PA, no setup - just sleight of hand that
              happens in your guests' own hands, in the room you're already in. I've
              performed for multi-national companies at London venues, at the
              <strong>Royal Variety Performance after-show party</strong>, and on
              <strong>BBC News</strong>.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">London Christmas party venues</h2>
            <p class="body-1 black--text mb-4">
              I perform at Christmas parties all across London - these are some of the
              areas and venue types I cover regularly:
            </p>
            <v-list color="transparent">
              <v-list-item v-for="venue in venues" :key="venue.area">
                <v-list-item-icon><v-icon color="accent">mdi-map-marker</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ venue.area }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ venue.detail }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-6 black--text">Corporate Christmas parties in London</h2>
            <p class="body-1 black--text">
              London's corporate Christmas season runs hard from late November to
              mid-December and every kind of event benefits from a magician: large
              all-company parties at Grosvenor House or the Battersea Evolution, mid-size
              team nights out at restaurants and bars, client dinners in private dining
              rooms, and smaller department celebrations.
            </p>
            <p class="body-1 black--text">
              As a <nuxt-link to="/corporate-magician">corporate magician</nuxt-link>
              I understand what companies need from entertainment: someone who arrives on
              time, integrates seamlessly with the evening's programme, and makes every
              guest feel like part of something - not just a spectator.
            </p>
            <p class="body-1 black--text">
              For more on all the Christmas party events I cover, see my
              <nuxt-link to="/christmas-party-magician">main Christmas party magician page</nuxt-link>.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">Book early - London December fills fast</h2>
            <p class="body-1 black--text">
              London Christmas party season is the most competitive period of the year for
              professional entertainers. Fridays and Saturdays in December are usually
              fully booked by October. Mid-week dates have slightly more availability.
              If you're planning a Christmas party in London, the sooner you get in touch
              the better your chance of securing your preferred date.
            </p>
            <div class="text-center mt-8">
              <v-btn outlined color="accent" nuxt to="/contact">
                Enquire About Your London Christmas Party
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
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Get a Quote for My London Christmas Party
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
              <nuxt-link to="/christmas-party-magician">Christmas party magician</nuxt-link> ·
              <nuxt-link to="/corporate-magician">Corporate magician</nuxt-link> ·
              <nuxt-link to="/areas/london">Magician in London</nuxt-link> ·
              <nuxt-link to="/party-magician">Party magician</nuxt-link>
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
import { service, faqPage, breadcrumb, localBusiness } from '~/utils/schema'

const venues = [
  {
    area: 'City & Canary Wharf',
    detail:
      'Financial sector Christmas parties at City hotels, private dining rooms and rooftop venues.',
  },
  {
    area: 'Mayfair & West End',
    detail:
      'Luxury hotel ballrooms, private members clubs and West End restaurants hosting corporate Christmas dinners.',
  },
  {
    area: 'Southbank & Waterloo',
    detail:
      'Riverside venues and event spaces popular with media and tech companies for large Christmas parties.',
  },
  {
    area: 'Soho & Fitzrovia',
    detail:
      'Creative agency parties, smaller company celebrations and private dining rooms across central London.',
  },
  {
    area: 'East London & Shoreditch',
    detail:
      'Tech company Christmas parties, warehouse venues and private hires in east London.',
  },
  {
    area: 'North & South London',
    detail:
      'From Islington and Camden to Brixton and Greenwich - I cover all of London.',
  },
]

const faqs = [
  {
    q: 'Are you based in London?',
    a: "Yes - I'm London-based and perform at London events regularly. No travel surcharge applies for London venues.",
  },
  {
    q: 'How early should I book for a London Christmas party?',
    a: "December Fridays and Saturdays in London typically book up by September or October. I'd recommend getting in touch as soon as you have a date confirmed - even if the venue isn't finalised, I can provisionally hold your date.",
  },
  {
    q: 'What size of London Christmas party do you cover?',
    a: 'I perform at everything from intimate team dinners of 15 people to large company parties of 300+. Close-up magic scales naturally: for smaller groups the experience is more personal; for larger parties I work through the room systematically.',
  },
  {
    q: 'Can you perform at a London Christmas party at short notice?',
    a: "It depends on the date. Mid-week December dates and November Christmas parties often have more availability than weekend dates. Get in touch and I'll let you know immediately.",
  },
  {
    q: 'Do you perform at works Christmas nights out or just big corporate events?',
    a: "Both. Works nights out - 20 or 30 people at a restaurant - are some of my favourite gigs. The magic is more personal and the reaction is fantastic. I also perform at large all-company events with hundreds of guests.",
  },
]

export default defineComponent({
  setup() {
    return { venues, faqs }
  },
  head() {
    return buildHead({
      title: 'Christmas Party Magician London | Callum McClure',
      description:
        "London-based close-up magician for Christmas parties - corporate works dos, private dinners and venue celebrations across the capital. Magic Circle member. Check availability.",
      path: '/christmas-party-magician-london',
      jsonLd: [
        service(
          'Christmas Party Magician London',
          'Christmas Party Magician in London',
          '/christmas-party-magician-london'
        ),
        localBusiness({ areaServed: 'London', idSuffix: 'christmas-london' }),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([
          { name: 'Christmas Party Magician London', item: '/christmas-party-magician-london' },
        ]),
      ],
    })
  },
})
</script>
