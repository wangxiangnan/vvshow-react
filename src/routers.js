import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Bundle from './utils/Bundle';

const Footer = () => (
  <Bundle load={() => import('./pages/photo')}>
    {Container => <Container />}
  </Bundle>
)

const NotFound = () => (
  <Bundle load={() => import('./pages/notFound')}>
    {Container => <Container />}
  </Bundle>
)

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Footer} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
  
)

export default Routes;