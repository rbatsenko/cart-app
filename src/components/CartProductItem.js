import React from 'react';

const CartProductItem = ({ name, price, quantity }) => (
  <li className="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 className="cart-item--title my-0">{name}</h6>
      <small>x {quantity}</small>
    </div>
    <span className="text-muted">${price * quantity}</span>
  </li>
);

export default CartProductItem;