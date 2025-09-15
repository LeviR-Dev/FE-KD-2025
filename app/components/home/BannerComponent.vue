<script lang="ts">

import SmallImage from '~/assets/images/JungleBannerSmall.svg';
import MeduimImage from '~/assets/images/JungleBannerMed.svg';
import LargeImage from '~/assets/images/JungleBannerLarge.svg';

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
    <h1 class=" text-xl md:text-4xl font-bold py-5">Welkom bij jungle Tuinen</h1> 
    <div class="max-w-[400px] font-thin md:text-xl mb-64">Breng tropische sferen naar je eigen achtertuin en geniet van een groene oase vol sfeer en leven. Op onze website vind je inspiratie én een eenvoudig stappenplan om zelf jouw jungletuin aan te leggen. Zo maak je van iedere buitenruimte een paradijs!</div>
</div>

</template>