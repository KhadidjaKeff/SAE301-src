<script setup>
  // Import éléments de vue
  import { ref } from 'vue'
</script>

<template>
  <div class="footer">
    <div class="footer-top">
      <img src="@/assets/paypal.svg" alt="PayPal" />
      <img src="@/assets/gpay.svg" alt="GPay" />
      <img src="@/assets/visa-logo.svg" alt="Visa" />
      <img src="@/assets/applepay.svg" alt="Apple Pay" />
    </div>
    <div class="footer-links">
      <a class="link-footer" >À propos</a>
      <a class="link-footer" href="#">Mon compte</a>
      <a class="link-footer" href="#">Cookies</a>
      <a class="link-footer" href="#">Nous contacter</a>
    </div>
    <div class="footer-bottom">
      <span>© 2023 TAVUE</span>
      <select>
        <option>English</option>
        <!-- Ajoutez d'autres langues si nécessaire -->
      </select>
      <select>
        <option>USD</option>
        <!-- Ajoutez d'autres devises si nécessaire -->
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Outfit', sans-serif;
  color: gray;
}

.footer-top {
  display: flex;
  gap: 20px;
}

.footer-links {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
}

.link-footer {
  text-decoration: none;
  color: gray;
}
/* Vous pouvez ajouter d'autres styles ou modifier ceux-ci selon vos besoins */
</style>
