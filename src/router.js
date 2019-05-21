import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';

import Loading from 'components/Loading';
import 'css/app.css';

const App = loadable({
  loader: () => import('./App'),
  loading: Loading,
  timeout: 10000,
});
const Home = loadable({
  loader: () => import('pages/Home'),
  loading: Loading,
  timeout: 10000,
});
const Moments = loadable({
  loader: () => import('pages/Moments'),
  loading: Loading,
  timeout: 10000,
});
const NotFound = loadable({
  loader: () => import('pages/NotFound'),
  loading: Loading,
  timeout: 10000,
});

export default class RootRouter extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/moments" component={Moments} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export class RootRouterNested extends PureComponent {
  render() {
    return (
      <Router>
        <Route component={App}>
          <Route path="user" component={User} />
          <Route path="moments" component={Moments} />
          <Route component={NotFound} />
        </Route>
      </Router>
    );
  }
}
