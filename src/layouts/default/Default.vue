<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app class="container-xl">
      <AppBar />
      <default-view id="mainID" class="mt-15"/>
      <Footer />
    </v-app>
  </template>
  
  <script setup>
  import AppBar from '@/layouts/default/AppBar.vue'
  import Footer from '@/components/section/Footer.vue'
  import DefaultView from './View.vue'
  </script>
  
  <style lang="scss">
  .container-xl {
    max-width: 1400px;
    margin: auto;
  }
  </style>