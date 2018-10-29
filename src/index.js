import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { initialState } from './data/initialData';
import { removeFromCart } from './actions/actions';
import { Provider } from 'react-redux';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

const newProd = {
    id: 3,
    name: 'Kiwifruit',
    price: 10,
    count: 5
}

const store = createStore(
  (state = { 
    products: initialState.products,
    cart: initialState.cart,
    cartTotal: initialState.cart ? Object.values(initialState.cart.map(product => product.price * product.count)).reduce((a, b) => { return a + b; }) : 0
  }, action) => {
    switch(action.type) {
      case 'ADD_TO_CART':
        return {
          products: state.products,
          cart: state.cart.concat(newProd),
          cartTotal: state.cartTotal
        }
      case 'REMOVE_FROM_CART':
        return {
          products: state.products,
          cart: state.cart.filter(({ id }) => id !== action.id),
          cartTotal: state.cartTotal
        }
      case 'CALC_TOTAL':
        return {
          products: state.products,
          cart: state.cart,
          cartTotal: Object.values(state.cart.map(product => product.price * product.count)).reduce((a, b) => { return a + b; }, 0)
        }
      default:
        console.log(state);
        return state;
    }
  }
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_TO_CART'
});

store.dispatch({
  type: 'CALC_TOTAL'
});

store.dispatch(removeFromCart({
  id: 3
}));

store.dispatch({
  type: 'CALC_TOTAL'
});

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
