<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" class="pa-0">
      <heading-section title="About" subtitle="A little bit about Callum" />
      <about-snippet />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Callum McClure',
  description:
    'Callum McClure is a multi-award winning magician and member of The Magic Circle with over a decade of experience performing close-up and stage magic.',
})
</script>
