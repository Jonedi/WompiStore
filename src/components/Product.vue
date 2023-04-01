<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref} from "vue";
import { useRoute, useRouter } from "vue-router";
import { products, currency } from "@/data/dataComponents";
import { useWompiStore } from "../stores/Wompi";

const { addCart } = useWompiStore()
const route = useRoute()
const router = useRouter()
const productId = parseInt(route.params.id)
const product = products.find(e => e.id === productId)
const size = ref('')
const items = ref(['XS', 'S', 'M', 'L', 'XL']);

const addProduct = () => {
    product.size = size.value
    addCart(product)
    router.push('/')
};
</script>

<template>
  <div class="my-4">
    <v-container>
        <h2 class="text-h2 my-3">{{ product.type }}</h2>
      <v-row align="center">
        <v-col cols="12" sm="6">
          <v-img
            cover
            width="auto"
            :src="`/src/assets/imgs/products/${product.img}`"
            :alt="product.name"
            :title="product.name"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row justify="center">
            <v-col cols="18">
              <h3 class="text-h3">{{ product.name }}</h3>
              <h6 class="text-body-2 my-3">{{ product.description }}</h6>
              <v-row class="py-3">
                <v-col cols="6">
                  <v-select
                    v-model="size"
                    :items="items"
                    hint="Seleccione una Talla"
                    item-title="Talla"
                    label="Talla"
                    placeholder="XS"
                    persistent-hint
                    return-object
                    density="compact"
                  />
                </v-col>
              </v-row>
              <h4 class="text-h4 my-5">Precio: $ {{ product.price * currency }}</h4>
              <v-btn size="small" elevation="4" class="mt-3" color="primary" @click="addProduct()" :disabled="!size">Agregar al Carrito</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="justify-space-around d-flex">
            <v-btn density="comfortable" color="warning" to="/">Volver</v-btn>
            <v-btn density="comfortable" color="secondary" to="/checkout">Checkout</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">

</style>
