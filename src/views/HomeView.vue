<script setup>
  import { RouterView } from 'vue-router'

// Import éléments de vue
import { ref } from 'vue';
import MapOsm from '../components/MapOsm.vue'


</script>

<template>

<div class="landing-page">
  <div class="video-wrapper text-center">
    <video width="" autoplay loop muted>
      <source src="@/assets/video1.mp4" type="video/mp4">
      Votre navigateur ne prend pas en charge la vidéo HTML5.
    </video>
    <div class="overlay-text">
      <h1>Donnez-vous le luxe d’apprécier.</h1>
      <p class="description">Découvrez notre nouvelle paire Vuetur.</p>
     </div>
     <router-link to="/presentation">
        <button class="video-button">Découvrir</button>
    </router-link>
  </div>
  <div class="cards">
  <div class="cards-container">
    <div class="card" v-for="product in products" :key="product.id">
      <img src="@/assets/lunettes.png" alt="Product Image" class="product-image">
      <div class="product-details">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="product-price">{{ product.price }} €</p>
        <div class="product-colors">
          <div v-for="color in product.colors" :key="color" :style="{backgroundColor: color}" class="color-circle"></div>
        </div>
        <button class="add-to-cart-btn">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="cards-container">
    <div class="card" v-for="product in products" :key="product.id">
      <img src="@/assets/lunettes.png" alt="Product Image" class="product-image">
      <div class="product-details">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="product-price">{{ product.price }} €</p>
        <div class="product-colors">
          <div v-for="color in product.colors" :key="color" :style="{backgroundColor: color}" class="color-circle"></div>
        </div>
        <button class="add-to-cart-btn">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="cards-container">
    <div class="card" v-for="product in products" :key="product.id">
      <img src="@/assets/lunettes.png" alt="Product Image" class="product-image">
      <div class="product-details">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="product-price">{{ product.price }} €</p>
        <div class="product-colors">
          <div v-for="color in product.colors" :key="color" :style="{backgroundColor: color}" class="color-circle"></div>
        </div>
        <button class="add-to-cart-btn">Ajouter au panier</button>
      </div>
      </div>
    </div>
  </div>
</div>
<MapOsm />


</template>

<script>
export default {
name: "LandingPage",
data() {
  return {
    products: [
      {
        id: 1,
        name: "Vuetur",
        description: "Découvrez les lunettes VueTur : la fusion parfaite entre esthétique, innovation et utilité.",
        price: 50,
        image: "@/assets/lunettes3.jpg",
        colors: ["#FF0000", "#00FF00", "#0000FF"]
      },
      // ... (autres produits) ...
    ]
  };
}
};
</script>

<style scoped>
.video-wrapper {
position: relative;
width: 100%;
}

.overlay-text {
position: absolute;
top: 40px;
left: 80px;
color: white; 
}

.overlay-text h1 {
color: var(--fond, #E5F1F1);
font-family: Outfit, sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
}

.description {
color: rgb(234, 234, 234);
font-family: Outfit, sans-serif;
font-size: 20px;
text-shadow: 1px 1px 2px rgba(69, 69, 69, 0.5);
}

.video-button {
position: absolute;
top: 900px;
left: 1600px;
padding: 20px 40px;
background-color: rgb(34, 0, 255);
border: none;
border-radius: 5px;
font-family: outfit,bold, sans-serif, ;
color: white;
font-size: 20px;
cursor: pointer;
transition: background-color 0.3s;
}
&:hover {
  background-color: rgba(255, 255, 255, 1);
}

.cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.cards {
  display: flex;
  justify-content: center;
  justify-items: center;
  
}
.card {
  border: 1px solid #e0e0e0;
  border-radius: 20px;

}

.product-image {
  width: 50%;
  object-fit: cover;
}

.product-details {
  font-family: outfit, sans-serif;
  padding: 20px;
  width: 50%;
}

.product-price {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  margin-top: 10px;
}

.product-colors {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
}

.add-to-cart-btn {
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #2b00ff;
  color: white;
  cursor: pointer;
}

</style> 
