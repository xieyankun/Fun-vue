<template>
  <ul>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price }}
      <br>
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        添加+
      </button>
      <span>{{count}}</span>
      <button
        @click="decreaseCart(p)">
        减少-
      </button>
      <cart-control></cart-control>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartControl from '@/components/CartControl'
export default {
  components: {
    CartControl
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters({
      products: 'allProducts'
    })
  },
  methods: {
    ...mapActions([
      'addToCart',
      'decreaseCart'
    ])
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
