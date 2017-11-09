<template>
  <div class="cart">
    <h2>Shop Cart</h2>
    <product-list></product-list>
    <cart></cart>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import Cart from '@/components/Cart'
export default {
  components: {
    ProductList,
    Cart
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
