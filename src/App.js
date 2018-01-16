/* eslint react/no-did-mount-set-state:0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import rootReducer from './rootReducer'

import MoviesList from './movies/MoviesList';
import MovieDetail from './movies//MovieDetail';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from  'redux-devtools-extension'
import Toggle from './toggle/Toggle'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [logger, thunk]


// const hello=() =>('hello')
const store = createStore(
  rootReducer,
  {}, //initial state
  composeWithDevTools(applyMiddleware(...middleware)),
)

const App = () => (
  <Provider store={store} >
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />

          <Route path="/:id" component={MovieDetail} />


        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;

