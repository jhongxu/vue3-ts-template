import devConfig from './dev'
import buildConfig from './build'

const envResolver = (mode: string) => {
  if (mode === 'development') {
    return devConfig
  }
  if (mode === 'production') {
    return buildConfig
  }
}

export default envResolver
