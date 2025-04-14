<template>
  <div class="container">
    <h1>Lejlighed til Udlejning</h1>
    <lejlighedInfo />
    <slider />
    <googleMaps />
    <kontaktformularComponent
      :is-open="isContactFormOpen"
      @close="closeContactForm"
    />
    <button @click="openContactForm" class="contact-btn">
      Kontakt udlejer
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import lejlighedInfo from "../components/lejlighedInfo.vue"
import slider from "../components/slider.vue"
import kontaktformularComponent from "../components/kontaktformularComponent.vue"
import googleMaps from "../components/googleMaps.vue"

// Reaktiv tilstand til at åbne/lukke kontaktformularen
const isContactFormOpen = ref(false)

const openContactForm = () => {
  isContactFormOpen.value = true
}

const closeContactForm = () => {
  isContactFormOpen.value = false
}
</script>

<style scoped>
/* Kontakt-knap */
.contact-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #2c7a7b;
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  z-index: 3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
