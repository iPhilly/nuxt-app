<template>
  <div class="char1">
    <h1 v-if="isShow">{{ msg }}</h1>
    <h2 v-else>No {{ msg }}</h2>
    <div v-n="3"/>
  </div>
</template>

<script>
import './n'
export default {
  name: 'Char1',
  props: {
    msg: {
      type: String,
      default: 'Hello'
    }
  },
  data() {
    return {
      isShow: false,
      number: 20
    }
  }
}
</script>

<style scoped>
</style>
