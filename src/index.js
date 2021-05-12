import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";

import './index.css';
import App from './components/App';
import combineReducers from './reducers';

const logger = function({dispatch, getState}){
  return function(next){
    return function(action){
      console.log("ACTION_TYPE",action.type);
      next(action);
    }
  }
}

const store = createStore(combineReducers,applyMiddleware(logger));
console.log(store);
// console.log("Before State", store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies : [{ name : 'Superman' }]
// });

// console.log("After State", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


