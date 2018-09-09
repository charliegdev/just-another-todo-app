import { connect } from "react-redux";
import { toggleTodo, visibilityFilters } from "../states/actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case visibilityFilters.SHOW_ALL:
    return todos;
  case visibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => todo.completed);
  case visibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => !todo.completed);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: uuid => dispatch(toggleTodo(uuid))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
