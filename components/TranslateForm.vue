<template>
  <div class="translateForm">
    <el-form>
      <el-input
        v-model="textContent"
        class="input"
        placeholder="输入要翻译的内容"/>
      <el-select
        v-model="language"
        placeholder="请选择">
        <el-option
          v-for="item in languageOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
      <el-button @click="translateText">翻译</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'TranslateForm',
  data() {
    return {
      language: 'zh-cn',
      textContent: '',
      languageOptions: [
        {
          value: 'en',
          label: 'English'
        },
        {
          value: 'zh-cn',
          label: '中文'
        },
        {
          value: 'kr',
          label: '韩语'
        }
      ]
    }
  },
  methods: {
    translateText(e) {
      this.$emit('translateClickedCallback', this.textContent, this.language)
    }
  }
}
</script>

<style scoped>
.input {
  width: 199px;
}
</style>
