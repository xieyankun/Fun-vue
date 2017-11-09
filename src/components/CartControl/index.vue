<template>
  <div class="cartcontrol">
    <i class="icon iconfont icon-jia" @click="addItem"></i>
    <span>{{count}}</span>
    <i class="icon iconfont icon-jian" @click="decreaseItem"></i>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    good: {
      type: Object
    }
  },
  data () {
    return {
      count: 0
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    addItem (event) {
      this.count ++
    },
    decreaseItem (event) {
      this.count --
    }
  }
}
</script>

<style>
</style>
