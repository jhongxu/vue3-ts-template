import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createSetupExtend from './setup-extend'
import createComponents from './components'
import createSvgIcon from './svg-icon'
import createEslint from './eslint'
import createRemoveConsole from './remove-console'
import type { Plugin } from 'vite'
import createStylelint from './stylelint'
import { loadEnv } from 'vite'
import createCompression from './compression'

const createVitePlugins = (mode: string, isBuild = false) => {
  const { VITE_BUILD_COMPRESS = '' } = loadEnv(mode, process.cwd())
  const vitePlugins = [vue()]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createComponents())
  vitePlugins.push(createSvgIcon(isBuild))
  vitePlugins.push(createEslint())
  vitePlugins.push(<Plugin>createRemoveConsole())
  vitePlugins.push(createStylelint())
  vitePlugins.push(...createCompression(isBuild, VITE_BUILD_COMPRESS))
  return vitePlugins
}

export default createVitePlugins
