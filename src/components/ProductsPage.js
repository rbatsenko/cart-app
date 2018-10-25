import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import Cart from './Cart';

class ProductsPage extends Component {
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
                  return <ProductItem key={product.id} {...product} />;
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

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
};

export default connect(mapStateToProps)(ProductsPage);