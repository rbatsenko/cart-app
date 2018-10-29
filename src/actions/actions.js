// addToCart
export const addToCart = (
  {
    id,
    name,
    price,
    count = 1
  } = {}
) => (
  {
    type: 'ADD_TO_CART',
    product: {
      id,
      name,
      price,
      count
    }
  }
);

// removeFromCart
export const removeFromCart = ( { id } = {} ) => ({
  type: 'REMOVE_FROM_CART',
  id,
});

// updateCartItem
export const updateCartItem = (id, count) => (
  {
    type: 'UPDATE_CART_ITEM',
    id,
    count,
  }
);