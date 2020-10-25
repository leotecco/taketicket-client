import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { AuthContext } from './contexts'
import pages from './pages'

function App() {
  return (
    <AuthContext.Provider>
      <Router>
        <Switch>
          <AuthContext.Context.Consumer>
            {({ user }) => {
              if (!user) {
                return <Route path="/">
                  <Route path="/" component={pages.Home} exact />
                  <Route path="/login" component={pages.Login} exact />
                  <Route path="/register" component={pages.Register} exact />
                  <Route path="*">
                    <Redirect to="/" />
                  </Route>
                </Route>
              }

              return <Route path="/">
                <Route path="/" component={pages.Home} exact />
                <Route path="/dashboard" component={pages.Dashboard} exact />
                <Route path="/events/new" component={pages.NewEvent} exact />
                <Route path="*">
                  <Redirect to="/dashboard" />
                </Route>
              </Route>
            }}
          </AuthContext.Context.Consumer>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
