<template>
  <v-sheet :color="color" class="text-center mt-0">
    <v-row>
      <v-col cols="12">
        <h3 class="text-accent py-8 text-h5">
          {{ title }}
        </h3>
      </v-col>
    </v-row>
    <v-row class="mx-auto pb-8" justify="center" align="center">
      <v-col v-for="logo in logos" :key="logo.src" cols="2" sm="1">
        <v-img :src="logo.src" :alt="logo.alt" max-height="90px" contain eager />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
export interface ImageItem {
  alt?: string
  src: string
  hideOnXs?: boolean
}

withDefaults(
  defineProps<{
    title: string
    color?: string
    logos?: ImageItem[]
  }>(),
  { color: 'primary', logos: () => [] }
)
</script>
