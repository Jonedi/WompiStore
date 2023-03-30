import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWompiStore = defineStore('wompi', () => {
  const products = ref([])
  

  return { products }
})
