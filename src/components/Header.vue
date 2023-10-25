<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <div class="logo">  TAVUE</div>
      <nav>
        <RouterLink to="/"><button class="nav-btn">Accueil</button></RouterLink>
        <RouterLink to="/lunettes"><button class="nav-btn">Lunettes</button></RouterLink>
        <button class="nav-btn">Personnaliser</button>
        <button class="nav-btn">Mon espace</button>
      </nav>
      <button class="signup-btn">S'inscrire</button>
    </header>

  </template>
  
  <style scoped>
  header {
    background-color: #ffffff;
    height: 85px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px; /* Adding some padding to the left and right for better spacing */
  }
  
  .logo {
    margin-left: 113px;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 45px;
    font-style: italic;
    font-weight: 600;
    line-height: 54px;
    text-transform: uppercase;
  }
  
  nav {
    display: flex;
    gap: 102px;
  }
  
  .nav-btn {
    background: none;
    border: none;
    color: #000;
    font-family: 'PT Sans', sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 20.4px;
    cursor: pointer;
  }
  
  .signup-btn {
    margin-right: 141px;
    background-color: #3C7DDE;
    border: none;
    border-radius: 4px;
    width: 184px;
    height: 44px;
    color: white;
    font-family: 'PT Sans', sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 20.4px;
    cursor: pointer;
  }
  
  </style>
  