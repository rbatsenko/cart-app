import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/actions';
import ProductItem from './ProductItem';
import Cart from './Cart';

class ProductsPage extends Component {

  handleAdd = (id, name, price) => {
    if (Object.values(this.props.cart.map(product => product.count)).reduce((a, b) => { return a + b; }, 0) < 3) {
      this.props.onAdd(id, name, price);
      this.props.calcTotal();
    } else {
      alert('You can only add 3 or less items to cart!')
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="products-page-title">Store</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row products-container">
              {
                this.props.products.map((product) => {
                  return <ProductItem key={product.id} id={product.id} {...product} onClick={this.handleAdd} />;
                })
              }
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <Cart />
            <NavLink className="btn btn-primary" to="/checkout">Proceed to checkout</NavLink>
          </div>

        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
    cartTotal: state.cartTotal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (id, name, price) => dispatch(addToCart({ id: id, name: name, price: price })),
    calcTotal: () => dispatch({ type: 'CALC_TOTAL' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);