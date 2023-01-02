/**
 * @project: vue3-ts-template
 * @file:    logger.ts
 * @author:  jianghongxu
 * @date:    2023/1/3 00:23
 * @description: 请输入文件描述信息
 */
import { cloneDeep, isArray } from 'lodash-es'

const isDev = import.meta.env.DEV

function start(logName: string) {
  console.group(`output => %c${logName}`, 'color:green;')
}

function end(logName: string) {
  console.log(
    `log end <============================> %c${logName}`,
    'color:red;'
  )
  console.groupEnd()
}

function log(target: any, index = '') {
  const logStart = index ? `${index}: ` : ''
  console.log(logStart, target)
}

function getName(target: any) {
  return Object.keys(target)[0]
}

function main(target: any, logName = '') {
  logName = logName || getName(target)
  start(logName)
  for (const key in target) {
    if (Reflect.has(target, key)) {
      const value = target[key]
      if (isArray(value)) {
        value.forEach((item: any, index: number) => {
          log(cloneDeep(item), String(index + 1))
        })
      } else {
        log(cloneDeep(value))
      }
    }
  }
  end(logName)
}

export function println(target: any, logName = '') {
  if (isDev) {
    main(target, logName)
  }
}
