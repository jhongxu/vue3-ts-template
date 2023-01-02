/**
 * @project: vue3-ts-template-v2
 * @file:    shims-axios.d.ts
 * @author:  jianghongxu
 * @date:    2022/12/29 23:01
 * @description: 请输入文件描述信息
 */

import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    isToken?: boolean
    repeatSubmit?: boolean
    Authorization?: string
  }
}
