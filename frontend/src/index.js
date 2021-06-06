import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import chargingReducer from './reducers/chargingReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

const today = new Date()

const initialState = {total: 0.00, datetime: today.toString(), length: 0, paid: false }

const store = createStore(chargingReducer, initialState, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

