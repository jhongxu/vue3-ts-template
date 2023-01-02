// 分开打包
const splitDependencies = ['element-plus']

/**
 * @type {import('vite').UserConfig}
 */
const buildConfig = {
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: true,
    //  chunk 大小警告的限制（以 kb为单位）
    chunkSizeWarningLimit: 2048,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
    rollupOptions: {
      // 输出文件命名
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id: string) {
          // 创建一个vendor包含所有依赖项的块node_modules
          for (const dependency of splitDependencies) {
            if (id.includes(dependency)) {
              return dependency
            }
          }
        }
      }
    }
  }
}

export default buildConfig
