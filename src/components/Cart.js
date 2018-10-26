import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartProductItem from './CartProductItem';

class Cart extends Component {

  render() {
    return (
      <div className="App-cart">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">
          {
            this.props.cart.map(product => product.count).reduce((a, b) => a + b)
          }
          </span>
        </h4>
        <ul className="list-group mb-3">
          {
            this.props.cart.map((product) => {
              return <CartProductItem key={product.id} {...product} />;
            })
          }
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${this.props.cartTotal}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

Cart.propTypes = {
  cartTotal: PropTypes.number
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    cart: state.cart,
    cartTotal: state.cartTotal
  }
};

export default connect(mapStateToProps)(Cart);