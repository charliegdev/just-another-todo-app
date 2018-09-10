import { connect } from "react-redux";
import { visibilityFilters } from "../states/actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case visibilityFilters.SHOW_ALL:
    return todos;
  case visibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  case visibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  default:
    return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const VisibleTodoList = connect(mapStateToProps)(TodoList);

export default VisibleTodoList;
