<template>
  <v-sheet color="grey darken-3" dark class="credentials-bar">
    <v-container>
      <v-row justify="center" align="center" class="py-4">
        <v-col
          v-for="cred in credentials"
          :key="cred.text"
          cols="12"
          sm="4"
          class="d-flex align-center justify-center py-2"
        >
          <v-img
            v-if="cred.logo"
            :src="cred.logo"
            contain
            :max-height="cred.logoHeight || 36"
            :max-width="cred.logoWidth || 36"
            class="mr-3 flex-grow-0"
          />
          <v-icon v-else small class="mr-2 accent--text">{{ cred.icon }}</v-icon>
          <span class="body-2 white--text">{{ cred.text }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const credentials = [
      {
        logo: require('@/static/the-magic-circle.png'),
        logoHeight: 40,
        logoWidth: 40,
        text: 'Member of The Magic Circle',
      },
      {
        icon: 'mdi-trophy',
        text: 'Multi-Award Winning Magician',
      },
      {
        icon: 'mdi-calendar-check',
        text: '10+ Years Professional Experience',
      },
    ]
    return { credentials }
  },
})
</script>

<style scoped>
.credentials-bar {
  border-top: 2px solid #b12827;
}
</style>
