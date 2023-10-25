<script setup>
  // Import éléments de vue
  import { ref } from 'vue'
</script>

<template>
  <div class="landing-page2">
    <div class="video-wrapper">
      <img src="@/assets/presentation.png" alt="Description de l'image">
      <div class="overlay-text">
        <h1>Vuetur, tout simplement</h1>
        <p class="description">Chaque visage est unique et mérite une paire de lunettes qui sublime sa singularité. Chez TaVue, nous avons compris l'importance de ce détail et c'est avec fierté que nous vous présentons notre dernière création : les lunettes "Vuetur".</p>
        <p class="reduction">Profitez d’une remise de 20% pour ouverture de votre premier compte et de 40% si la commande est effectuée avant le 05/10/2023</p>
       </div>
       <div class="paragraphe1">
        <h2>Une marque de créateur</h2>
        <p class="description_2">Ce qui rend les Vuetur vraiment exceptionnelles, c'est leur capacité à être totalement customisables. Vous n'achetez pas simplement une paire de lunettes, vous créez une œuvre d'art adaptée à votre visage. Chaque détail, de la couleur du cadre à la forme des verres, est choisi par vous. C'est une véritable collaboration entre nos artisans et vous, pour créer une paire qui reflète non seulement votre vision mais aussi votre essence.
          Plongez dans un univers où votre vision et votre style ne font qu'un. Découvrez Vuetur par TaVue et révélez au monde votre vraie nature.
        </p>
       </div>
       <div class="img_createur">
        <img src="@/assets/femmepresentation.png" alt="Description de l'image" width="400px">
       </div>
       <div class="gray-rectangle">
  <div class="vuetur-text-container">
    <p>
      Avec chaque paire de lunettes Vuetur, vous emportez avec vous une part de notre passion, notre dévouement et notre expertise. TaVue s'engage à offrir des lunettes qui combinent à la fois le design, la fonctionnalité et la durabilité. Avec Vuetur, vous faites l'expérience de la promesse TaVue : porter le futur avec élégance.
    </p>
  </div>
  <div>
    <div class="video-wrapper">
      <video width="1440" autoplay loop muted>
        <source src="@/assets/video2.mp4" type="video/mp4">
        Votre navigateur ne prend pas en charge la vidéo HTML5.
      </video>
      </div>
  </div>
    </div>
  </div>
</div>
</template>

<style>
.overlay-text {
  position: absolute;
  top: 20px;
  left: 80px;
  color: rgb(1, 1, 1); 
}

.overlay-text h1 {
  color: var(--fond, #1e1e1e);
  font-family: Outfit, sans-serif;
  font-size: 30px;
  font-style: bold;
  font-weight: 600;
  line-height: normal;
}

.description {
  padding-right: 500px;
  padding-bottom: 60px;
  color: rgb(101, 101, 101);
  font-family: inter, sans-serif;
  font-style: regular;
  font-size: 14px;
}

.paragraphe1{

  color: rgb(0, 0, 0);
}

.reduction {
  align-self: center;
  position: absolute;
  bottom: -650px;
  left: 80px;
  color: rgb(77, 77, 77);
  font-family: Outfit, sans-serif;
  font-size: 16px;
}

.paragraphe1 h2{
  padding-left: 150px;
  padding-top: 1000px;
  color: var(--fond, #1e1e1e);
  font-family: Outfit, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}



.description_2 {
  padding-top: 20px;
  padding-right: 800px;
  padding-left: 150px;
  color: rgb(77, 77, 77);
  font-family: Outfit, sans-serif;
  font-size: 16px;
}

.img_createur {
  padding-left: 800px;
  padding-top: 100px;
  padding-bottom: 100px;
  left: 80px;
}

.gray-rectangle .vuetur-text-container{
  padding: 50px;
  width: 1200px;
  height: 100px;
  background-color: rgb(40, 40, 40);
}

.vuetur-text-container {
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  color: rgb(255, 255, 255);
  text-align: center;
}


</style>

