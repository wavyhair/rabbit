/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 18:50:37
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-07 11:58:23
 * @FilePath: \rabbit-ts-vue3\src\utils\request.ts
 * @Description: request
 */
import Message from '@/components/XtxMessage'
import axios, { AxiosError } from 'axios'
import useStore from '@/store'
// 备用接口地址: http://pcapi-xiaotuxian-front-devtest.itheima.net/
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const instance = axios.create({
  // baseURL: 'http://pcapi-xiaotuxian-front.itheima.net/'
  baseURL,
  timeout: 5000,
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const { user } = useStore()
    const TOKEN = user.profile.token
    // 在发送请求之前做些什么
    if (TOKEN) {
      config.headers!.Authorization = `Bearer ${TOKEN}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: AxiosError<{ message: string }>) {
    if (!error.response) {
      Message.warning('网络异常，请稍后再试！')
    } else {
      Message.error(error.response.data.message)
    }
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
