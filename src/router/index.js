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
    component: () => import('@/views/WritingView'),
    beforeEnter: (to, from, next) => {
      const verifyWord = sessionStorage.getItem('verifyWord')
      if (verifyWord === '前端开发') {
        next()
        return undefined
      }
      alert('请先输入口令')
      next('/verify')
    }
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
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('@/components/WritingVerify')
  }
]

const router = new VueRouter({
  // mode: 'has',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
