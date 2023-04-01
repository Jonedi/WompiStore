import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '@/views/ProductView.vue'),
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CheckoutView.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
