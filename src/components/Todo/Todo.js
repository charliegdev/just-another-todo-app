import React from "react";
import PropTypes from "prop-types";

const Todo = ({ uuid, text, completed, onTodoClick, onTodoDelete, onTodoMoveUp, onTodoMoveDown }) => (
  // I wish there are better ways to determine what to display/do without using several ternary operators
  <tr className="item">
    <td>
      <div className={"content" + (completed ? " completed-item" : "")}>
        <a className="header">{text}</a>
      </div>
    </td>
    <td>
      {completed ? "Completed" : "In progress"}
    </td>
    <td>
      <div className={"ui button " + (completed ? "yellow" : "blue")} onClick={() => onTodoClick(uuid)}>
        Toggle
      </div>
    </td>
    <td>
      <button className="negative ui button" onClick={() => onTodoDelete(uuid)}>Delete</button>
    </td>
    <td>
      <button className="ui icon button" onClick={() => onTodoMoveUp(uuid)}>
        <i className="arrow circle up icon"></i>
      </button>
      <button className="ui icon button" onClick={() => onTodoMoveDown(uuid)}>
        <i className="arrow circle down icon"></i>
      </button>
    </td>
  </tr>
);

Todo.propTypes = {
  uuid: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoMoveUp: PropTypes.func.isRequired,
  onTodoMoveDown: PropTypes.func.isRequired
};

export default Todo;
