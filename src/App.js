import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { addTodo, toggleTodo, setVisibilityFilter, visibilityFilters } from "./States/actions";
import store from "./States/store";

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo("Item 1"));
store.dispatch(addTodo("Item 2"));
store.dispatch(addTodo("Item 3"));

store.dispatch(toggleTodo(store.getState().todos[1].uuid)); // Kinda awkward to use uuid...
// In an actual React app, UUID should be obtained as a prop, so it'll be less awkward.

store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_ACTIVE));

unsubscribe();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
