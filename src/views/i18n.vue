<template>
  <div class="row vertical" data-inset="1rem">
    <h1>{{ $t('header') }}</h1>
    <br>
    <el-select v-model="currentLang" @change="onLangChange">
      <el-option v-for="(item, i) in languageList" :key="i" :label="item.label" :value="item.value" />
    </el-select>
    <br>
  </div>
</template>

<script>
import { loadLanguageAsync } from '@/lang'
export default {
  name: 'i18n',
  data() {
    return {
      currentLang: '',
      languageList: [
        { label: '繁體中文', value: 'zh_tw' },
        { label: 'English', value: 'en' },
        { label: '日文', value: 'jp' }
      ]
    }
  },
  methods: {
    onLangChange(val) {
      console.log(val)
      loadLanguageAsync(val)
    }
  }
}
</script>