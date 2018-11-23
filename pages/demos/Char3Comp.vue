<template>
  <div class="com">
    child components
    {{ name }} {{ age }}
    <br>
    <slot name="top"/>
    <el-button
      type="primary"
      @click="$emit('patch', age)">重置为{{ age }}</el-button>
    <h3>
      <slot name="bottom"/>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Char3Comp',
  data() {
    return {
      name: 'zhagnsan',
      age: 0
    }
  }
}
</script>

<style scoped>
.com {
  background-color: orange;
}
</style>
