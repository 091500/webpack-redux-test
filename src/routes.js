// ==== Node Modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// ==== Local Files
import { About, Home, Layout } from 'containers';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Layout} />
    <Route path="/about" component={About} />
    <Route path="/home" component={Home} />
  </Switch>
);
// ==== Routes must be exported in order for HMR to work.

export default routes;