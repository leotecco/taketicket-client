import apiAuth from './../apiAuth'

const ticket = ({name, value, event}) =>{
    console.log({name, value, event})
  return apiAuth.post('v1/events/' + event +'/tickets', {name, value})
}


export default {
    ticket
}
