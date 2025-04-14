<template>
  <div class="container">
    <section class="intro">
      <h1>Velkommen til LejNu.dk</h1>
      <p>
        Find din næste lejlighed blandt vores attraktive udlejningsmuligheder i
        hele Danmark. Hurtigt, sikkert og nemt!
      </p>
    </section>

    <!-- Lejligheds-cards -->
    <section class="apartment-cards">
      <div class="card">
        <img src="../assets/Bygning.jpg" alt="Lejlighed i Odense" />
        <div class="card-content">
          <h2>Aalborg</h2>
          <h3>Boulevard 45, 2. tv.</h3>
          <p>Lys og indflytningsklar 3-værelses lejlighed tæt på fjorden.</p>
          <p class="price">Kr. 8.200 / md.</p>
          <a href="/lejlighedsudlejning.html" class="btn">Læs mere</a>
        </div>
      </div>
      <div class="card-inactive">
        <img
          src="https://placehold.co/500x750?text=image+missing"
          alt="Lejlighed i Aarhus C"
        />
        <div class="card-content">
          <h2>Aarhus C</h2>
          <h3>Vestergade 112, 3. th.</h3>
          <p>Charmerende og nyrenoveret 2-værelses i Latinerkvarteret</p>
          <p class="price">Kr. 9.500 / md.</p>
          <a href="" class="btn-inactive">Læs mere</a>
        </div>
      </div>

      <div class="card-inactive">
        <img
          src="https://placehold.co/500x750?text=image+missing"
          alt="Lejlighed i København N"
        />
        <div class="card-content">
          <h2>København N</h2>
          <h3>Tagensvej 88B, 1. tv.</h3>
          <p>Moderniseret 3-værelses med altan og fælles gårdhave.</p>
          <p class="price">Kr. 11.200 / md.</p>
          <a href="" class="btn-inactive">Læs mere</a>
        </div>
      </div>
      <div class="card-inactive">
        <img
          src="https://placehold.co/500x750?text=image+missing"
          alt="Lejlighed i København"
        />
        <div class="card-content">
          <h2>København N</h2>
          <h3>Rantzausgade 67, 3. th.</h3>
          <p>3-værelses lejlighed tæt på metro og grønne områder.</p>
          <p class="price">Kr. 11.500 / md.</p>
          <a href="" class="btn-inactive">Læs mere</a>
        </div>
      </div>

      <div class="card-inactive">
        <img
          src="https://placehold.co/500x750?text=image+missing"
          alt="Lejlighed i Aarhus"
        />
        <div class="card-content">
          <h2>Aarhus C</h2>
          <h3>Frederiksgade 21, 2. sal</h3>
          <p>Lys og moderne lejlighed midt i byen med altan.</p>
          <p class="price">Kr. 9.800 / md.</p>
          <a href="" class="btn-inactive">Læs mere</a>
        </div>
      </div>

      <div class="card-inactive">
        <img
          src="https://placehold.co/500x750?text=image+missing"
          alt="Lejlighed i Odense"
        />
        <div class="card-content">
          <h2>Odense M</h2>
          <h3>Hunderupvej 18, st. tv.</h3>
          <p>Familievenlig bolig tæt på børnehave, skole og indkøb.</p>
          <p class="price">Kr. 8.200 / md.</p>
          <a href="" class="btn-inactive">Læs mere</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.intro {
  text-align: center;
  margin: 2rem 0;
}

.intro h1 {
  font-size: 2.5rem;
  color: #2c7a7b;
}

.intro p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  color: #555;
}

.apartment-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-inactive {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card img,
.card-inactive img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}

.card-content h2 {
  margin-top: 0;
  color: #2c7a7b;
}

.card-content p {
  margin: 0.5rem 0;
}

.card-content .price {
  font-weight: 600;
  color: #2c7a7b;
  margin-bottom: 1rem;
}

.card .btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #2c7a7b;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.card .btn:hover {
  background-color: #225e5f;
}

.btn-inactive {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #6e6e6e;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  cursor: default;
}
</style>
