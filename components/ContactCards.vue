<template>
  <v-row id="contact">
    <v-col :cols="12">
      <h2 class="accent--text display-1">Contact Me</h2>
    </v-col>
    <v-col :cols="12" :md="6">
      <v-card light>
        <v-col>
          For more information about Callum's performances, feel free to drop
          him a message or contact him on social media. He aims to reply to all
          enquiries within 24 hours.
        </v-col>

        <v-col :cols="12">
          Call on: <a href="tel:+447481768042">07481 768042</a>
        </v-col>
        <v-col :cols="12">
          Email:
          <a href="mailto:info@magic-cal.co.uk">info@magic-cal.co.uk</a>
        </v-col>
        <v-col :cols="12">
          Based in London - available across Surrey, Guildford &amp; the South East
        </v-col>
        <v-col :cols="12">
          Facebook: <a href="https://fb.me/MagicCal">fb.me/MagicCal</a>
        </v-col>
        <v-col :cols="12">
          Instagram:
          <a href="https://www.instagram.com/mcclure_magic/">@mcclure_magic</a></v-col
        >
      </v-card>
    </v-col>
    <v-col :cols="12" :md="6">
      <v-card light>
        <v-card-title>Contact</v-card-title>
        <v-card-text>
          <enquiry-form />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
