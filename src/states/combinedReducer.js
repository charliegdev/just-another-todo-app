import { combineReducers } from "redux";
import todos from "./reducers/todoReducer";
import visibilityFilter from "./reducers/visibilityFilterReducer";

const combinedReducer = combineReducers({ visibilityFilter, todos });

export default combinedReducer;