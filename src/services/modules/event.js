import apiAuth from './../apiAuth'

const listEvents = () =>{
  return apiAuth.get('v1/events/');
}

export default {
    listEvents
}
