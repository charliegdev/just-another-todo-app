// VisibleTodoList passes too many functions as props to Todo without using them. 
// Create this container component to free VisibleTodoList from that burden.
import { connect } from "react-redux";
import { actionCreators } from "../states/actions";
import Todo from "../components/Todo";

const { toggleTodo, deleteTodo, moveTodoUp, moveTodoDown } = actionCreators;

const mapDispatchToProps = dispatch => ({
  onTodoToggle: uuid => dispatch(toggleTodo(uuid)),
  onTodoDelete: uuid => dispatch(deleteTodo(uuid)),
  onTodoMoveUp: uuid => dispatch(moveTodoUp(uuid)),
  onTodoMoveDown: uuid => dispatch(moveTodoDown(uuid))
});

const ActionableTodo = connect(undefined, mapDispatchToProps)(Todo);

export default ActionableTodo;