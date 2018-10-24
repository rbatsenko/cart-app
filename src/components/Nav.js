import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="App-nav">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/checkout">Checkout</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;