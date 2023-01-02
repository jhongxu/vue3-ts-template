import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000
})

service.interceptors.request.use(
  (config) => {
    config.isToken
    return config
  },
  (error) => {
    console.error('axios request error', error)
  }
)

service.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data)
  },
  (error) => {
    console.error('axios response error', error)
  }
)

export default service
