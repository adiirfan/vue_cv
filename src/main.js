import Vue from 'vue'
import Eagle from 'eagle.js'
// import eagle.js default styles
import 'eagle.js/dist/eagle.css'
// import animate.css for slide transition
import 'animate.css'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.use(Eagle)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
