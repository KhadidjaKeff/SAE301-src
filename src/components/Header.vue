<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <div class="logo">  TAVUE</div>
      <nav>
        <RouterLink to="/"><button class="nav-btn">Accueil</button></RouterLink>
        <RouterLink to="/lunettes"><button class="nav-btn">Lunettes</button></RouterLink>
        <RouterLink to="/"></RouterLink><button class="nav-btn">Personnaliser</button>
      </nav>
      <button class="signup-btn">S'inscrire</button>
    </header>

  </template>
  
  <style scoped>
  /* Styles généraux pour l'en-tête */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f9f9f9;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Logo */
  .logo {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  
  /* Navigation */
  nav {
    display: flex;
    gap: 10px;
  }
  
  .nav-btn {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .nav-btn {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    padding: 8px 12px;
    border-radius: 4px;
  }
  
  .nav-btn:hover {
    background-color: rgba(0, 0, 0, 0.15);
    transform: translateY(-3px); /* Cette transformation déplace légèrement le bouton vers le haut */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .signup-btn {
    background-color: blue;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .signup-btn:hover {
    background-color: darkblue;
    transform: translateY(-3px); /* Cette transformation déplace légèrement le bouton vers le haut */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  </style>
  