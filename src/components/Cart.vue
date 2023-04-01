<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { storeToRefs } from "pinia";
import { useWompiStore } from "../stores/Wompi";
import { currency } from "@/data/dataComponents";

const wompiStore = useWompiStore();
const { cart } = storeToRefs(useWompiStore())
const total = parseInt(wompiStore.totalCart());
</script>

<template>
    <div>
        <v-container>
            <h1 class="text-center text-h1 text-break">Carrito</h1>
            <v-row>
                <v-col cols="11">
                    <v-table>
                        <thead>
                        <tr>
                            <th class="font-weight-bold">Eliminar</th>
                            <th class="font-weight-bold">Imagen</th>
                            <th class="font-weight-bold">Nombre</th>
                            <th class="font-weight-bold">Tipo</th>
                            <th class="font-weight-bold">Talla</th>
                            <th class="font-weight-bold">Precio</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="item in cart"
                                :key="item.id"
                            >
                                <td>
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <v-btn icon="mdi-delete-circle" plain size="x-small" @click="wompiStore.remove(item.id)"></v-btn>
                                        </v-col>
                                    </v-row>
                                </td>
                                <td>
                                    <v-img
                                        width="80"
                                        :src="`/src/assets/imgs/products/${item.img}`"
                                        :alt="item.name"
                                        :title="item.name"
                                    />
                                </td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.size }}</td>
                                <td>{{ item.price * currency }}</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="text-right font-weight-bold">Total</td>
                                <td class="font-weight-black">{{ total }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="8" class="d-flex justify-space-around flex-column flex-sm-row">
                    <v-btn color="success" class="my-1 my-sm-0" @click="wompiStore.Checkout(total)">Pagar</v-btn>
                    <v-btn color="info" class="my-1 my-sm-0" to="/">Home</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>