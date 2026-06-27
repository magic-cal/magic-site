<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" class="pa-0">
      <section class="hero">
        <div class="hero-overlay">
          <h1 class="hero-heading">
            <span class="hero-name">Callum McClure</span>
            <span class="hero-tagline">Multi-Award Winning Magician</span>
            <span class="hero-subtitle">Member of The Magic Circle</span>
          </h1>
        </div>
      </section>

      <section-break-img :size="125" />
      <about-snippet />
      <card-reveal />

      <company-carousel
        title="Some of the Companies Callum has performed for"
        :logos="companyLogos"
        color="white"
      />
      <services-section title="Which Style of Magic" :services="services" />
      <faqs-section />
      <contact-section />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Callum McClure — Award-Winning Magician',
  description:
    'Multi-award winning magician with over a decade of experience, specialising in close-up magic at weddings, dinners, balls and parties of all kinds.',
  ogTitle: 'Callum McClure — Award-Winning Magician',
  ogDescription:
    'Multi-award winning magician specialising in close-up and stage magic for weddings, corporate events and parties.',
  ogImage: 'https://www.magic-cal.co.uk/shuffle/callum_mcclure_shuffle.jpg',
  twitterCard: 'summary_large_image',
})

const companyLogos = [
  { src: '/Raddison.png', alt: 'Radisson logo' },
  { src: '/BBC.jpg', alt: 'BBC logo' },
  { src: '/Barclays.png', alt: 'Barclays logo' },
  { src: '/Disney.png', alt: 'Disney logo' },
  { src: '/Independent.png', alt: 'The Independent logo' },
  { src: '/Age-UK.jpg', alt: 'Age UK logo' },
  { src: '/Marriott.png', alt: 'Marriott logo' },
  { src: '/Lloyds.png', alt: 'Lloyds logo' },
  { src: '/GLive.jpg', alt: 'G Live logo' },
  { src: '/Btg.jpg', alt: 'BTG logo' },
  { src: '/CAM.jpg', alt: 'Cambridge logo' },
  { src: '/Arqiva.jpg', alt: 'Arqiva logo' },
]

const services = [
  {
    src: '/square/corporate.jpg',
    alt: 'Close-up magic',
    details:
      'Magic that is right there, in front of your eyes. A personal, entertaining style of magic for small groups or tables.',
    href: '/',
    subtitle: 'Close-Up/Table Magic',
  },
  {
    src: '/square/magicShowcase.jpg',
    alt: 'Corporate magic',
    details:
      'Whether for an office party, fundraiser or entertaining clients, magic really gets people talking. Businesses big and small love this personal, professional magic.',
    href: '/',
    subtitle: 'Corporate Magic',
  },
  {
    src: '/square/wedding.jpg',
    alt: 'Wedding magic',
    details:
      'Make your special day more magical. Let family and friends relax and share an experience together. Between ceremony and reception or during meals, magic is perfect.',
    href: '/',
    subtitle: 'Wedding Day Magic',
  },
]
</script>

<style scoped>
.hero {
  width: 100%;
  height: 85vh;
  background-image: url('/shuffle-cropped1.jpg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.85), transparent);
}

.hero-heading {
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: normal;
  gap: 0.5rem;
}

.hero-name {
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 700;
}

.hero-tagline {
  font-size: clamp(1.25rem, 3vw, 2.25rem);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
}
</style>
