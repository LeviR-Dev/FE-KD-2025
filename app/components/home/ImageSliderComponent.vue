<script lang="ts">
import JungleSlider1 from '~/assets/images/slider/junglePic1.webp';
import JungleSlider2 from '~/assets/images/slider/JunglePic2.webp';
import JungleSlider3 from '~/assets/images/slider/JunglePic3.webp';
import JungleSlider4 from '~/assets/images/slider/JunglePic4.webp';

export default {
  name: 'ImageSliderComponent',

  data() {
    return {
      items: [
        JungleSlider1,
        JungleSlider2,
        JungleSlider3,
        JungleSlider4
      ]
    }
  }
}
</script>

<template>
    <div class="md:mt-[300px]"> 
      <h2 class="text-md md:text-2xl font-bold">Foto gallerij</h2>
      <div class="text-sm md:text-md mt-2">Bekijk fotos van jungle tuinen!</div>
    </div>
    <br />

    <div class="md:w-2/3 mx-auto">
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :autoplay="{ delay: 2000 }"
        :items="items"
        :ui="{
          item: 'basis-full lg:basis-1/3'
        }"
      >
        <div class="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
          <img
            :src="item"
            alt="Jungle image slider"
            class="w-full h-full object-cover"
          />
        </div>
      </UCarousel>
    </div>
</template>
