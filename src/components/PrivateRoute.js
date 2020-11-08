import React from 'react'

import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from './../contexts'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = React.useContext(AuthContext.Context)

  return <Route {...rest} render={(props) => {
    if (authContext?.user) {
      return <Component {...props} />
    }

    return <Redirect to="/" />
  }} />
}

export default PrivateRoute
