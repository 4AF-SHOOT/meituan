import axios from 'axios'
axios.defaults.baseURL = 'http://mock-api.com/6KL9j6zk.mock'
axios.interceptors.request.use(function (config) {
  console.log(config)
  config.params = {
    ...config.params,
    appkey: '123321'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
