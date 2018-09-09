import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo";

const TodoList = ({ todos, onTodoClick }) => 
  <table className="ui very basic celled table sortable">
    <thead>
      <tr>
        <th className="">Name</th>
        <th className="sorted descending">Created</th>
        <th className="">Status</th>
        <th>Toggle</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => <Todo key={todo.uuid} {...todo} onClick={() => onTodoClick(todo.uuid)} />)}
    </tbody>
  </table> 

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