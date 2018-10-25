import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { products, productsInCart } from './data/initialData';
import { Provider } from 'react-redux';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  (state = { 
    products: products,
    productsInCart: productsInCart,
    cartTotal: Object.values(productsInCart.map(product => product.price)).reduce((a, b) => {
      return a + b;
    })
  }) => {
    console.log(state);
    return state;
  }
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
