// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import RegionsPlugin from './plugins/regions'
import StatesPlugin from './plugins/states'
import CitiesPlugin from './plugins/cities'

Vue.config.productionTip = false

Vue.use(RegionsPlugin)
Vue.use(StatesPlugin)
Vue.use(CitiesPlugin)

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
