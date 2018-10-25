import React, { Component } from 'react';
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
            this.props.productsInCart.map(product => product.quantity).reduce((a, b) => a + b)
          }
          </span>
        </h4>
        <ul className="list-group mb-3">
          {
            this.props.productsInCart.map((product) => {
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

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    productsInCart: state.productsInCart,
    cartTotal: state.cartTotal
  }
};

export default connect(mapStateToProps)(Cart);