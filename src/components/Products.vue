<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { products } from "@/data/dataComponents";
</script>

<template>
    <div>
        <h2>Products</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <p>Price: ${{ product.price }}</p>
                <img :src="product.img" alt="">
                <button @click="addToCart(product.id)">Add to cart</button>
            </li>
        </ul>
    </div>
</template>