<script setup>
  import { RouterView } from 'vue-router'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  // Import pocketbase
  import PocketBase from 'pocketbase'
    // Objet pocketBase
    const pb = new PocketBase("http://127.0.0.1:8090");


  </script>

<template>
  <div>
    <Header/>
     <RouterView/>
    <Footer/>
  </div>
 
</template>