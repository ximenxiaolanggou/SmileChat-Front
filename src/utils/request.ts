import axios from 'axios'
import { ElMessage } from 'element-plus'
//获取存储用户信息的仓库对象
//创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})
//请求拦截器
request.interceptors.request.use((config) => {
  const token = localStorage.getItem('TOKEN')
  if (token) {
    config.headers['Authorization'] = `bearer ${token}`
  }
  return config
})
//响应拦截器
request.interceptors.response.use(
  (response) => {
    console.log('response', response)
    return response.data
  },
  (error) => {
    const status = error.response.status
    if (status == 500) {
      console.log(error.response.data)
      const msg = error.response.data && error.response.data.msg
      ElMessage({
        showClose: true,
        message: msg || '服务器错误',
        type: 'error',
      })
    }
    return Promise.reject(error.response.data)
  },
)
export default request
