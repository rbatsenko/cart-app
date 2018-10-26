import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import basket from '../images/basket.svg';

class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="App-nav text-center">
          <ul className="nav justify-content-center">
            <li className="nav-item nav-item--logo"><NavLink className="nav-link" to="/products"><img src={basket} alt="" width="40" height="40" /></NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;