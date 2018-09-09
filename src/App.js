import React, { Component } from "react";
import Footer from "./components/Footer";
import VisibleTodoList from "./containers/VisibleTodoList";

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
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
