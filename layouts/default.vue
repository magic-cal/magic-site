<template>
  <v-app dark>
    <app-bar />
    <v-main>
      <Nuxt />
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-footer :absolute="!fixed" app color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="accent lighten-1 py-4 text-center white--text" cols="12">
          <span>&copy; Callum McClure {{ new Date().getFullYear() }}</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
export default defineComponent({
  data() {
    const headerBarColour = computed(() => {
      console.log('scroll')
      return 'transparent'
    })

    return {
      headerBarColour,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact',
          to: '/contact',
        },
      ],
      // miniVariant: false,
      // right: true,
      // rightDrawer: false,
      title: 'Callum McClure Magician',
    }
  },
})
</script>

<style>
/* Stopping phantom side space */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (-o-min-device-pixel-ratio: 3/2),
  only screen and (min--moz-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
