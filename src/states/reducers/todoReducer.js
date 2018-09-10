import uuidv4 from "uuid/v4";
import { todoActions } from "../actions";

const { ADD_TODO, TOGGLE_TODO, DELETE_TODO, MOVE_TODO_UP, MOVE_TODO_DOWN} = todoActions;

// Initial todos
const partialTodos = [
  { text: "Learn React from official doc" },
  { text: "Learn Redux from official doc" },
  { text: "Assemble new PC" },
  { text: "Learn basic mortgage knowledge" }
];

const initialTodos = partialTodos.map((partialTodo, index) => ({ 
  ...partialTodo,
  uuid: uuidv4(),
  completed: index % 2 === 0 ? true : false
}));

// Helper functions for todos reducer.
const addTodoReducer = (state, action) => 
  [...state, { 
    uuid: uuidv4(), // Original one uses array index as ID. Bad idea since we need to remove them.
    text: action.text,
    completed: false
  }];

const toggleTodoReducer = (state, action) =>
  state.map(todo => todo.uuid === action.uuid ? 
    { ...todo, completed: !todo.completed } :
    todo
  );

const moveTodo = (state, action, direction) => {
  // direction: true = up, false = down
  console.log(state.map(todo => todo.text));
  const newList = [...state];
  const index = newList.findIndex(element => element.uuid === action.uuid);  
  const destination = direction ? index - 1 : index + 1;
  
  // If user tries to move up the 0st element or move down the final element, don't allow.
  if (destination >= newList.length || destination <= -1) return state;

  const temp = newList[index];
  newList[index] = newList[destination];
  newList[destination] = temp;

  return newList;
};

// The real todo reducer.
const todos = (state = initialTodos, action) => {
  switch (action.type) {
  case ADD_TODO:
    return addTodoReducer(state, action);
  case TOGGLE_TODO: // Iterate; toggle if UUID matches
    return toggleTodoReducer(state, action);
  case DELETE_TODO: 
    return state.filter(todo => todo.uuid !== action.uuid);
  case MOVE_TODO_UP:
    return moveTodo(state, action, true);
  case MOVE_TODO_DOWN:
    return moveTodo(state, action, false);
  default:
    return state;
  }
};

export default todos;