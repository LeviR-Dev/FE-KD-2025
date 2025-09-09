<template>
  <div class="mx-auto bg-red-50 max-w-4xl px-4 py-12 mt-20">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex flex-col md:flex-row items-center gap-8 mb-12"
      :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''" 
    >

      <!-- hele coole image met de odd of even -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          :src="step.image"
          :alt="`Step ${index + 1}`"
          class="rounded-2xl shadow-lg max-w-full h-auto"
        />
      </div>

      <!-- Tekst -->
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl md:text-3xl font-bold text-green-800 mb-4">
          Stap {{ index + 1 }}: {{ step.title }}
        </h2>
        <p class="text-gray-700 md:text-lg">
          {{ step.text }}
        </p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

import Step1 from "~/assets/images/StepByStep/Step1.webp";
import Step2 from "~/assets/images/StepByStep/Step2.webp";
import Step3 from "~/assets/images/StepByStep/Step3.webp";
import Step4 from "~/assets/images/StepByStep/Step4.webp";
import Step5 from "~/assets/images/StepByStep/Step5.webp";
import Step6 from "~/assets/images/StepByStep/Step6.webp";

const steps = [
  {
    image: Step1,
    title: "Bereid de aarde voor",
    text: "Graaf de grond om en maak de bodem los, zodat je een sterke basis hebt voor een weelderige jungle."
  },
  {
    image: Step2,
    title: "Plant je jonge scheuten",
    text: "Zet kleine zaailingen of tropische plantjes in de aarde, ze vormen de eerste stap naar jouw eigen oerwoud."
  },
  {
    image: Step3,
    title: "Verzorg je groeiende planten",
    text: "Geef regelmatig water, verwijder onkruid en bescherm de scheuten, zodat ze uitgroeien tot robuuste jungleplanten."
  },
  {
    image: Step4,
    title: "Laat de jungle tot leven komen",
    text: "De bladeren worden groter, de planten voller en samen vormen ze een groene muur van tropisch leven."
  },
  {
    image: Step5,
    title: "Zie je tuin veranderen",
    text: "Geniet van de veranderingen en de rustgevende sfeer van jouw nieuwe jungle."
  },
  {
    image: Step6,
    title: "Dompel jezelf onder",
    text: "Je tuin verandert nu in een mini-oerwoud, vol fris groen, een wilde uitstraling en een vleugje avontuur."
  }
]
</script>
