<script setup>
  // Import éléments de vue
  import { ref,onMounted } from 'vue'

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");
let listLunettes = ref([])
  // Récupération des données
  onMounted(async () => {
    listLunettes.value = await pb.collection("lunettes").getFullList({sort: "nom"})
  })
</script>

<template>
  <main>

      <div class="offre">
        <p class="texte-offre">Offre de lancement : -10% offert d’achat pour tout type de lunette</p>

      </div>
      {{ listLunettes }}
  </main>
</template>

<style scoped>
.offre {
  background: #000;
  height: 39px;
  flex-shrink: 0;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;     
}
.texte-offre {
    font-family: Outfit, sans-serif;
  color: var(--blanc-cadre, #FFF);
  font-size: 16px;
  margin: 0px;
  text-align: center;
}

.presentation-lunette {
  margin-top: 10px;
  background: linear-gradient(180deg, #D0C29A 21.35%, rgba(158, 157, 130, 0.00) 100%);
  height: 400px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.h1-coeur {
  color: #000;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 50px;
  flex: 1;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.lunettes-home {
  width: 750px;
  height: 250px;
}

.p-presentation1,
.p-presentation2 {
  color: #000;
  font-size: 20px;
  margin: 5px 0;
}

.more-text1 {
  left: 10px; 
  color: black;
  background: var(--beige-cadre, #EFE5CE); 
  padding: 10px 20px; 
  border: 1px solid #000; 
  cursor: pointer; 
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}
.more-text2 {
  position: absolute;
  bottom: 50px; 
  right: 100px; 
  color: black;
  background: var(--beige-cadre, #EFE5CE); 
  padding: 10px 20px; 
  border: 1px solid #000; 
  cursor: pointer; 
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
}

.container-essence {
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin: 10px;
}

.img-lunettes-essence{
  width: 392px;
  height: 410px;
  flex-shrink: 0;
}
.text-container-essence {
  color: #000;
  font-size: 20px;
  margin: 0 20px; /* Ajout d'une marge pour espacer le texte des images */
}
.modes {
  margin-top: 10px;
  background: #F4D5A0;
  display: flex;          
  justify-content: space-around; 
  align-items: center;    
  padding: 30px;          
}

.mode-item {
  display: flex;
  flex-direction: column; 
  align-items: center;   
}

.mode-item p {
  margin-top: 5px;       
  text-align: center;    
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.5px;
  text-transform: uppercase;
}
.container-coucher-soleil {
  display: flex;
  align-items: center; /* Pour aligner verticalement les éléments à l'intérieur */
}

.img-lunette-coucher-soleil {
  margin: 10px;
  width: 593px;
  height: 392px;
  flex-shrink: 0;
}

.texte-coucher-soleil {
  color: #000;
  font-size: 20px;
  margin-left: 20px; /* Pour donner un peu d'espace entre l'image et le texte */
  margin-right: 40px;
}
.container-lunette-plage {
  position: relative;
  width: 100%; 
}

.img-lunette-plage {
  width: 100%; 
  height: auto; 
}

.more-text2 {
  position: absolute;
  bottom: 50px; 
  right: 100px; 
  color: black;
  background: var(--beige-cadre, #EFE5CE); 
  padding: 10px 20px; 
  border: 1px solid #000; 
  cursor: pointer; 
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
}
</style>

