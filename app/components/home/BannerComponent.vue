<script lang="ts">

import SmallImage from '~/assets/images/JungleBannerSmall.webp';
import MeduimImage from '~/assets/images/JungleBannerMed.webp';
import LargeImage from '~/assets/images/JungleBannerLarge.webp';

export default {
  name: 'BannerComponent',
  data() {
    return {
        imageSrc: LargeImage,
    };
  },
  mounted() {
      this.updateImageSrc();
      window.addEventListener('resize', this.updateImageSrc);
  },
  beforeDestroy() {
      window.removeEventListener('resize', this.updateImageSrc);
  },
  methods: {
      updateImageSrc() {
          const width = window.innerWidth;
          if (width < 640) { 
              this.imageSrc = SmallImage;
          } else if (width >= 640 && width < 1024) {
              this.imageSrc = MeduimImage;
          } else {
              this.imageSrc = LargeImage;
          }
      }
  },
}


</script>

<template>
<div class="z-0 relative w-full">
    <img
      :src="imageSrc"
      alt="Banner image"
      class="absolute w-full h-[400px] md:h-[500px] object-cover"
    />
</div>
<div class="w-11/12 mx-auto relative">
    <h2 class=" text-xl md:text-4xl font-bold py-5">Welkom bij jungle Tuinen</h2> 
    <h3 class="max-w-[400px] font-thin md:text-xl mb-64">Breng tropische sferen naar je eigen achtertuin en geniet van een groene oase vol sfeer en leven. Op onze website vind je inspiratie én een eenvoudig <nuxt-link to="/stappenplan" class="underline text-white">stappenplan</nuxt-link> om zelf jouw jungletuin aan te leggen. Zo maak je van iedere buitenruimte een paradijs!</h3>
</div>

</template>