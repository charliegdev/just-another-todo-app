import React from "react";
import PropTypes from "prop-types";
import ActionableTodo from "../../containers/ActionableTodo";

const TodoList = ({ todos }) => 
  <table className="ui very basic celled table single line">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Toggle</th>
        <th>Delete</th>
        <th>Reorder</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => <ActionableTodo key={todo.uuid} {...todo} />)}
    </tbody>
  </table> 

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string.isRequired, // this is UUID, instead of array index, so not a number.
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TodoList;