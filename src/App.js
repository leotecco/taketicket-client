import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { AuthContext } from './contexts'
import { PrivateRoute } from './components'
import pages from './pages'

function App() {
  return (
    <AuthContext.Provider>
      <Router>
        <Switch>
          <Route path="/" component={pages.Home} exact />
          <Route path="/login" component={pages.Login} exact />
          <Route path="/register" component={pages.Register} exact />
          <PrivateRoute path="/dashboard" component={pages.Dashboard} exact />
          <PrivateRoute path="/events/new" component={pages.NewEvent} exact />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
