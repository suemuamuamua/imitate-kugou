// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/neat-min.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/reset-mint.css'
Vue.use(Mint)
console.log(store)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
