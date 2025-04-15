<template>
  <navbar />

  <router-view />
</template>
<script setup>
import navbar from "./components/navbar.vue"
</script>
<style>
body {
  margin: 0;
}
h1 {
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}
</style>
