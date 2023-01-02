/**
 * @project: vue3-ts-template
 * @file:    compression.ts
 * @author:  jianghongxu
 * @date:    2023/1/2 23:54
 * @description: 请输入文件描述信息
 */
import compression from 'vite-plugin-compression'

const createCompression = (isBuild = false, VITE_BUILD_COMPRESS = '') => {
  if (!isBuild || !VITE_BUILD_COMPRESS) {
    return []
  }
  const plugin = []
  const compressList = VITE_BUILD_COMPRESS.split(',')
  if (compressList.includes('gzip')) {
    // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
    plugin.push(
      compression({
        ext: '.gz',
        deleteOriginFile: false
      })
    )
  }
  if (compressList.includes('brotli')) {
    plugin.push(
      compression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: false
      })
    )
  }
  return plugin
}

export default createCompression
