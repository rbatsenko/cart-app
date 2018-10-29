import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartProductItem extends Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="cart-item--title my-0">{this.props.name}</h6>
          <small>x {this.props.count}</small>
          <button className="remove-item" onClick={() => this.props.onClick(this.props.id)}>X</button>
        </div>
        <span className="text-muted">${this.props.price * this.props.count}</span>
      </li>
    )
  }
}

CartProductItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number
}

export default CartProductItem;