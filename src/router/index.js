import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/summary',
    name: 'summary',
    component: () => import('@/views/SummaryView')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('@/views/TagView')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('@/views/NoteView')
  },
  {
    path: '/life',
    name: 'life',
    component: () => import('@/views/MyLife')
  },
  {
    path: '/trip',
    name: 'trip',
    component: () => import('@/views/TripView')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('@/views/MyFriends')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
