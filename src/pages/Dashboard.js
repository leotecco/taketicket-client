import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from './../components'

import { AuthContext } from './../contexts'

const Dashboard = () => {
  const authContext = React.useContext(AuthContext.Context)

  const onClickLogout = (event) => {
    event.preventDefault()

    window.localStorage.removeItem('token')
    authContext.setUser(null)
  }

  return <div className="p-2">
    <Link to="/events/new">
      <Button color="blue-600" textColor="white" className="mb-2">Criar evento</Button>
    </Link>
    <Link to="/5ebb3cb51017232443039d31/tickets/">
      <Button color="blue-600" textColor="white" className="mb-2">Criar ingresso</Button>
    </Link>    
    <Link to="/5ebb22c8fa97cb121c1ac818/events/myEvents">
      <Button color="blue-600" textColor="white" className="mb-2">Meus Eventos</Button>
    </Link>    
    <Button onClick={onClickLogout}>Sair</Button>
  </div>
}

export default Dashboard
