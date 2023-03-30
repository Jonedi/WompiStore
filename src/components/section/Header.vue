<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Logo from '@/components/el/LogoDark.vue'
</script>

<template>
    <!-- -----------------------------------------------
        Start Header
    ----------------------------------------------- -->
    <v-app-bar
        flat
        relative
        class="app-header"
        id="navbar"
    >
        <v-container class="py-0 fill-height">
            <v-toolbar class="justify-start">
                <!-- Logo -->
                <div class="logo py-3">
                    <Logo />
                </div>
            </v-toolbar>
        </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
        End Header
    ----------------------------------------------- -->
</template>

<style lang="scss" scoped>
.maxWidth{
    max-width: 1400px;
    margin: auto;
}
</style>    