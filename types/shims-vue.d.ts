/**
 * @project: vue3-ts-template
 * @file:    shims-vue.d.ts
 * @author:  jianghongxu
 * @date:    2023/1/3 00:09
 * @description: 请输入文件描述信息
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
