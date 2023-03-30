<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import logo from '@/assets/logoDark.png';
</script>

<template>
    <router-link to="/" class="d-flex">
        <v-img :src="logo" aspect-ratio="16/9" :width="150" alt="Logo Jon Tmarz" class="logo__py" />
    </router-link >
</template>