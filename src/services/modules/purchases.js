import apiAuth from './../apiAuth'

const list = (formData) => {
  return apiAuth.get('v1/purchases')
}

export default {
  list
}
