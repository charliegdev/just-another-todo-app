import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VisibleTodoList from "./containers/VisibleTodoList";
import AddTodo from "./containers/AddTodo";

class App extends Component {
  render() {
    return (
      <div className="ui container text">
        <Header />
        <AddTodo />
        <br />
        <VisibleTodoList />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
