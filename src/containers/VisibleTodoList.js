import { connect } from "react-redux";
import { actionCreators, visibilityFilters } from "../states/actions";
import TodoList from "../components/TodoList";

const { toggleTodo, deleteTodo, moveTodoUp, moveTodoDown } = actionCreators;

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

const mapDispatchToProps = dispatch => ({
  onTodoClick: uuid => dispatch(toggleTodo(uuid)),
  onTodoDelete: uuid => dispatch(deleteTodo(uuid)),
  onTodoMoveUp: uuid => dispatch(moveTodoUp(uuid)),
  onTodoMoveDown: uuid => dispatch(moveTodoDown(uuid))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
