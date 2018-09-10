import { todoActions, visibilityFilters } from "../actions";

const { SET_VISIBILITY_FILTER } = todoActions;
const { SHOW_ALL } = visibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

export default visibilityFilter;