import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers/reducers';
import { configureFakeBackend } from './helpers/fake-backend';
import { Provider } from 'react-redux';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

// setup fake backend
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
