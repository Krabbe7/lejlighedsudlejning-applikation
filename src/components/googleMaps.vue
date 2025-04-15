<template>
  <!-- Google maps lokation-->
  <div class="maps-container">
    <h2>Placering</h2>

    <div class="map">
      <img
        src="../assets/Google-maps-location.jpg"
        alt="Google maps lokation"
        class="Googlemaps-img"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.maps-container {
  margin-top: 80px;
}
.map {
  margin-top: 30px;
  height: 300px;
  background: #ddd;
  border-radius: 1rem;
  width: 100%;
  aspect-ratio: 1720 / 768;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.Googlemaps-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 62% 45%;
  border-radius: 1rem;
  display: block;
}
</style>
