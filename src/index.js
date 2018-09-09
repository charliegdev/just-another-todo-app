import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducer from "./states/reducers";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();