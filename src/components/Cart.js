import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartProductItem from './CartProductItem';
import { removeFromCart } from '../actions/actions';

class Cart extends Component {

  handleRemove = id => {
    this.props.onRemove(id);
    this.props.calcTotal();
  }

  render() {
    return (
      <div className="App-cart">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">
          {
            this.props.cart.map(product => product.count).reduce((a, b) => a + b, 0)
          }
          </span>
        </h4>
        <ul className="list-group mb-3">
          {
            this.props.cart.map((product) => {
              return <CartProductItem key={product.id} id={product.id} {...product} onClick={this.handleRemove} />;
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
    cartTotal: state.cartTotal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(removeFromCart({ id: id })),
    calcTotal: () => dispatch({ type: 'CALC_TOTAL' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);