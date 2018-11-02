import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import basket from '../images/basket.svg';

class Nav extends Component {
  render() {
    const { authentication } = this.props;
    let isLoggedIn = authentication.hasOwnProperty('loggedIn') ? authentication.loggedIn : false;
    let isAdmin = authentication.hasOwnProperty('user') ? authentication.user.username === 'admin' : false;

    return (
      <header>
        <nav className="App-nav text-center">
          <ul className="nav justify-content-center">
            <li className="nav-item nav-item--logo"><NavLink className="nav-link" to="/products"><img src={basket} alt="" width="40" height="40" /></NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink></li>
            {
              isAdmin &&
              <React.Fragment>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/manage-products">Manage products</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/manage-users">Manage users</NavLink></li>
              </React.Fragment>
            }
            {
              isLoggedIn &&
                <li className="nav-item"><a className="nav-link" href="/">Logout</a></li>
            }
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  return ({
    authentication
  });
};

export default connect(mapStateToProps)(Nav);