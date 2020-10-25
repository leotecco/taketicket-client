import React from 'react'

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
    <div>Dashboard</div>

    <Button onClick={onClickLogout}>Sair</Button>
  </div>
}

export default Dashboard
