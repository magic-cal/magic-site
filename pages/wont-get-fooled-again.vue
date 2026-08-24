<template>
  <v-row>
    <v-col>
      <heading-section
        title="Callum McClure: Won't Get Fooled Again"
        subtitle="Classic Magic Meets Modern Technology"
      />
      <v-container py-12>
        <v-row justify="space-between">
          <v-col cols="12">
            <v-alert dark prominent class="text-h5" color="primary">
              <v-icon left>mdi-ticket</v-icon>
              <span>No need to book - just turn up! Free entry, though the artist may ask for a donation at the end.</span>
            </v-alert>
          </v-col>
          <v-col :cols="12" :md="6">
            <v-row>
              <v-col cols="12">
                <v-chip small color="primary" dark class="mr-2">In-Person</v-chip>
                <v-chip small color="accent" dark>Magic</v-chip>
              </v-col>
              <v-col class="text-h4" cols="12">
                Classic magic enters the 21st century
              </v-col>
              <v-col cols="12">
                The impossible, made modern. Award-winning magician Callum
                McClure blends technology and timeless sleight of hand to
                create unforgettable moments and unexpected twists.
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="12" class="text-h5">Show Details</v-col>
                  <v-col cols="12" sm="6">
                    <v-icon left>mdi-clock-outline</v-icon>
                    <strong>Time:</strong> 14:45 - 15:35
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-icon left>mdi-calendar</v-icon>
                    <strong>Dates:</strong> 8th - 12th August 2026
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-icon left>mdi-map-marker</v-icon>
                    <strong>Venue:</strong>
                    <a
                      href="https://www.thevoodoorooms.com/"
                      target="_blank"
                      rel="noopener"
                      >The Voodoo Rooms</a
                    >
                    - Ballroom (venue 68)
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-icon left>mdi-account-alert</v-icon>
                    <strong>Venue Restriction:</strong> 18 years+
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-img :src="require('@/static/perf3.jpg')" />
          </v-col>

          <v-col :cols="12">
            <v-row>
              <v-row>
                <v-col cols="12" class="text-h5">With thanks to:</v-col>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="auto">
                      <div>PBH Free Fringe</div>
                      <a href="https://freefringe.org.uk/">
                        <v-img
                          :src="require('@/static/PBHFreeFringeLogo.jpg')"
                          class="thanks-logo"
                        />
                      </a>
                    </v-col>
                    <v-col cols="auto">
                      <div>The Voodoo Rooms</div>
                      <a href="https://www.thevoodoorooms.com/">
                        <v-img
                          :src="require('@/static/VoodooRoomsLogo.jpg')"
                          class="thanks-logo"
                        />
                      </a>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { buildHead } from '~/utils/seo'
import { breadcrumb } from '~/utils/schema'

export default defineComponent({
  head() {
    return buildHead({
      title: "Callum McClure: Won't Get Fooled Again | Edinburgh Fringe Magic Show",
      description:
        'Classic magic enters the 21st century. Award-winning magician Callum McClure blends technology and timeless sleight of hand at The Voodoo Rooms, Edinburgh. Free entry, no booking required.',
      path: '/wont-get-fooled-again',
      jsonLd: [
        breadcrumb([{ name: "Won't Get Fooled Again", item: '/wont-get-fooled-again' }]),
      ],
    })
  },
})
</script>

<style>
.thanks-logo,
.instagram-grid-image {
  max-width: 150px;
  max-height: 150px;
}
</style>
