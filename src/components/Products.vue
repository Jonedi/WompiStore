<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { products } from "@/data/dataComponents";
import { ref } from "vue";
import { RouterLink } from 'vue-router'
import { currency } from "../data/dataComponents";


const loading = ref(false);
</script>

<template>
    <div>
        <v-container>
            <h2 class="text-center text-h1 text-break">Products</h2>
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    v-for="product in products"
                    :key="product.id"
                >
                    <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="374"
                    >
                        <template v-slot:loader="{ isActive }">
                            <v-progress-linear
                                :active="isActive"
                                color="deep-purple"
                                height="4"
                                indeterminate
                            ></v-progress-linear>
                        </template>

                        <router-link :to="`/product/${product.id}`">
                            <v-img
                                cover
                                width="auto"
                                :src="`/src/assets/imgs/products/${product.img}`"
                                :alt="product.name"
                                :title="product.name"
                            ></v-img>
                        </router-link>
                        <v-card-item>
                            <v-card-title>{{ product.name }}</v-card-title>
                            <v-card-subtitle>
                                <span class="me-1">{{ product.description }}</span>
                            </v-card-subtitle>
                            <v-card-text>
                                <div class="my-4 text-h6">
                                    $ {{ product.price * currency }}
                                </div>
                                <v-btn
                                    variant="text"
                                    size="x-small"
                                    :to="`/product/${product.id}`"
                                >
                                    Ver Producto
                                </v-btn>
                            </v-card-text>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>