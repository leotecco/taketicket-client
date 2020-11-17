import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://taketicket-api.herokuapp.com' : 'http://localhost:3000',
});

instance.interceptors.request.use((request) => {
  request.headers['Authorization'] = window.localStorage.getItem('token')

  return request
})

export default instance
