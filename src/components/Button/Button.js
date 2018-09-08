import React from "react";
import PropTypes from "prop-types";

const Button = ({ active, total, iconName = "heart", children, onClick }) => 
  <div className={"ui button labeled " + (active ? "disabled" : "active")} onClick={e => {
    e.preventDefault();
    onClick();
  }}>
    <div className="ui button">
      <i className={"icon " + iconName}></i>
      {children}
    </div>
    <a className="ui basic label">{total}</a>
  </div>

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
