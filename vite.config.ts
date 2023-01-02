import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './vite/plugins'
import envResolver from './vite/configs'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('env', env)
  return {
    ...envResolver(mode),
    plugins: createVitePlugins(mode, command === 'build'),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
