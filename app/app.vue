<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: 'Jungle Tuinen',
      meta: [
        { name: 'description', content: 'Deze website is gericht om mensen te inspireren om hun eigen jungle tuin te maken. Met ons stappenplan kun je eenvoudig een weelderige jungle realiseren.' },
        { name: 'keywords', content: 'jungle tuin, tuinen, jungle, jungle tuin aanleggen' },
        { property: 'og:title', content: 'Jungle Tuinen' },
        { property: 'og:description', content: 'Deze website is gericht om mensen te inspireren om hun eigen jungle tuin te maken. Met ons stappenplan kun je eenvoudig een weelderige jungle realiseren.' },
        { property: 'og:image', content: 'https://frontend-kd-levi.reachservers.nl/_nuxt/JungleBannerLarge.D9Cmv5Lc.svg' },
        { property: 'og:url', content: 'https://frontend-kd-levi.reachservers.nl' },
        { property: 'og:type', content: 'website' },
      ]
    }
  }
}
</script>
