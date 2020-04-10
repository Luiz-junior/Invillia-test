import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id?" component={Home} />
      </Switch>
    </Router>
  )
}
