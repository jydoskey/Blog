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
      path: '/todocomment',
      name: 'todocomment',
      component: () => import('@/components/Mainpages/todocomment.vue')
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
