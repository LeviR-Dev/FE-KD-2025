<template>
  <div class="p-4 mt-10 md:mt-0 max-w-4xl mx-auto">
    <h2 class="text-xl font-semibold mb-3">Kaart van Zwolle</h2>
    <div id="map" class="w-full h-96 rounded-lg shadow-md"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from 'leaflet'

onMounted(async () => {
  if (process.client) {
    const L = await import('leaflet')

    // Set default icon image
    const DefaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    })

    // map init
    const map = L.map('map').setView([52.5167, 6.0833], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap Contributors</a>'
    }).addTo(map)

    interface Pin {
      name: string
      coords: [number, number]
    }

    const pins: Pin[] = [
      { name: 'Centraal Station', coords: [52.5125, 6.0943] },
      { name: 'Sassenpoort', coords: [52.5156, 6.0942] },
      { name: 'Museum de Fundatie', coords: [52.5143, 6.0947] },
      { name: 'Peperbus', coords: [52.5168, 6.0919] }
    ]

    pins.forEach(pin => {
      const marker = L.marker(pin.coords, { icon: DefaultIcon }).addTo(map)
      marker.bindPopup(pin.name)
    })
  }
})
</script>

<style>
/* leaflet css moet manual geïmporteerd worden in Nuxt anders werkt die niet >:( */
@import "leaflet/dist/leaflet.css";
</style>

