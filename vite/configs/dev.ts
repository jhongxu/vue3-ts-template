/**
 * @type {import('vite').UserConfig}
 */
const devConfig = {
  build: {
    // 设置最终构建的浏览器兼容目标
    // 构建后是否生成 source map 文件
    sourcemap: 'inline'
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    // port: 80,
    // 监听所有地址 127.0.0.1  localhost   192.168.1.x
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      '/dev-api': {
        // target: 'http://localhost:8080',
        target: 'https://proxy.jhxu.xyz',
        changeOrigin: true,
        rewrite: (p: string) => p.replace(/^\/dev-api/, '')
      }
    }
  }
}

export default devConfig
