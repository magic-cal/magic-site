<template>
  <v-app>
    <app-bar />
    <v-main>
      <slot />
    </v-main>

    <v-footer color="primary" class="pa-0">
      <v-row justify="center" no-gutters>
        <v-col class="bg-accent py-4 text-center text-white" cols="12">
          <span>&copy; Callum McClure {{ new Date().getFullYear() }}</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style>
/* Stop phantom horizontal space on high-DPI screens */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-resolution: 144dpi) {
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
