import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed = false, text }) => (
  <div className="item" onClick={onClick}>
    <i className={"icon " + (completed ? "thumbs up" : "question circle")}></i>
    <div className={"content" + (completed ? " completed-item" : "")}>
      <a className="header">{text}</a>
    </div>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
