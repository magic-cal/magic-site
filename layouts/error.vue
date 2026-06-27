<template>
  <v-app dark>
    <v-main class="error-bg">
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center">
            <v-icon size="64" color="rgb(228, 186, 93)"
              >mdi-cards-playing-outline</v-icon
            >
            <div class="error-code">
              {{ error.statusCode === 404 ? '404' : 'Oops' }}
            </div>
            <h1 class="error-title">
              {{ error.statusCode === 404 ? pageNotFound : otherError }}
            </h1>
            <p class="error-text">
              The page you were looking for has vanished. Let's get you back to
              the magic.
            </p>
            <v-btn large color="accent" depressed to="/" nuxt>
              Return Home
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
      pageNotFound: 'Page Not Found',
      otherError: 'Something went wrong',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.error-bg {
  background:
    radial-gradient(ellipse at top, rgba(255, 255, 255, 0.05), transparent 60%),
    linear-gradient(135deg, #1c1c22 0%, #24242e 55%, #1a1a20 100%);
}
.error-code {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-size: clamp(4rem, 14vw, 8rem);
  line-height: 1;
  color: #fff;
  margin-top: 0.5rem;
}
.error-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: rgb(228, 186, 93);
  margin-bottom: 1rem;
}
.error-text {
  color: rgba(255, 255, 255, 0.75);
  max-width: 480px;
  margin: 0 auto 1.75rem;
  line-height: 1.7;
}
</style>
