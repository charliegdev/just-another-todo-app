import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed = false, text }) => (
  <div className="item">
    <i className="icon question circle"></i>
    <div className={"content" + (completed ? " completed-item" : "")} onClick={onClick}>
      {text}
    </div>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
