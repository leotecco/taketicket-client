import api from './../api'
import apiAuth from './../apiAuth'

const login = ({ email, password }) => {
  return api.post('v1/auth/login', { email, password })
}

const me = () => {
  return apiAuth.get('v1/auth/me')
}

export default {
  login,
  me
}
