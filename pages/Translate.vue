<template>
  <div class="translate">
    <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
    <translate-form @translateClickedCallback="_translateClickedCallback"/>
    <hr>

    <div>div{{ output }}</div>
    <translate-output v-text="output"/>
  </div>
</template>

<script>
import TranslateForm from '../components/TranslateForm'
import TranslateOutput from '../components/TranslateOutput'

export default {
  name: 'Translate',
  layout: 'none',
  components: {
    TranslateForm,
    TranslateOutput
  },
  data() {
    return {
      output: null
    }
  },
  methods: {
    _translateClickedCallback: function(text, lang) {
      this.$axios
        .get(`https://api.apiopen.top/EmailSearch?number=${text}`)
        .then(response => {
          this.output = response.data.result
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
</style>
