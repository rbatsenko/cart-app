import { initialState } from '../data/initialData';

const productsReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      if (Object.values(state.map(product => product.count)).reduce((a, b) => { return a + b; }, 0) < 3) {
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
      } else {
        alert('You can only add 3 or less items to cart!')
        return state;
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

export const rootReducer = (state = { products: initialState.products, cart: initialState.cart, cartTotal: 0 }, action) => {
  const cart = state.cart; // for cartTotalReducer access
  return {
    products: productsReducer(state.products, action),
    cart: cartReducer(state.cart, action),
    cartTotal: cartTotalReducer(state.cartTotal, {...action, cart})
  };
};