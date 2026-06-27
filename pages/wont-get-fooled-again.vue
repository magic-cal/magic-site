<template>
  <div>
    <v-sheet color="grey darken-4" dark class="py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <p class="overline accent--text mb-2">Edinburgh Festival Fringe</p>
            <h1 class="display-2 mb-4">Callum McClure: Won't Get Fooled Again</h1>
            <p class="headline mb-6">
              A brand-new magic show where the oldest tricks in the book collide
              with artificial intelligence and virtual reality. Classic magic,
              dragged into the 21st century.
            </p>
            <v-btn
              x-large
              color="accent"
              dark
              href="https://freefringe.org.uk/shows/callum-mcclure-wont-get-fooled-again/"
              target="_blank"
              rel="noopener"
            >
              <v-icon left>mdi-ticket</v-icon>
              Show Listing &amp; Free Tickets
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Show details — please confirm venue / dates / times -->
    <v-sheet color="accent" dark class="py-4">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" md="8">
            <v-row justify="space-around" class="text-center">
              <v-col cols="6" sm="3">
                <v-icon>mdi-calendar</v-icon>
                <div class="font-weight-bold">{{ details.dates }}</div>
              </v-col>
              <v-col cols="6" sm="3">
                <v-icon>mdi-clock-outline</v-icon>
                <div class="font-weight-bold">{{ details.time }}</div>
              </v-col>
              <v-col cols="6" sm="3">
                <v-icon>mdi-map-marker</v-icon>
                <div class="font-weight-bold">{{ details.venue }}</div>
              </v-col>
              <v-col cols="6" sm="3">
                <v-icon>mdi-cash</v-icon>
                <div class="font-weight-bold">{{ details.price }}</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              The cups and balls are two thousand years old. The linking rings
              date back centuries. A force, a switch, a vanish — magicians have
              been fooling audiences with the same beautiful principles since
              long before anyone owned a phone. So here's the question
              <em>Won't Get Fooled Again</em> sets out to answer: in an age of
              deepfakes, machine learning and headsets that rebuild reality from
              scratch, can the old magic still get you?
            </p>
            <p class="body-1 black--text">
              It can. I'm Callum McClure — a member of The Magic Circle with
              over a decade of sleight of hand behind me — and this show is what
              happens when I take the classics I grew up on and rewire them with
              the tools of today. The methods are honest-to-goodness magic. The
              wrapping is pure 21st century.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">
              Classic effects, 21st-century twist
            </h2>
            <v-list color="transparent">
              <v-list-item v-for="bit in highlights" :key="bit.title">
                <v-list-item-icon>
                  <v-icon color="accent">{{ bit.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="black--text font-weight-bold"
                  >{{ bit.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{
                    bit.detail
                  }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-4 black--text">
              When the machine becomes the magician
            </h2>
            <p class="body-1 black--text">
              We've spent the last few years being told that artificial
              intelligence can write, draw, predict and decide for us. In
              <em>Won't Get Fooled Again</em> I hand it a deck of cards. What
              happens when an algorithm is invited to read your mind — and gets
              it impossibly, unnervingly right? You'll find out, and you'll spend
              the walk home trying to work out whether you were fooled by the
              technology or by the man holding the cards.
            </p>
            <p class="body-1 black--text">
              Then there's the headset. Slip into virtual reality and the rules
              of the room stop applying — except the magic still does. A signed
              card that travels from a real hand into a virtual one. A vanish
              with nowhere left to hide. It's the impossible, rebuilt for a
              world that thought it had seen everything.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="display-1 mb-4 black--text">
              Edinburgh Festival Fringe — free entry
            </h2>
            <p class="body-1 black--text">
              <em>Won't Get Fooled Again</em> is part of PBH's Free Fringe: there's
              no ticket price, you simply turn up, and you decide what it was
              worth on the way out. Seats go fast, so arrive early.
            </p>
            <v-btn
              x-large
              color="accent"
              dark
              class="mt-4"
              href="https://freefringe.org.uk/shows/callum-mcclure-wont-get-fooled-again/"
              target="_blank"
              rel="noopener"
            >
              <v-icon left>mdi-open-in-new</v-icon>
              View the Free Fringe Listing
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Good to know</h2>
            <v-expansion-panels light>
              <v-expansion-panel v-for="faq in faqs" :key="faq.q">
                <v-expansion-panel-header
                  class="black--text font-weight-bold"
                >{{ faq.q }}</v-expansion-panel-header>
                <v-expansion-panel-content class="black--text">{{
                  faq.a
                }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey darken-4" dark class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="display-1 mb-4">Book Callum for your own event</h2>
            <p class="body-1">
              Loved the show, or can't make it to Edinburgh? Callum performs
              close-up and technology-driven magic at weddings, corporate events
              and parties across London, Surrey and the South East.
            </p>
            <v-btn x-large color="accent" dark nuxt to="/contact" class="mt-4">
              Check Availability
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { buildHead } from '~/utils/seo'
import { theaterEvent, faqPage, breadcrumb } from '~/utils/schema'

// TODO: confirm these with the Free Fringe listing once published.
const details = {
  dates: 'Aug 2026 (TBC)',
  time: 'Time TBC',
  venue: 'Venue TBC',
  price: 'Free entry',
}

const highlights = [
  {
    icon: 'mdi-cards-playing-outline',
    title: 'Card magic, reborn',
    detail:
      'The plots that have fooled audiences for generations, rebuilt with technology your grandparents never dreamed of.',
  },
  {
    icon: 'mdi-robot-outline',
    title: 'An AI that reads minds',
    detail:
      'Hand a thought to a machine and watch it answer back. Mentalism for the age of the algorithm.',
  },
  {
    icon: 'mdi-virtual-reality',
    title: 'Magic in virtual reality',
    detail:
      'Step into a headset where the impossible has nowhere left to hide — and the magic happens anyway.',
  },
  {
    icon: 'mdi-hand-back-right-outline',
    title: 'Old-school sleight of hand',
    detail:
      'Underneath every gadget is genuine, hard-won close-up technique from a Magic Circle member.',
  },
]

const faqs = [
  {
    q: 'How much does it cost?',
    a: "It's a Free Fringe show, so there's no ticket price. Entry is free and there's a bucket collection at the end — give what you thought it was worth.",
  },
  {
    q: 'Do I need to book in advance?',
    a: 'Entry is first come, first served. Popular shows fill up, so it\'s worth arriving a little early to be sure of a seat.',
  },
  {
    q: 'Is the show suitable for all ages?',
    a: "It's a fun, family-friendly hour of magic with a technological twist — enjoyable whether you're eight or eighty.",
  },
  {
    q: 'Do I need to know anything about AI or VR to enjoy it?',
    a: "Not at all. The technology is there to amaze you, not to test you. If you've ever been fooled by a card trick, you'll love it.",
  },
]

export default defineComponent({
  setup() {
    return { details, highlights, faqs }
  },
  head() {
    return buildHead({
      title: "Callum McClure: Won't Get Fooled Again | AI & VR Magic Show",
      description:
        "Won't Get Fooled Again — Callum McClure's new Edinburgh Festival Fringe show, blending classic magic with artificial intelligence and virtual reality. Free entry.",
      path: '/wont-get-fooled-again',
      ogType: 'article',
      jsonLd: [
        theaterEvent({
          name: "Callum McClure: Won't Get Fooled Again",
          description:
            'A new magic show updating classic effects with artificial intelligence and virtual reality, at the Edinburgh Festival Fringe.',
          url: '/wont-get-fooled-again',
          venueLocality: 'Edinburgh',
          isFree: true,
        }),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([
          { name: "Won't Get Fooled Again", item: '/wont-get-fooled-again' },
        ]),
      ],
    })
  },
})
</script>
