<template>
  <div class="container">
    <lejlighedInfo />
    <slider />
    <googleMaps />
  </div>
</template>

<script setup>
import lejlighedInfo from "../components/lejlighedInfo.vue"
import slider from "../components/slider.vue"

import googleMaps from "../components/googleMaps.vue"
</script>

<style scoped>
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

.contact-btn:hover {
  background-color: #225e5f;
}
</style>
