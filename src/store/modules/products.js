import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts (ss) {
    console.log(ss)
    shop.getProducts(products => {
      console.log(products)
      ss.commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    console.log(products)
    state.all = products
  },
  [types.ADD_TO_CART] (state, p) {
    let id = p.id
    console.log(p)
    state.all.find(p => p.id === id).inventory--
  },
  [types.DECREASE_CART](state, {id}) {
    console.log(id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
