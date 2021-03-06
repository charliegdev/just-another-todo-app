import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Todo from "./Todo";


describe("Todo", () => {
  const mockFunc = () => console.log("test");
  const todo = (
    <Todo
      text="test text"
      uuid="testUUID"
      completed={false}
      onTodoToggle={mockFunc}
      onTodoDelete={mockFunc}
      onTodoMoveUp={mockFunc}
      onTodoMoveDown={mockFunc}
    />
  );

  it("renders without crashing", () => {
    const tbody = document.createElement("tbody");
    ReactDOM.render(todo, tbody);
    ReactDOM.unmountComponentAtNode(tbody);
  });

  test("has a valid snapshot", () => {
    const tree = renderer.create(todo).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
