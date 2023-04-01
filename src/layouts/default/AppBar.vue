<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from "vue";
import Header from '@/components/section/Header.vue'

onMounted(() => {
  window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("bg-transparent");
    const main = document.getElementById("mainID");
    const sticky = main.offsetTop;
    if (window.scrollY >= sticky)  {
      navbar.classList.remove("bg-transparent");
    }
    else navbar.classList.add("bg-transparent");
  }
});
</script>

<template>
  <Header />
</template>