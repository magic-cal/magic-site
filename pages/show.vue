<template>
  <div />
</template>

<script lang="ts">
import Vue from 'vue'
import { SITE_URL } from '~/utils/constants'

const TARGET = '/wont-get-fooled-again'

export default Vue.extend({
  head(): any {
    return {
      title: 'Redirecting...',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' },
        { hid: 'refresh', 'http-equiv': 'refresh', content: `0; url=${TARGET}` },
      ],
      link: [{ hid: 'canonical', rel: 'canonical', href: `${SITE_URL}${TARGET}` }],
    }
  },
  mounted() {
    this.$router.replace(TARGET)
  },
})
</script>
