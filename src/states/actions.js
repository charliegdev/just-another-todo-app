// String constants, mainly to eliminate typos across the codebase
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";
const MOVE_TODO_UP = "MOVE_TODO_UP";
const MOVE_TODO_DOWN = "MOVE_TODO_DOWN";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

const actionCreators = {
  addTodo: text => ({ type: ADD_TODO, text }),
  toggleTodo: uuid => ({ type: TOGGLE_TODO, uuid }),
  deleteTodo: uuid => ({ type: DELETE_TODO, uuid }),
  moveTodoUp: uuid => ({ type: MOVE_TODO_UP, uuid }),
  moveTodoDown: uuid => ({ type: MOVE_TODO_DOWN, uuid }),
  setVisibilityFilter: filter => ({ type: SET_VISIBILITY_FILTER, filter })
}

// The list of actions keep growing. Put them together in an object for easier export/import.
const todoActions = { ADD_TODO, TOGGLE_TODO, DELETE_TODO, MOVE_TODO_UP, MOVE_TODO_DOWN, SET_VISIBILITY_FILTER };

const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL", // default
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// Exporting everything; however, different files might only need a subset of these.
export { todoActions, actionCreators, visibilityFilters };
