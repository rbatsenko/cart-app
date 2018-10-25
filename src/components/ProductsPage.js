import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductsPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3 className="products-page-title">Store</h3>
          </div>
        </div>
        <div className="row">

          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <div className="product-grid4">
                  <div className="product-content">
                    <h3 className="title">Apple</h3>
                    <div className="price">
                      $10
                    </div>
                    <button className="add-to-cart">ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
            <NavLink className="btn btn-primary" to="/checkout">Proceed to checkout</NavLink>
          </div>

        </div>
    </div>
    );
  }
}

export default ProductsPage;