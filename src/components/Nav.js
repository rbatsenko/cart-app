import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import basket from '../images/basket.svg';

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.history.push('/login');
  }

  render() {
    //const { authentication } = this.props;
    //let isLoggedIn = authentication.hasOwnProperty('loggedIn') ? authentication.loggedIn : false;
    //let isAdmin = authentication.hasOwnProperty('user') ? authentication.user.username === 'admin' : false;

    return (
      <header>
        <nav className="App-nav text-center">
          <ul className="nav justify-content-center">
            <li className="nav-item nav-item--logo"><NavLink className="nav-link" to="/products"><img src={basket} alt="" width="40" height="40" /></NavLink></li>
            {
              //!isLoggedIn &&
              !localStorage.getItem('user') &&
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink></li>
            }
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink></li>
            {
              //isLoggedIn && isAdmin &&
              localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).username === 'admin' &&
              <React.Fragment>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/manage-products">Manage products</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/manage-users">Manage users</NavLink></li>
              </React.Fragment>
            }
            {
              //isLoggedIn &&
              localStorage.getItem('user') &&
              <React.Fragment>
                <li className="nav-item"><div className="navbar-text">Logged in as <strong>{JSON.parse(localStorage.getItem('user')).username /*authentication.user.username*/}</strong></div></li>
                <li className="nav-item"><a className="nav-link" href="/login" onClick={this.handleLogout}>Logout</a></li>
              </React.Fragment>
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

export default withRouter(connect(mapStateToProps)(Nav));