import Vue from 'vue'
import App from './App.vue'
import '@/style/index.css'
import '@/style/reset.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
