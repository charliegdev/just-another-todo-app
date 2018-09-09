import React from "react";
import PropTypes from "prop-types";

const Todo = ({ uuid, text, completed, onTodoClick, onTodoDelete }) => (
  <tr className="item">
    <td>
      <div className={"content" + (completed ? " completed-item" : "")}>
        <a className="header">{text}</a>
      </div>
    </td>
    <td>
      22:01
    </td>
    <td>
      {completed ? "Completed" : "In progress"}
    </td>
    <td>
      <button className="positive ui button" onClick={() => onTodoClick(uuid)}>Finish</button>
    </td>
    <td>
      <button className="negative ui button" onClick={() => onTodoDelete(uuid)}>Delete</button>
    </td>
  </tr>
);

Todo.propTypes = {
  uuid: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
};

export default Todo;
