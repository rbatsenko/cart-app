import { alertConstants, userConstants } from '../constants/constants';
import { userService } from '../services/services';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// CART ACTIONS
// addToCart
export const addToCart = (
  {
    id,
    name,
    price,
    count = 1
  } = {}
) => (
  {
    type: 'ADD_TO_CART',
    product: {
      id,
      name,
      price,
      count
    }
  }
);

// removeFromCart
export const removeFromCart = ( { id } = {} ) => ({
  type: 'REMOVE_FROM_CART',
  id,
});

// ALERT ACTIONS
const success = message => ({ type: alertConstants.SUCCESS, message });
const error = message => ({ type: alertConstants.ERROR, message });
const clear = () => ({ type: alertConstants.CLEAR });

const alertActions = {
  success,
  error,
  clear
};

// AUTHENTICATION ACTIONS
// login
const login = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => { 
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

// logout
const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

// getAll
const getAll = () => {
  return dispatch => {
      dispatch(request());

      userService.getAll()
          .then(
              users => dispatch(success(users)),
              error => dispatch(failure(error))
          );
  };

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

export const userActions = {
  login,
  logout,
  getAll
};