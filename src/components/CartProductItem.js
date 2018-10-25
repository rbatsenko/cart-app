import React from 'react';

const CartProductItem = ({ name, price }) => (
  <li className="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 className="my-0">{name}</h6>
    </div>
    <span className="text-muted">{price}</span>
  </li>
);

export default CartProductItem;