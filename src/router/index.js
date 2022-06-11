import Vue from 'vue'
import VueRouter from 'vue-router'
// import Article from '@/views/ArticleView/index.vue'
// import GainArticle from '@/views/ArticleView/GainArticle.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/article',
    name: 'article',
    redirect: '/article/digestList/other',
    component: () => import('@/views/ArticleView'),
    children: [
      {
        path: 'gainArticle/:articleId?',
        name: 'gainArticle',
        component: () => import('@/views/ArticleView/GainArticle.vue'),
        props: true
      },
      {
        path: 'digestList/:category?',
        name: 'digestList',
        component: () => import('@/views/ArticleView/DigestList.vue'),
        props: true
      }
    ]
  },
  {
    path: '/writing',
    name: 'writing',
    component: () => import('@/views/WritingView')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('@/views/TagView')
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
  // base: process.env.BASE_URL,
  routes
})

export default router
