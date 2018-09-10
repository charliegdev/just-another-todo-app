import React from "React";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TodoList from "./TodoList";
import store from "../../states/store";

describe("TodoList", () => {
  const todoList = (
    <Provider store={store}>
      <TodoList todos={store.getState().todos} />
    </Provider>
  );

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