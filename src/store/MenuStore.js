import { createStore } from 'vuex'
import CartStore from './CartStore'
export default createStore({
  state: {
    menuOpen : false
  },
  getters: {
    getValue(state){
      return state.menuOpen
    }
  },
  mutations: {
    closeMenu(state){
      state.menuOpen = false
    },
    showMenu(state){
      state.menuOpen = true
      
    }
  },
  actions: {
  },
  modules: {
    cart : CartStore
  }
})
