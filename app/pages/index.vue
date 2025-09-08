<template>
  <div>
    <BannerComponent />
    <div class="w-11/12 mx-auto">
      <ImageSliderComponent />
      <HomeText />
    </div>
    
  </div>
</template>

<script setup>
import BannerComponent from '~/components/home/BannerComponent.vue'
import ImageSliderComponent from '~/components/home/ImageSliderComponent.vue'
import HomeText from '~/components/home/homeText.vue'
</script>
