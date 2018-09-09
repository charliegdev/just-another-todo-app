import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed = false, text }) => (
  <tr className="item" onClick={onClick}>
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
      <button className="positive ui button">Finish</button>
    </td>
    <td>
      <button className="negative ui button">Delete</button>
    </td>
  </tr>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
