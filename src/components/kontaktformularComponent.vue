<template>
  <div id="contactForm" class="contact-form">
    <button id="closeContactForm" class="close-btn">&times;</button>
    <h2>Kontakt udlejer</h2>
    <form>
      <label for="name">Navn:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Besked:</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Send besked</button>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
/* Kontakt-knap */
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

/* Flyvende formular */
.contact-form {
  position: fixed;
  top: 50%;
  right: -400px;
  /* skjult ud over højre kant */
  transform: translateY(-50%);
  width: 90%;
  max-width: 350px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  background-color: white;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  transition: right 0.4s ease;
  z-index: 999;
  border-radius: 12px;
}

/* Når formularen er aktiv */
.contact-form.open {
  right: 0;
}

.contact-form h2 {
  margin-top: 0;
  font-size: 22px;
}

.contact-form label {
  display: block;
  margin-top: 15px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
}

.contact-form button[type="submit"] {
  margin-top: 10px;
  background-color: #2c7a7b;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

/* Luk-knap */
.close-btn {
  position: absolute;
  top: 12px;
  right: 15px;
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: #999;
}

/* Responsiv på små skærme */
@media (max-width: 500px) {
  .contact-form {
    width: 95%;
    right: -95%;
    /* Skjul mobilvenligt */
  }

  .contact-form.open {
    right: 0;
  }
}
</style>
