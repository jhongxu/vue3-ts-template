import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const createAutoImport = () => {
  return AutoImport({
    imports: ['vue', 'pinia', 'vue-router'],
    resolvers: [ElementPlusResolver()],
    dts: 'types/auto-import.d.ts',
    eslintrc: {
      // 默认false, true启用。false生成一次就可以，避免每次工程启动都生成
      enabled: true,
      filepath: './.eslintrc-auto-import.json', // 生成json文件
      globalsPropValue: true
    }
  })
}

export default createAutoImport
