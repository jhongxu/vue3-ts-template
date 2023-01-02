/**
 * @project: vue3-ts-template
 * @file:    permission.ts
 * @author:  jianghongxu
 * @date:    2023/1/2 23:44
 * @description: 请输入文件描述信息
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
