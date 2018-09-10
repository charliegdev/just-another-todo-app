import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TodoList from "./TodoList";
import store from "../../states/store";

describe("TodoList", () => {
  const mockFunc = () => console.log("test");
  const todoList = <TodoList 
    todos={store.getState().todos} 
    onTodoClick={mockFunc} 
    onTodoDelete={mockFunc} 
    onTodoMoveUp={mockFunc}
    onTodoMoveDown={mockFunc}
  />

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(todoList, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const tree = renderer.create(todoList).toJSON();
    expect(tree).toMatchSnapshot();
  });
});