import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actionCreators } from "../states/actions";

const { addTodo } = actionCreators;

const onSubmit = (e, dispatch, input) => {
  e.preventDefault();
  if (!input.value.trim()) return;   
  dispatch(addTodo(input.value));
  input.value = ""
};

const AddTodoPresenter = ({ dispatch }) => {
  let input;

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={e => onSubmit(e, dispatch, input)}>
        <div className="field">
          <label htmlFor="add-todo">Type in a new Todo item. Press <strong>Enter</strong> to add it.</label>
          <input ref={node => input = node} type="text" name="add-todo" placeholder="New Item..." />
        </div>
      </form>
    </div>
  );
}

AddTodoPresenter.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const AddTodo = connect()(AddTodoPresenter);

export default AddTodo;
