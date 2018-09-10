import { connect } from "react-redux";
import { actionCreators, visibilityFilters } from "../states/actions";
import Button from "../components/Button";

const { setVisibilityFilter } = actionCreators;

const mapStateToProps = (state, ownProps) => {
  // iconName can also be defined here using filters, but not doing that because:
  // 1. want to keep this function as small as possible, since it gets called frequently
  // 2. It's a static view property which has nothing to do with states, so don't define it here.
  const { todos } = state;
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = visibilityFilters;
  let total; // Also wants to show total # of todos under this filter
  switch (ownProps.filter) {
  case SHOW_ALL:
    total = todos.length;
    break;
  case SHOW_ACTIVE:
    total = todos.filter(todo => !todo.completed).length;
    break;
  case SHOW_COMPLETED:
    total = todos.filter(todo => todo.completed).length;
    break;
  default: // this shouldn't happen anyway
    total = 0;
  }

  return {
    active: ownProps.filter === state.visibilityFilter,
    total
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

const FilterButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default FilterButton