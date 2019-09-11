import Vue from 'vue'
import Vuex from 'vuex'

// This allows vue to access the store
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // This stops anything from accessing the state unless it is through "action" or "mutation"
  state: {
    // These are basically the global states for the application thing we want to access everywhere
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  // Mutation in vuex allow us to modify the state these mutations can be tracked using the Vue debug tools
  // Mutation can not be called directly you must call a action that calls a mutation
  mutations: {
    setToken (state, token) {
      state.token = token
      if (state.token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  // Actions are Vuex version of methods
  // If we want to modify anything in the state we must call a action that then calls a mutation. The mutation then modifies the state
  actions: {
    // Calls the setToken mutation and passes the token
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
