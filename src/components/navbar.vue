<template>
  <header>
    <nav>
      <div class="nav-container">
        <!-- Logo med router-link -->
        <router-link to="/" class="logo">
          <div class="logo">LejNu</div>
        </router-link>

        <!-- Mobil-menu knap -->
        <button class="menu-toggle" aria-label="Toggle menu">&#9776;</button>

        <!-- Navigation links -->
        <ul class="nav-links">
          <!-- Brug af Vue Router-link -->
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
// Importer nødvendige funktioner fra Vue
import { ref, onMounted } from "vue"

// Referencer til DOM-elementer
const toggleBtn = ref(null) // Knap til at åbne/lukke menuen
const navLinks = ref(null) // Selve navigationens link-liste

// Funktion til at toggle menuens synlighed
const toggleMenu = () => {
  navLinks.value.classList.toggle("open") // Tilføj/fjern "open"-klassen
}

// Funktion til at lukke menuen (fjerner "open"-klassen)
const closeMenu = () => {
  navLinks.value.classList.remove("open")
}

// Funktion der lukker menuen, hvis brugeren klikker udenfor menuen og toggle-knappen
const handleClickOutside = (event) => {
  if (
    navLinks.value &&
    !navLinks.value.contains(event.target) && // Klik ikke inde i menuen
    !toggleBtn.value.contains(event.target) // Klik ikke på toggle-knappen
  ) {
    closeMenu() // Hvis klik var udenfor, luk menuen
  }
}

// Når komponenten er mountet (tilføjet til DOM'en)
onMounted(() => {
  // Find DOM-elementer
  toggleBtn.value = document.querySelector(".menu-toggle")
  navLinks.value = document.querySelector(".nav-links")

  // Tilføj klik-håndtering til knappen (åbn/luk menu)
  toggleBtn.value?.addEventListener("click", toggleMenu)

  // Når man klikker på et link i menuen, luk menuen (på mobil)
  const allLinks = navLinks.value.querySelectorAll("a")
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        // Kun på mobil
        closeMenu()
      }
    })
  })

  // Tilføj global klik-lytter for at lukke menuen hvis man klikker udenfor
  document.addEventListener("click", handleClickOutside)
})
</script>

<style scoped>
nav {
  background-color: #2c7a7b;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
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
}

div a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  position: relative;
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
    z-index: 3;
  }

  .nav-links.open {
    display: flex;
    height: auto;
    border-top: 1px solid #ffffff;
    padding: 0;
  }

  .nav-links li {
    padding: 20px 0;
    text-align: center;
    width: 100%;
  }

  .nav-links li.open {
    display: block;
    text-align: center;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid #ddd;
  }

  .nav-links.open li {
    border-top: 1px solid #ffffff;
  }

  .nav-links.open li:first-child {
    border-top: none;
    border-bottom: none;
  }

  .nav-links.open li:last-child {
    border-bottom: none;
  }

  .nav-links {
    grid-column: span 2;
    justify-self: stretch;
  }
}
</style>
