import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = () => 
  <div className="ui large aligned animated list">
    <Todo />
    <Todo />
    <Todo />
    <Todo />
  </div> 

export default TodoList;