// String constants, mainly to eliminate typos across the codebase
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL", // default
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// Action creators
const addTodo = text => ({ type: ADD_TODO, text });
const toggleTodo = uuid => ({ type: TOGGLE_TODO, uuid });
const deleteTodo = uuid => ({ type: DELETE_TODO, uuid });
const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });

// Exporting everything; however, different files might only need a subset of these.
export { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, 
  visibilityFilters, addTodo, toggleTodo, deleteTodo, setVisibilityFilter };
