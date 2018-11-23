<template>
  <div>
    <h1>VUEX</h1>
    {{ $store.state.count }}
    <el-button @click="increment">增加</el-button>
    <el-button @click="decrement">减少</el-button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'Counter',
  layout: 'none',
  methods: {
    // increment() {
    //   this.$store.commit('Counter/increment')
    // },
    // decrement() {
    //   this.$store.commit('Counter/decrement')
    // },
    ...mapMutations({
      increment: 'Counter/increment',
      decrement: 'Counter/decrement'
    })
  }
}
</script>

<style scoped>
</style>
