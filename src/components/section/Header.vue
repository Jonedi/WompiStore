<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import { useDisplay } from 'vuetify'
import { headerMenu } from "@/data/dataComponents";
import Logo from '@/components/el/LogoDark.vue'
const isActive = ref(null)
const drawer = ref(null)
const tab = ref(null)
const { xlAndUp } = useDisplay();
</script>

<template>
    <!-- -----------------------------------------------
        Start Header
    ----------------------------------------------- -->
    <v-app-bar
        flat
        class="app-header"
        id="navbar"
    >
        <v-container class="py-0 fill-height">
            <v-toolbar class="justify-start">
                <!-- Logo -->
                <div class="logo py-3">
                    <Logo />
                </div>
                <v-app-bar-nav-icon
                    width="30"
                    class="drawer-icon ml-auto  mr-0"
                    @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>
                <!-- Desktop view Navigation -->
                <div class="nav1">
                    <v-navigation-drawer color="white" v-model="drawer" temporary>
                    <div
                        class="navigation"
                        v-bind:class="[isActive ? 'd-block' : '']"
                        @click="isActive = !isActive"
                    >
                        <ul class="navbar-nav py-4" min-height="auto">
                            <li class="nav-item  mb-3" v-for="nav in headerMenu" :key="nav.title" text>
                                <router-link :to="nav.href" class="nav-link text-dark">{{
                                nav.title
                                }}</router-link>
                            </li> 
                        </ul>
                    </div>
                    </v-navigation-drawer>
                </div>
                
            </v-toolbar>
        </v-container>
    </v-app-bar>
    <!----sidebar menu drawer start----->
    <div class="nav1">
        <v-navigation-drawer color="white" v-model="drawer" temporary>
        <div
            class="navigation"
            v-bind:class="[isActive ? 'd-block' : '']"
            @click="isActive = !isActive"
        >
            <ul class="navbar-nav py-4" min-height="auto">
                <li class="nav-item  mb-3" v-for="nav in headerMenu" :key="nav.title" text>
                    <router-link :to="nav.href" class="nav-link text-dark">{{
                    nav.title
                    }}</router-link>
                </li> 
            </ul>
        </div>
        </v-navigation-drawer>
    </div>
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