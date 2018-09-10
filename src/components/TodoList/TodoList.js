import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo";

const TodoList = ({ todos, onTodoClick, onTodoDelete, onTodoMoveUp, onTodoMoveDown }) => 
  <table className="ui very basic celled table">
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
      {todos.map(todo => <Todo 
        key={todo.uuid} 
        {...todo} 
        onTodoClick={onTodoClick} 
        onTodoDelete={onTodoDelete}
        onTodoMoveUp={onTodoMoveUp}
        onTodoMoveDown={onTodoMoveDown}
      />)}
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
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoMoveUp: PropTypes.func.isRequired,
  onTodoMoveDown: PropTypes.func.isRequired
};

export default TodoList;