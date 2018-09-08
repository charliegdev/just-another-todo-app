import React, { Component } from 'react';
import TodoList from "./components/TodoList";
class App extends Component {
  render() {
    return (
      <div className="ui container text center aligned">
        <br />
        <h1 className="ui header">
          <i className="icon tasks" />
          <div className="content">
            Just Another Todo App
            <div className="sub header">Made in React, Redux & Semantic UI React</div>
          </div>
        </h1>
        <TodoList />
      </div>
    );
  }
}
export default App;
