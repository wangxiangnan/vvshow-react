import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Bundle from './utils/Bundle';


const Mine = () => (
  <Bundle load={() => import('./pages/mine')}>
    {Container => <Container />}
  </Bundle>
)

const Word = () => (
  <Bundle load={() => import('./pages/word')}>
    {Container => <Container />}
  </Bundle>
)

const Photo = () => (
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
      <Route path="/" exact component={Photo} />
      <Route path="/mine" exact component={Mine} />
      <Route path="/word" exact component={Word} />
      <Route path="/photo" exact component={Photo} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
  
)

export default Routes;