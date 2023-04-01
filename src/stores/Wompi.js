import { ref } from 'vue'
import { defineStore } from 'pinia'
import { customAlphabet } from 'nanoid'
import { currency } from "@/data/dataComponents";

export const useWompiStore = defineStore('wompi', () => {
  const cart = ref([])
  const lStorage = localStorage.getItem('cart')

  if (lStorage) {
    cart.value = JSON.parse(lStorage)
  }
  
  const addCart = (item) => {
    cart.value.push(item)
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
  
  const totalCart = () => {
    var totalCart = cart.value.reduce((sum, item) => (sum + (item.price * currency)), 0)
    return totalCart
  }

  const remove = (id) => {
    localStorage.removeItem('cart')
    cart.value = cart.value.filter(i => i.id !== id)
    localStorage.setItem('cart', JSON.stringify(cart.value))
}

  const Checkout = (total) => {
    const nanoid = customAlphabet('1234567890abcdef', 10)

    var checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: (total*100),
      reference: nanoid(10),
      publicKey: 'pub_prod_ijIZMSGCMjYIyvKl80K9ZW1vaG9QNkNJ',
      // redirectUrl: 'https://transaction-redirect.wompi.co/check', // Opcional
    })

    checkout.open(function(i) {
      var transaction = i.transaction

      console.log('Transaction ID', transaction.id);
      localStorage.removeItem('cart')
      cart.value = []
    })
  }

  return { cart, addCart, totalCart, remove, Checkout}
})
