import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Bundle from './utils/Bundle';

const App = () => (
  <Bundle load={() => import('./app.js')}>
    {Container => <Container />}
  </Bundle>
)

const Foo = () => (
  <Bundle load={() => import('./foo.js')}>
    {Container => <Container />}
  </Bundle>
)

const Routes = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/foo">Foo</Link>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/foo" component={Foo} />
      </Switch>
    </div>
  </Router>
  
)

export default Routes;