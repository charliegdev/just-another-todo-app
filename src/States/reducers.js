import { combineReducers } from "redux";
import uuidv4 from "uuid/v4";
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, visibilityFilters } from "./actions";

const { SHOW_ALL } = visibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

const partialTodos = [
  { text: "Learn React from official doc" },
  { text: "Learn Redux from official doc" },
  { text: "Lent" },
  { text: "Learn basic mortgage knowledge" }
];

const initialTodos = partialTodos.map((partialTodo, index) => ({ 
  ...partialTodo,
  uuid: uuidv4(),
  completed: index % 2 === 0 ? true : false
}));

const todos = (state = initialTodos, action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, { 
      uuid: uuidv4(), // Original one uses array index as ID. Bad idea since we need to remove them.
      text: action.text,
      completed: false
    }];
  case TOGGLE_TODO: // Iterate; toggle if UUID matches
    return state.map(todo => todo.uuid === action.uuid ? 
      { ...todo, completed: !todo.combineReducers } :
      todo
    );
  default:
    return state;
  }
};

const combinedReducer = combineReducers({ visibilityFilter, todos });

export default combinedReducer;