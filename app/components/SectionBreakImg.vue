<template>
  <v-row>
    <v-col class="text-center magic-circle-logo">
      <v-img
        :style="imageStyle"
        src="/the-magic-circle.png"
        :width="size"
        :height="size"
        class="mx-auto"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: number }>(), { size: 100 })

const imageStyle = computed(() => ({
  marginTop: `-${props.size / 2}px`,
  marginBottom: `-${props.size / 2}px`,
}))
</script>
