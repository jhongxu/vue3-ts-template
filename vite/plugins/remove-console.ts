/**
 * @project: vue3-ts-template
 * @file:    remove-console.ts
 * @author:  jianghongxu
 * @date:    2023/1/2 22:36
 * @description: 请输入文件描述信息
 */
import removeConsole from 'vite-plugin-remove-console'

const createRemoveConsole = () =>
  removeConsole({
    external: ['src/main.js']
  })

export default createRemoveConsole
