<template>
  <div class="container">
    <h1>Lejlighed til Udlejning</h1>
    <lejlighedInfo />
    <slider />
    <googleMaps />
    <kontaktformularComponent />
    <button id="openContactForm" class="contact-btn">Kontakt udlejer</button>
  </div>
</template>

<script setup>
import lejlighedInfo from "../components/lejlighedInfo.vue"
import slider from "../components/slider.vue"
import kontaktformularComponent from "../components/kontaktformularComponent.vue"
import googleMaps from "../components/googleMaps.vue"
</script>

<style scoped></style>
