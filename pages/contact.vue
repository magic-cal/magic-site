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
            <v-row>
              <v-col>
                For more information about Callum's performances, feel free to
                drop him a message or contact him on social media. He aims to
                reply to all enquiries within 24 hours.
              </v-col>

              <v-col :cols="12">
                Call on: <a href="tel:07481768042">07481768042</a>
              </v-col>
              <v-col :cols="12">
                Email:
                <a href="mailto:info@magic-cal.co.uk ">info@magic-cal.co.uk </a>
              </v-col>
              <v-col :cols="12"> Based In Surrey and Happy to travel </v-col>
              <v-col :cols="12">
                Facebook: <a href="https://fb.me/MagicCal">fb.me/MagicCal</a>
              </v-col>
              <v-col :cols="12">
                Twitter:
                <a href="https://twitter.com/magic_cal">@Magic_Cal </a></v-col
              >
            </v-row>
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
