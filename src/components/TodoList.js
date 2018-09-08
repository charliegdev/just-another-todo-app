import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => 
  <div className="ui large aligned animated list">
    {todos.map(todo => <Todo key={todo.uuid} {...todo} onClick={() => onTodoClick(todo.uuid)} />)}
  </div> 

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string.isRequired, // this is UUID, instead of array index, so not a number.
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;