import { ADD_TO_CART } from './../mutation-types'
const state = {
  tool: 'run compile'
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  [ADD_TO_CART](status) {
    console.log('status', status)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}