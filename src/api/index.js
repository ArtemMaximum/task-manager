import axios from 'axios'
// import { checkExpires, manageHeaders } from 'lib/api-utils'

const UXCandy = {}

const api = axios.create({ baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Artem' })

UXCandy.request = (config) => api.request(config)

;['delete', 'get', 'head'].forEach((method) => {
  UXCandy[method] = (url, config) => UXCandy.request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  UXCandy[method] = (url, data, config) => {
    return UXCandy.request({ ...config, method, url, data })
  }
})

export default UXCandy