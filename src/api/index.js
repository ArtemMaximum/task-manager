import axios from 'axios'
import { checkExpires, manageHeaders } from 'lib/api-utils'

const devStat = {}

const api = axios.create({ baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/' })

let refreshToken;

devStat.request = (config) => api.request(config)

;['delete', 'get', 'head'].forEach((method) => {
  devStat[method] = (url, config) => {
    refreshToken = readCookie('refresh_token')
    
    if (!checkExpires()) {
      devStat.request({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'post',
        url: '/oauth/r/token'
      })
    }
    devStat.request({ ...config, method, url })
  }
})

;['post', 'put', 'patch'].forEach((method) => {
  devStat[method] = (url, data, config) => devStat.request({ ...config, method, url, data })
})

export default devStat