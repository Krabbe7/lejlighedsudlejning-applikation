<template>
  <div class="hero">
    <img
      class="bygning-img"
      src="../assets/Bygning.jpg"
      alt="Lejlighed - Bygning"
    />
  </div>

  <!-- Lejlighedsinfo -->
  <div class="apartment-header">
    <div class="adresse">
      <h2>Moderne 3-værelses lejlighed tæt på fjorden</h2>
      <h3>Vestre havnebromenade 34, 2. tv., Aalborg</h3>
    </div>
    <div class="price-book">
      <div class="price">DKK 12.500/md</div>
      <button class="btn">Book nu</button>
    </div>
  </div>

  <!-- Detaljer -->
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
</template>

<script setup></script>

<style scoped>
.apartment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.apartment-header h1 {
  margin: 0;
  font-size: 2rem;
}

.price-book {
  text-align: right;
}

.price {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c7a7b;
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: #2c7a7b;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.bygning-img {
  width: 100%;
  border-radius: 1rem;
}

.details {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 10px;
  margin-top: 2rem;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
}

.adresse {
  font-size: 20px;
}

h3 {
  font-size: 18px;
}

.info-box {
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 400px;
}

.info-box ul {
  line-height: 30px;
}

.info-box h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .details {
    grid-template-columns: 1fr;
  }

  .apartment-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .price-book {
    text-align: left;
    margin-top: 1rem;
  }

  .info-box {
    max-width: 100%;
  }
}
</style>
