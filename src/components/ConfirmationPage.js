import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConfirmationPage extends Component {
  render() {
    let date = new Date();
    let receiveDate = new Date(date);
    receiveDate.setDate(receiveDate.getDate() + 3);

    let dd = receiveDate.getDate();
    let mm = receiveDate.getMonth() + 1;
    let yyyy = receiveDate.getFullYear();

    return (
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading mt-2 mb-4">Thank You for your order!</h4>
            <hr />
            <div className="order-total">
              <ul className="list-group mb-3">
                {
                  this.props.cart.map((product) => {
                    return (
                      <li key={product.id} className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 className="cart-item--title my-0">{product.name}</h6>
                          <small>x {product.count}</small>
                        </div>
                        <span className="text-muted">${product.price * product.count}</span>
                      </li>
                    );
                  })
                }
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${this.props.cartTotal}</strong>
                </li>
              </ul>
            </div>
            <hr />
            <p className="mb-2">You will receive your goodies on <strong>{dd}.{mm}.{yyyy}</strong></p>
          </div>
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

export default connect(mapStateToProps)(ConfirmationPage);