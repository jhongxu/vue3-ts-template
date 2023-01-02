/**
 * @project: vue3-ts-template
 * @file:    svgicon.ts
 * @author:  jianghongxu
 * @date:    2023/1/2 22:14
 * @description: 请输入文件描述信息
 */
import * as components from '@element-plus/icons-vue'
import type { App } from 'vue'

export default {
  install: (app: App) => {
    Object.values(components).forEach((component) => {
      app.component(component.name, component)
    })
  }
}
