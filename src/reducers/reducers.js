import { initialCartState } from '../data/initialData';
import { alertConstants, userConstants } from '../constants/constants';

const productsReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      const isInCart = state.find(({ id }) => id === action.product.id);
      if (isInCart) {
        return state.map(product => {
            if (product.id === action.product.id) {
              product = { ...product, count: product.count + 1 };
            }
            return product;
          })
      } else {
        return [
          ...state,
          action.product
        ]
      }
    case 'REMOVE_FROM_CART':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
}

const cartTotalReducer = (state, action) => {
  const cart = action.cart; // access to Cart
  switch(action.type) {
    case 'CALC_TOTAL':
      return Object.values(cart.map(product => product.price * product.count)).reduce((a, b) => { return a + b; }, 0);
    default:
      return state;
  }
}

/*
export const mainReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  cartTotal: cartTotalReducer
});
*/

// ----------------------------------------- AUTH ----------------------------------------------------------------------//

export const alert = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}

export const users = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}

export const rootReducer = (state = { products: initialCartState.products, cart: initialCartState.cart, cartTotal: 0, authentication: {}, users: {}, alert: {} }, action) => {
  const cart = state.cart; // for cartTotalReducer access
  return {
    products: productsReducer(state.products, action),
    cart: cartReducer(state.cart, action),
    cartTotal: cartTotalReducer(state.cartTotal, {...action, cart}),
    authentication: authentication(state.authentication, action),
    users: users(state.users, action),
    alert: alert(state.alert, action)
  };
};