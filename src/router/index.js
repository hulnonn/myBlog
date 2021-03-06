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
    path: '/writing/:articleId?',
    name: 'writing',
    component: () => import('@/views/WritingView'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (screen.width < 1500) {
        alert('编辑页仅支持屏幕分辨率在 1500px 以上的设备')
        return undefined
      }
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
    path: '/search/:keyword?',
    name: 'search',
    component: () => import('@/views/SearchView'),
    props: true
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
    path: '/verify/:articleId?',
    name: 'verify',
    component: () => import('@/components/WritingVerify'),
    props: true
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
