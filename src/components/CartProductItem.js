import React from 'react';
import PropTypes from 'prop-types';

const CartProductItem = ({ name, price, count }) => (
  <li className="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 className="cart-item--title my-0">{name}</h6>
      <small>x {count}</small>
    </div>
    <span className="text-muted">${price * count}</span>
  </li>
);

CartProductItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number
}

export default CartProductItem;