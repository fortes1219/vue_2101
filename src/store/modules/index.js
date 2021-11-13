import camelCase from 'lodash/camelCase'

// 用一點正則表示法來匹配檔案副檔名必須是「.js」
const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach((fileName) => {
  // 略過 index.js 這個檔案
  if (fileName === './index.js') return
  // 將下劃線分開來的檔名依序變為駝峰式(camelCase)命名
  const moduleName = camelCase(
    fileName.replace(/(\.\/|\.js)/g, ''),
  )

  modules[moduleName] = {
    ...requireModule(fileName).default,
  }
})

export default modules