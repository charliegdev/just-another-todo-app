import React, { Component } from "react";
import store from "./states/store";
import Button from "./components/Button";
import VisibleTodoList from "./containers/VisibleTodoList";

const todos = store.getState().todos;
class App extends Component {
  render() {
    return (
      <div className="ui container text center aligned">
        <br />
        <h1 className="ui header">
          <i className="icon tasks" />
          <div className="content">
            Just Another Todo App
            <div className="sub header">
              Made in React, Redux & Semantic UI React
            </div>
          </div>
        </h1>
        <VisibleTodoList />
        <Button
          active={false}
          total={todos.length}
          iconName="server"
          onClick={() => console.log("clicked")}
        >
          All Items
        </Button>
        <Button
          active={true}
          total={todos.filter(todo => todo.completed === false).length}
          iconName="thumbtack"
          onClick={() => console.log("clicked")}
        >
          Incomplete
        </Button>
        <Button
          active={false}
          total={todos.filter(todo => todo.completed === true).length}
          iconName="heart"
          onClick={() => console.log("clicked")}
        >
          Completed
        </Button>
      </div>
    );
  }
}
export default App;
