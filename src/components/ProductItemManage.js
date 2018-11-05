import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductItemManage extends Component {
  render() {
    return (
      <div className="col-md-4 product-item">
        <div className="product-grid4">
          <div className="product-content">
            <h3 className="title">{this.props.name}</h3>
            <div className="price">
              ${this.props.price}
            </div>
            <button className="add-to-cart remove-product" onClick={() => { this.props.onClick(this.props.id) }}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

ProductItemManage.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}

export default ProductItemManage;