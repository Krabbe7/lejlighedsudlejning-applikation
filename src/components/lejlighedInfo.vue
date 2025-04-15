<template>
  <!-- Hero billede -->
  <div class="hero">
    <img
      class="building-img"
      src="../assets/Bygning.jpg"
      alt="Lejlighed - Bygning"
    />
  </div>

  <!-- Overskrift og adresse -->
  <div class="apartment-header">
    <div class="address-container">
      <h1>Moderne 3-værelses lejlighed tæt på fjorden</h1>
      <h2>Vestre havnebromenade 34, 2. tv., Aalborg</h2>
    </div>

    <!-- Pris og kontaktknap -->
    <div class="price-container">
      <p class="price">DKK 12.500/md</p>
      <button @click="openContactForm" class="contact-btn">Kontakt os</button>
    </div>
  </div>

  <!-- Lejlighedsbeskrivelse -->
  <div class="details">
    <div class="description">
      <p>
        Velkommen til denne lyse og moderne lejlighed beliggende midt i hjertet
        af Aalborg. Lejligheden byder på to soveværelser, et rummeligt
        køkken-alrum og en stor altan med udsigt til gårdhaven.
      </p>
      <p>
        Perfekt til både familier og professionelle. Lejligheden er klar til
        indflytning.
      </p>
    </div>

    <!-- Infoboks med detaljer -->
    <div class="info-box">
      <h2>Detaljer</h2>
      <ul>
        <li><strong>Størrelse:</strong> 75 m²</li>
        <li><strong>Antal værelser:</strong> 3</li>
        <li><strong>Lejepris:</strong> 12.500 kr. pr. måned</li>
        <li><strong>Faciliteter:</strong> Balkon, Parkeringsplads</li>
        <li>
          <strong>Hårde hvidevare:</strong> Vaskemaskine, tørretumbler, og
          opvaskemaskine
        </li>
        <li><strong>Depositum:</strong> 7000 kr.</li>
      </ul>
    </div>
  </div>

  <!-- Kontaktformular komponent -->
  <kontaktformularComponent
    :is-open="isContactFormOpen"
    @close="closeContactForm"
  />
</template>

<script setup>
import kontaktformularComponent from "./kontaktformularComponent.vue"
import { ref } from "vue"

// Boolean der styrer om kontaktformularen vises
const isContactFormOpen = ref(false)

// Åbner formularen
const openContactForm = () => {
  isContactFormOpen.value = true
}

// Lukker formularen
const closeContactForm = () => {
  isContactFormOpen.value = false
}
</script>

<style scoped>
.apartment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: white;
  padding: 30px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 10px 20px #0000001a;
}

.apartment-header h1 {
  margin: 0;
  font-size: 30px;
}

.price-container {
  text-align: right;
}

.price {
  font-size: 25px;
  font-weight: 600;
  color: #2c7a7b;
  margin: 0;
}

.contact-btn {
  padding: 12px 24px;
  background-color: #2c7a7b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
}
.contact-btn:hover {
  background-color: #225e5f;
}

.building-img {
  width: 100%;
  display: block;
  border-radius: 15px 15px 0 0;
}

.details {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 10px;
  margin: 30px 0 80px 0;
  padding: 20px;
}

.description {
  font-size: 18px;
  line-height: 25px;
}

.address {
  font-size: 22px;
}
.address-container h2 {
  font-size: 22px;
  margin-top: 20px;
}
h2 {
  font-size: 22px;
  margin: 0;
}
.info-box {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 400px;
}

.info-box ul {
  line-height: 30px;
  font-size: 18px;
}

.info-box h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 20px;
}

@media (max-width: 768px) {
  .details {
    grid-template-columns: 1fr;
    padding: 0;
  }

  .price {
    margin-top: 20px;
  }

  .price-container {
    text-align: center;
  }

  .apartment-header {
    flex-direction: column;
    align-items: center;
  }

  .price-book {
    text-align: left;
    margin-top: 15px;
  }

  .info-box {
    max-width: 100%;
  }
}
</style>
