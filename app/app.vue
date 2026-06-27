<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Global, structured data describing the business — helps search engines
// understand who Callum is and surface rich results.
useSchemaOrg([
  definePerson({
    name: 'Callum McClure',
    jobTitle: 'Magician',
    description:
      'Multi-award winning magician and member of The Magic Circle, specialising in close-up and stage magic for weddings, corporate events and parties.',
    sameAs: [
      'https://fb.me/MagicCal',
      'https://twitter.com/magic_cal',
    ],
  }),
  defineWebSite({ name: 'Callum McClure — Award-Winning Magician' }),
  defineWebPage(),
])
</script>
