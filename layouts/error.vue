<template>
  <v-app dark>
    <template v-if="error.statusCode === 404">
      <h1>
        {{ pageNotFound }}
      </h1>
    </template>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    const meta = [
      {
        httpEquiv: 'refresh',
        content: "0;URL='https://www.magic-cal.co.uk'",
      },
    ]
    return {
      title,
      meta,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
