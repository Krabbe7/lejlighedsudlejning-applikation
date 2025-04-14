<template>
  <navbar />

  <router-view />
</template>
<script setup>
import navbar from "./components/navbar.vue"
</script>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  margin: 0;
  background-color: #f8f9fa;
  color: #333;
}

h1 {
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

body.dark-mode {
  background-color: #121212;
  color: white;
}

button#toggle-theme {
  margin: 20px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
