<template>
  <h2>Billeder</h2>
  <div class="gallery">
    <div id="slider">
      <!-- Billed-galleri -->
      <div class="slider-container">
        <img
          src="../assets/Stue.jpg"
          alt="Lejlighed - Stue"
          class="slider-img"
        />
        <img
          src="../assets/balkon.jpg"
          alt="Lejlighed - Balkon"
          class="slider-img"
        />
        <img
          src="../assets/Køkken.jpg"
          alt="Lejlighed - Køkken"
          class="slider-img"
        />
        <img
          src="../assets/Soveværelse.jpg"
          alt="Lejlighed - Soveværelse"
          class="slider-img"
        />
        <img
          src="../assets/walk-in-closet.jpg"
          alt="Lejlighed - walk-in-closet"
          class="slider-img"
        />
        <img
          src="../assets/Badeværelse.jpg"
          alt="Lejlighed - Badeværelse"
          class="slider-img"
        />
      </div>

      <!-- Navigationsknapper -->
      <button class="prev">&#10094;</button>
      <button class="next">&#10095;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

let currentSlide = 0 // Nuværende slide-index
const slides = ref([]) // Liste med billeder/slides
const totalSlides = ref(0) // Antal slides
const prevBtn = ref(null)
const nextBtn = ref(null)

// Går til næste/forrige slide
const moveSlide = (step) => {
  currentSlide = (currentSlide + step + totalSlides.value) % totalSlides.value
  updateSlider()
}

// Opdaterer sliderens visning
const updateSlider = () => {
  slides.value.forEach((slide) => {
    slide.style.display = "none"
  })
  slides.value[currentSlide].style.display = "block"
}

// Når DOM'en er klar (onMounted), hentes slider-billeder og knapper, og der tilføjes klik-handlere til at navigere i billederne
// samt initialiseres visningen.
onMounted(() => {
  slides.value = document.querySelectorAll(".slider-img")
  totalSlides.value = slides.value.length

  prevBtn.value = document.querySelector(".prev")
  nextBtn.value = document.querySelector(".next")

  prevBtn.value?.addEventListener("click", () => moveSlide(-1))
  nextBtn.value?.addEventListener("click", () => moveSlide(1))

  updateSlider() // Initialiserer visningen af slideren
})
</script>

<style scoped>
#slider {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem;
}

.slider-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-img {
  height: 500px;
  object-fit: cover;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.gallery img {
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #00000080;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  z-index: 1;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
