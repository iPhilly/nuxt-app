<template>
  <div>
    <h1>VUEX</h1>
    {{ $store.state.counter.count }}
    <el-button @click="increment">增加</el-button>
    <el-button @click="decrement">减少</el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Counter',
  layout: 'none',
  methods: {
    // mapActions(['increment','decrement'])
  }
}
</script>

<style scoped>
</style>
