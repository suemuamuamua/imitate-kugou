import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  // state:{
  //   selectedNav: '1'
  // },
  // getters: {
  //   selectedNav: state => state.selectedNav
  // },
  // mutations:{
  //   setNav: (state,nav)=> {
  //     state.selectedNav = nav
  //   }
  // }
  state,
  getters,
  mutations,
  actions
})

