import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Regions from '@/components/Regions'
import States from '@/components/States'
import Cities from '@/components/Cities'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/regioes', name: 'Regions', component: Regions },
    { path: '/estados', name: 'States', component: States },
    { path: '/cidades', name: 'Cities', component: Cities }
  ]
})
