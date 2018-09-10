import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actionCreators } from "../states/actions";

const { addTodo } = actionCreators;

const onSubmit = (e, dispatch, input) => {
  // TODO: input.value is changed. Is that bad? Change AddTodo Presenter to a controlled component?
  e.preventDefault();
  if (!input.value.trim()) return;   
  dispatch(addTodo(input.value));
  input.value = "";
};

const AddTodoPresenter = ({ dispatch }) => {
  let input;

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={e => onSubmit(e, dispatch, input)}>
        <label>Type in a new Todo item. Press <strong>Enter</strong> or click the <strong>Add</strong> button to add it.</label>
        <div className="ui fluid action input">
          <input ref={node => input = node} type="text" name="add-todo" placeholder="New Item..." />
          <button className="ui button positive" type="submit">Add</button>
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
