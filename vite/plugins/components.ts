import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const createComponents = () =>
  Components({
    resolvers: [ElementPlusResolver()],
    dirs: ['src/components/'],
    dts: 'types/components.d.ts',
    deep: true
  })

export default createComponents
