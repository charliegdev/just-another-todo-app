import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducer from "./states/reducers";
import './index.css';
import App from './App';

it('renders without crashing', () => {
  const store = createStore(combinedReducer);
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});
