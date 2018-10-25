import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Nav from '../components/Nav';
import LoginPage from '../components/LoginPage';
import ProductsPage from '../components/ProductsPage';
import CheckoutPage from '../components/CheckoutPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Nav />
      <main className="App-main">
        <Switch>
          <Route path="/" component={ProductsPage} exact={true} />
          <Route path="/login" component={LoginPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default AppRouter;