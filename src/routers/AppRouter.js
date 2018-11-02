import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Nav from '../components/Nav';
import LoginPage from '../components/LoginPage';
import ProductsPage from '../components/ProductsPage';
import CheckoutPage from '../components/CheckoutPage';
import NotFoundPage from '../components/NotFoundPage';
import ConfirmationPage from '../components/ConfirmationPage';
import ManageProductsPage from '../components/ManageProductsPage';
import ManageUsersPage from '../components/ManageUsersPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Nav />
      <main className="App-main">
        <Switch>
          <Route path="/" component={ProductsPage} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />
          <Route path="/products" component={ProductsPage} exact={true} />
          <Route path="/checkout" component={CheckoutPage} exact={true} />
          <Route path="/confirmation" component={ConfirmationPage} exact={true} />
          <Route path="/manage-products" component={ManageProductsPage} exact={true} />
          <Route path="/manage-users" component={ManageUsersPage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default AppRouter;