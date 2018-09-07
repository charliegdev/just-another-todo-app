// String constants, mainly to eliminate typos across the codebase
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL", // default
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// Action creators
const addTodo = text => ({ type: ADD_TODO, text });
const toggleTodo = index => ({ type: TOGGLE_TODO, index });
const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });

// Exporting everything; however, different files might only need a subset of these.
export { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, visibilityFilters, addTodo, toggleTodo, setVisibilityFilter };
