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

    <Link to="/my-tickets">
      <Button color="blue-600" textColor="white" className="mb-2">Meus ingressos</Button>
    </Link>

    <Button onClick={onClickLogout}>Sair</Button>
  </div>
}

export default Dashboard
