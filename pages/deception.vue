<template>
  <v-row>
    <v-col>
      <heading-section
        title="Callum McClure: Deception"
        subtitle="The Modern Technology and Magic Show"
      />
      <v-container py-12>
        <v-row justify="space-between">
          <v-col cols="12">
            <v-alert dark prominent class="text-h5" color="primary">
              <v-icon left>mdi-ticket</v-icon>
              <span>Callum McClure: Deception was a sell out show</span>
            </v-alert>
          </v-col>
          <v-col :cols="12" :md="6">
            <v-row>
              <v-col class="text-h4" cols="12">
                Deception: A unique blend of classic magic, technology and
                robotics
              </v-col>
              <v-col cols="12"> 5th - 15th August 2017 - 8.10pm (1h)</v-col>
              <v-col cols="12">
                Combining classic magic with a modern and technological twist,
                this brand new show is magic as you have never seen before.
                Callum's highly acclaimed sleight of hand, combined with over a
                decade of performing in the UK's most prestigious venues, has
                him well-known for his professional and personal magic. From
                performing at weddings to The Royal Variety Performance after
                show party, Mayoral events to multi-national corporate events,
                his dexterity with coins and cards are second to none.
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="12" class="text-h5">Press</v-col>
                  <v-col cols="12">
                    <v-btn
                      color="primary"
                      target="_blank"
                      href="https://www.bbc.co.uk/news/newsbeat-40847482"
                    >
                      <v-icon left>mdi-newspaper</v-icon>
                      <span>BBC NewsBeat Article</span>
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      color="primary"
                      target="_blank"
                      href="https://broadwaybaby.com/shows/callum-mcclure-deception/723484"
                    >
                      <v-icon left>mdi-newspaper</v-icon>
                      <span>Broadway Baby</span>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>

              <!-- Instagram images grid -->
              <v-col cols="12">
                <v-row>
                  <v-col cols="12" class="text-h5">Instagram</v-col>
                  <v-col cols="12">
                    <v-row>
                      <v-col cols="4">
                        <v-img :src="require('@/static/DeceptionSquare.png')" />
                      </v-col>
                      <v-col cols="4">
                        <v-img
                          :src="require('@/static/RoyalMileFlyering.jpg')"
                        />
                      </v-col>
                      <v-col cols="4">
                        <v-img
                          :src="require('@/static/CloseUpPerformance.jpg')"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-img
              :src="require('@/static/CallumMcClureDeceptionPoster.jpg')"
            />
          </v-col>
          <v-col :cols="12">
            <v-row>
              <v-row>
                <v-col cols="12" class="text-h5">With thanks to:</v-col>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="auto">
                      <div>Blackfish Productions</div>
                      <a href="https://www.blackfishproductions.co.uk/">
                        <v-img
                          :src="require('@/static/BlackFishProductions.png')"
                          class="thanks-logo"
                        />
                      </a>
                    </v-col>
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

<style>
.thanks-logo,
.instagram-grid-image {
  max-width: 150px;
  max-height: 150px;
}
</style>
