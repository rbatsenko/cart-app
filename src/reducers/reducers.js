import { initialState } from '../data/initialData';

export const cartReducer = (state = { 
  products: initialState.products,
  cart: initialState.cart,
  cartTotal: Object.values(initialState.cart.map(product => product.price * product.count)).reduce((a, b) => { return a + b; }, 0)
}, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      if (Object.values(state.cart.map(product => product.count)).reduce((a, b) => { return a + b; }, 0) < 3) {
        const isInCart = state.cart.find(({ id }) => id === action.product.id);
        if (isInCart) {
          return {
            products: state.products,
            cart: state.cart.map(product => {
              if (product.id === action.product.id) {
                product = { ...product, count: product.count + 1 };
              }
              return product;
            }),
            cartTotal: state.cartTotal
          }
        } else {
          return {
            products: state.products,
            cart: [
              ...state.cart,
              action.product
            ],
            cartTotal: state.cartTotal
          }
        }
      } else {
        alert('You can only add 3 or less items to cart!')
        return state;
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
      return state;
  }
}