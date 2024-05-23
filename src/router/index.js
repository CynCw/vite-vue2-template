import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/views/index.vue'),
      },
      {
        path: '/scan',
        component: () => import('@/views/scan.vue'),
      },
      {
        path: '/mine',
        component: () => import('@/views/mine.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
