<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
      <v-parallax id="dim" class="hero" :src="require('@/static/shuffle-cropped1.jpg')">
        <v-container class="hero-content fill-height">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" md="10" class="text-center">
              <div class="hero-eyebrow">Award-Winning Close-Up Magician</div>
              <h1 class="hero-title">Callum McClure</h1>
              <div class="hero-sub">
                Multi-Award Winning Magician &middot; Member of The Magic Circle
              </div>
              <div class="hero-badges">
                <span class="hero-badge">The Magic Circle</span>
                <span class="hero-badge">Multi-Award Winning</span>
                <span class="hero-badge">10+ Years Experience</span>
              </div>
              <div class="hero-cta">
                <v-btn large color="accent" depressed @click="goToContact">
                  Check Availability
                </v-btn>
                <v-btn large outlined color="white" @click="goToServices">
                  Explore the Magic
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
      <section-break-img :size="125" />
      <about-snippet />
      <card-reveal />

      <company-carousel
        title="Some of the Companies Callum has performed for"
        :logos="companyLogos"
        color="white"
      />
      <services-section
        id="services"
        title="Which Style of Magic"
        :services="services"
      />
      <faqs-section />

      <contact-section />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    const goToContact = () => scrollTo('contact')
    const goToServices = () => scrollTo('services')

    const companyLogos = [
      {
        src: require('@/static/Raddison.png'),
        alt: 'Raddison Logo',
        hideOnXs: true,
      },
      { src: require('@/static/BBC.jpg'), alt: 'BBC Logo', hideOnXs: false },
      {
        src: require('@/static/Barclays.png'),
        alt: 'Barclays Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Disney.png'),
        alt: 'Disney Logo',
        hideOnXs: true,
      },
      {
        src: require('@/static/Independent.png'),
        alt: 'The Independent Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Age-UK.jpg'),
        alt: 'AgeUk Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Marriott.png'),
        alt: 'Marriott Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/Lloyds.png'),
        alt: 'Lloyds Logo',
        hideOnXs: false,
      },
      {
        src: require('@/static/GLive.jpg'),
        alt: 'GLive Logo',
        hideOnXs: true,
      },
      { src: require('@/static/Btg.jpg'), alt: 'BTG Logo', hideOnXs: true },
      {
        src: require('@/static/CAM.jpg'),
        alt: 'Cambridge Logo',
        hideOnXs: true,
      },
      {
        src: require('@/static/Arqiva.jpg'),
        alt: 'Arqiva Logo',
        hideOnXs: true,
      },
    ]

    const services = [
      {
        src: require('@/static/square/corporate.jpg'),
        alt: 'Magic Corporate',
        hideOnXs: false,
        details:
          'Magic that is right there, in front of your eyes. A personal, entertaining style of magic for small groups or tables',
        href: '/',
        subtitle: 'Close-Up/Table Magic',
      },
      {
        src: require('@/static/square/magicShowcase.jpg'),
        alt: 'Magic Office Party',
        hideOnXs: true,
        details:
          'Whether for an office party, fundraiser or entertaining clients, Magic really gets people talking. Businesses big and small love this personal, professional Magic.',
        href: '/',
        subtitle: 'Corporate Magic',
      },
      {
        src: require('@/static/square/wedding.jpg'),
        alt: 'Magical Wedding',
        hideOnXs: false,
        details:
          'Make your special day more Magical. Let family and friends relax and share an experience together. Between ceremony and reception or during meals, magic is perfect.',
        href: '/',
        subtitle: 'Wedding Day Magic',
      },
    ]
    return { companyLogos, services, goToContact, goToServices }
  },
})
</script>

<style scoped lang="scss">
.v-parallax {
  transform: none !important;
  width: 100% !important;
  height: 90vh !important;
  min-height: 540px;
}

// Properly cover the frame instead of the old hard-coded negative margins
.v-parallax ::v-deep .v-parallax__image {
  margin: 0 !important;
  object-fit: cover;
  object-position: center 30%;
}

// Layered overlay: even darkening for legibility + subtle bottom vignette
.v-parallax ::v-deep .v-parallax__content {
  padding: 0 !important;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.35) 45%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.55) 100%
    ) !important;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-eyebrow {
  color: rgb(228, 186, 93);
  text-transform: uppercase;
  letter-spacing: 0.32em;
  font-size: clamp(0.7rem, 1.6vw, 0.95rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.hero-title {
  color: #fff;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  line-height: 1.05;
  font-size: clamp(2.75rem, 9vw, 6.5rem);
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.45);
}

.hero-sub {
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(1rem, 2.6vw, 1.5rem);
  font-weight: 300;
  letter-spacing: 0.04em;
  margin-bottom: 1.75rem;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 2.25rem;
}

.hero-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 999px;
  color: #fff;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.06);
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.hero-cta .v-btn {
  min-width: 200px;
}
</style>
