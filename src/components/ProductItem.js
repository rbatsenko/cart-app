import React from 'react';

const ProductItem = ({ name, price }) => (
  <div className="col-md-4 product-item">
    <div className="product-grid4">
      <div className="product-content">
        <h3 className="title">{name}</h3>
        <div className="price">
          ${price}
        </div>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  </div>
);

export default ProductItem;