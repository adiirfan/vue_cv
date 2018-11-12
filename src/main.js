import Vue from 'vue'
import Eagle from 'eagle.js'
import 'eagle.js/dist/eagle.css'
import VTooltip from 'v-tooltip'
import 'animate.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VTooltip)
Vue.use(Eagle)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
