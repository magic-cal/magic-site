<template>
  <v-sheet class="pa-12 header-sheet">
    <v-container>
      <v-row>
        <v-col cols="12" class="py-12">
          <h1 class="text-h3">
            {{ title }}
          </h1>
          <div v-if="subtitle" class="text-accent">
            {{ subtitle }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<style lang="scss" scoped>
.header-sheet {
  background-color: #eaeaea;
}
</style>
