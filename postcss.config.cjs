/**
 * @project: vue3-ts-template
 * @file:    postcss.config.cjs
 * @author:  jianghongxu
 * @date:    2023/1/2 22:40
 * @description: 请输入文件描述信息
 */
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {}
  }
}
