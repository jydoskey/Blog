import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: () => import('@/components/Authentication/signin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/components/Authentication/signup.vue')
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
