import Vue from 'vue'
import App from './App'
import NaviBar from './pages/publicComponets/naviBar.vue'
import http from './utils/http.js'

Vue.config.productionTip = false
Vue.component('navi-Bar',NaviBar);
Vue.prototype.http =http

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
