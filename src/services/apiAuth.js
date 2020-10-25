import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

instance.interceptors.request.use((request) => {
  request.headers['Authorization'] = window.localStorage.getItem('token')

  return request
})

export default instance
