import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link className="login-link" to="/login">Login</Link></li>
            <li><Link className="products-link" to="/products">Products</Link></li>
            <li><Link className="checkout-link" to="/checkout">Checkout</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;