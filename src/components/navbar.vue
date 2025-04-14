<template>
  <header>
    <nav>
      <div class="nav-container">
        <router-link to="/" class="logo">
          <div class="logo">LejNu.dk</div>
        </router-link>
        <button class="menu-toggle" aria-label="Toggle menu">&#9776;</button>

        <ul class="nav-links">
          <!-- Brug router-link her i stedet for at klikke og bruge push -->
          <li>
            <router-link to="/" class="nav-item" active-class="active"
              >Forside</router-link
            >
          </li>
          <li>
            <router-link
              to="/lejlighedsudlejning"
              class="nav-item"
              active-class="active"
              >Lejlighedsudlejning</router-link
            >
          </li>
          <li><a href="#">Om</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue"

// Router instans til navigation
const toggleBtn = ref(null)
const navLinks = ref(null)

onMounted(() => {
  // Sørger for, at DOM-elementerne er tilgængelige
  toggleBtn.value = document.querySelector(".menu-toggle")
  navLinks.value = document.querySelector(".nav-links")

  // Tilføjer event listener
  if (toggleBtn.value && navLinks.value) {
    toggleBtn.value.addEventListener("click", () => {
      navLinks.value.classList.toggle("open")
    })
  }
})
</script>

<style scoped>
nav {
  background-color: #2c7a7b;
}

.nav-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  position: relative;
}

.logo {
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  grid-column: 1;
  justify-self: start;
}

.nav-links {
  grid-column: 2;
  justify-self: center;
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  /* Gør at ::after kan positioneres korrekt */
}

div a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  /* Gør at ::after kan positioneres korrekt */
}

.nav-links a.active::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  position: absolute;

  left: 0;
}

.menu-toggle {
  grid-column: 3;
  justify-self: end;
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

nav ul {
  list-style-type: none;
  background-color: #2c7a7b;
  margin: 0;
  padding: 0 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a:hover {
  color: #d3d3d3;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: #2c7a7b;
    display: none;
    padding: 10px 0;
    gap: 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    z-index: 1000;
  }

  .nav-links.open {
    display: flex;
    height: auto;
    border-top: 1px solid #ffffff;
    padding: 0;
  }

  .nav-links li {
    padding: 20px 0;
    /* Juster denne værdi for at ændre højden på knapperne */
    text-align: center;
    width: 100%;
  }

  .nav-links li.open {
    display: block;
    /* Gør at hvert menupunkt ligger på en ny linje */
    text-align: center;
    /* Centrerer tekst i dropdown menuen */
    padding: 10px 0;
    /* Afstand omkring tekst */
    width: 100%;
    /* Sørger for at li-elementet fylder hele bredden af nav-links */
    border-bottom: 1px solid #ddd;
    /* Streger mellem menupunkterne */
  }

  /* Fjerner streg fra det sidste menupunkt */
  .nav-links.open li {
    border-top: 1px solid #ffffff;
  }

  /* Fjerner streg fra det sidste menupunkt */
  .nav-links.open li:first-child {
    border-top: none;
    border-bottom: none;
  }

  /* Fjerner streg fra det sidste menupunkt */
  .nav-links.open li:last-child {
    border-bottom: none;
  }

  .nav-container {
    grid-template-columns: auto auto;
  }

  .nav-links {
    grid-column: span 2;
    justify-self: stretch;
  }
}
</style>
