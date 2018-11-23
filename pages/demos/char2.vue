<template>
  <div>
    <div
      @click="click">increase number </div>
    <div>{{ counter }}</div>
    <hr>
    <Char3Comp @patch="_patch">
      <div slot="top">{{ counter }}</div>
      <div slot="bottom">{{ counter }} @ bottom</div>
    </Char3Comp>
  </div>
</template>

<script>
import Char3Comp from './Char3Comp'
export default {
  name: 'Char2',
  components: {
    Char3Comp
  },
  data: function() {
    return {
      counter: 10
    }
  },
  methods: {
    click() {
      this.counter += 1
    },
    _patch: function(e) {
      this.counter = e
    }
  }
}
</script>

<style scoped>
</style>
