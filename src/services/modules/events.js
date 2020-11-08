import apiAuth from './../apiAuth'

const create = (formData) => {
  return apiAuth.post('v1/events', formData)
}

export default {
  create
}
