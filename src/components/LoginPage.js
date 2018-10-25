import React, { Component } from 'react';
import basket from '../basket.svg';

class LoginPage extends Component {
  addClassesToBody = () => {
    document.body.classList.add('App-login');
    document.body.classList.add('justify-content-center');
    document.body.classList.add('text-center');
  }

  removeClassesFromBody = () => {
    document.body.classList.remove('App-login');
    document.body.classList.remove('justify-content-center');
    document.body.classList.remove('text-center');
  }

  componentDidMount() {
    this.addClassesToBody();
  }

  componentWillUnmount() {
    this.removeClassesFromBody();
  }
  render() {
    return (
      <form className="form-signin">
        <img class="mb-4" src={basket} alt="" width="60" height="60" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
    );
  }
}

export default LoginPage;