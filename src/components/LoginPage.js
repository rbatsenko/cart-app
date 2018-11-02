import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
        username: '',
        password: '',
        submitted: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn, alert, authentication } = this.props;
    const { username, password, submitted } = this.state;

    return (
      <form name="form" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className={'form-control' + (submitted && !username ? ' is-invalid' : '')} name="username" value={username} onChange={this.handleChange} />
            {submitted && !username &&
                <div className="invalid-feedback">Username is required</div>
            }
        </div>
        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className={'form-control' + (submitted && !password ? ' is-invalid' : '')} name="password" value={password} onChange={this.handleChange} />
            {submitted && !password &&
                <div className="invalid-feedback">Password is required</div>
            }
        </div>
        <div className="form-group">
            <button className="btn btn-primary" style={{marginRight: 10}}>Login</button>
            {loggingIn &&
              <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
        </div>
        {alert.message && !authentication.loggedIn &&
          <div className="alert alert-danger">{alert.message}</div>
        }
        {/*authentication.loggedIn &&
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading mt-3">Well done!</h4>
            <p>Logged in as: <strong>{authentication.user.username}</strong></p>
          </div>
        */}
        {authentication.loggedIn && <Redirect push to="/products" />}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  const { alert } = state;
  const { authentication } = state;
  return ({
    loggingIn,
    alert,
    authentication
  });
}

export default connect(mapStateToProps)(LoginPage);