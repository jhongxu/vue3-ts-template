/**
 * @project: vue3-ts-template
 * @file:    eslint.ts
 * @author:  jianghongxu
 * @date:    2023/1/2 22:34
 * @description: 请输入文件描述信息
 */
import eslint from 'vite-plugin-eslint'

const createEslint = () =>
  eslint({
    cache: false,
    include: ['src/**/*.js', 'src/**/*.vue'],
    emitWarning: false
  })

export default createEslint
