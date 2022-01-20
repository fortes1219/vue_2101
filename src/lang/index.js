import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import * as cookie from '@/utils/cookies'

const config = window['config']
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: '',
  messages: {},
  silentTranslationWarn: true
})

// default
cookie.setLanguage('zh_tw')

const loadedLanguages = []

export const getLocale = () => {
  const cookieLanguage = cookie.getLanguage()
  // from cookie
  if (cookieLanguage) {
    return cookieLanguage
  }

  // from default config
  if (config.LOCALE) {
    return config.LOCALE
  }
  return 'zh_tw'
}

const locale = getLocale()

const setI18nLanguage = (lang) => {
  i18n.locale = lang
  cookie.setLanguage(lang)
  return lang
}

export const loadLanguageAsync = async (lang) => {
  // If the same language
  if (i18n.locale === lang) {
    return setI18nLanguage(lang)
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return setI18nLanguage(lang)
  }

  // If the language hasn't been loaded yet
  const messages = await getMessages(lang)
  i18n.setLocaleMessage(lang, messages)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}

const getMessages = async (locale) => {
  const elementUILocMap = {
    en: 'en',
    zh_tw: 'zh-TW',
    jp: 'ja',
  }
  let langFile
  if (locale === 'zh_tw') {
    langFile = await (await fetch(`locale/zh.json`)).json()
  } else if (locale === 'en') {
    langFile = await (await fetch(`locale/en.json`)).json()
  } else if (locale === 'jp') {
    langFile = await (await fetch(`locale/jp.json`)).json()
  }

  const elLangFile = await import(/* webpackChunkName: "lang-elementui-[request]" */`element-ui/lib/locale/lang/${elementUILocMap[locale]}`)
  return { ...langFile, ...elLangFile.default}
}

loadLanguageAsync(locale)

export default i18n