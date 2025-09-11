<script setup>
import { ref } from 'vue'

const email = ref('')
const title = ref('')
const text = ref('')

const emailError = ref('')

// validate email
const validateEmail = (emailVal) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailVal) {
    emailError.value = 'Vul een emailadres in'
    return false
  }
  if (!regex.test(emailVal)) {
    emailError.value = 'Vul een geldig emailadres in'
    return false
  }
  emailError.value = ''
  return true
}

const handleSubmit = (e) => {
  e.preventDefault()

  if (validateEmail(email.value)) {
    alert('Email succesvol verzonden!')
    console.log({
      email: email.value,
      title: title.value,
      text: text.value
    })
  }
}
</script>

<template>
  <div class="flex justify-center min-h-screen items-center">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
    >
      <h1 class="text-3xl font-bold text-center mb-2 text-gray-800">
        Contact Formulier
      </h1>

      <!-- Email -->
      <div>
        <label class="block text-gray-700 font-semibold mb-2 text-lg" for="email">
          Email
        </label>
        <input
          type="email"
          v-model="email"
          id="email"
          placeholder="Voeg een emailadres toe"
          class="w-full p-4 text-lg text-black rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <div v-if="emailError" class="text-red-500 text-sm mt-1">
          {{ emailError }}
        </div>
      </div>

      <!-- Title -->
      <div>
        <label class="block text-gray-700 font-semibold mb-2 text-lg" for="title">
          Titel
        </label>
        <input
          type="text"
          v-model="title"
          id="title"
          placeholder="Titel van je bericht"
          class="w-full p-4 text-lg rounded-lg border text-black border-gray-300 "
        />
      </div>

      <!-- Text -->
      <div>
        <label class="block text-gray-700 font-semibold mb-2 text-lg" for="text">
          Bericht
        </label>
        <textarea
          v-model="text"
          id="text"
          placeholder="Schrijf hier je bericht..."
          rows="5"
          class="w-full p-4 text-lg rounded-lg border text-black border-gray-300"
        ></textarea>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        class="w-full bg-green-600 hover:bg-green-900 text-white text-lg font-semibold py-3 rounded-lg shadow-md transition duration-200"
      >
        Verstuur
      </button>
    </form>
  </div>
</template>
