<template>
  <v-row>
    <v-col>
      <heading-section
        title="Contact"
        subtitle="Enquire and check availability"
      />
      <v-container py-12>
        <v-row justify="space-between">
          <v-col
            :cols="auto"
            :md="4"
            :order="$vuetify.breakpoint.smAndDown ? 2 : 0"
          >
            <div class="eyebrow">Get in Touch</div>
            <h2 class="section-title mb-4">Let's make it magical</h2>
            <p class="contact-intro">
              For more information about Callum's performances, feel free to drop
              him a message or contact him on social media. He aims to reply to
              all enquiries within 24 hours.
            </p>

            <v-list class="contact-list" two-line color="transparent">
              <v-list-item href="tel:07481768042" class="px-0">
                <v-list-item-icon>
                  <v-icon color="accent">mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>Call</v-list-item-subtitle>
                  <v-list-item-title>07481 768042</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item href="mailto:info@magic-cal.co.uk" class="px-0">
                <v-list-item-icon>
                  <v-icon color="accent">mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>Email</v-list-item-subtitle>
                  <v-list-item-title>info@magic-cal.co.uk</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="px-0">
                <v-list-item-icon>
                  <v-icon color="accent">mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>Location</v-list-item-subtitle>
                  <v-list-item-title
                    >Based in Surrey &mdash; happy to travel</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <div class="contact-social">
              <v-btn
                icon
                color="accent"
                href="https://fb.me/MagicCal"
                target="_blank"
                aria-label="Facebook"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                color="accent"
                href="https://twitter.com/magic_cal"
                target="_blank"
                aria-label="Twitter"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.smAndDown" :cols="12" :order="1">
            <v-divider></v-divider>
          </v-col>

          <v-col
            :cols="12"
            :md="7"
            :order="$vuetify.breakpoint.smAndDown ? 0 : 2"
          >
            <contact-form />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.contact-intro {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.contact-list ::v-deep .v-list-item__subtitle {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.5) !important;
}

.contact-list ::v-deep .v-list-item__title {
  font-weight: 600;
  color: #1c1c22;
}

.contact-social {
  margin-top: 1rem;
}
</style>
