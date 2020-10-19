import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import pages from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={pages.Login} exact />
        <Route path="/register" component={pages.Register} exact />
        <Route path="/" component={pages.Home} exact />
      </Switch>
    </Router>
  )
}

export default App
