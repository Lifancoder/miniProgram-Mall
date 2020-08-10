import Vue from 'vue'
import App from './App'
import NaviBar from './pages/publicComponets/naviBar.vue'

Vue.config.productionTip = false
Vue.component('navi-Bar',NaviBar);

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
