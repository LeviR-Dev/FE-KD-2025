<script setup lang="ts">
import FooterComponent from '~/components/defaultComponents/FooterComponent.vue'
import type { DropdownMenuItem } from '@nuxt/ui';
const items = ref<DropdownMenuItem[]>([
  {
    label: 'Home',
    href: '/',
    icon: 'i-lucide-home',
  },
  {
    label: 'Eigen Jungletuin',
    href: '/jungeGardenPage',
    icon: 'i-lucide-tree-deciduous',
  },
  {
    label: 'Contact',
    href: '/contactPage',
    icon: 'i-lucide-phone',
  }
]);
</script>


<template>
  <div>
    <header class="w-full header_Background py-6">
      <div class="flex justify-between w-full">
        <title class="text-2xl font-semibold ml-2"><NuxtLink to="/">Jungle Tuinen</NuxtLink> </title>
      <UDropdownMenu
      class="mr-2 opacity-80 text-md"
        name="Navigation"
        :items="items"
        :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 26,
          
        }"
        :ui="{
          content: 'w-42 bg-gray-700',
          item: 'bg-gray-700',
        }"
      >
        <UButton
          icon="i-lucide-menu"
          color="none"
          size="xl"
        />
      </UDropdownMenu>
      </div>
      
    </header>

    <!-- Page Content -->
    <main>
      <slot />
      
    </main>
    <FooterComponent />
  </div>
</template>
