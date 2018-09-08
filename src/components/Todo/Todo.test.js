import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Todo from "./Todo";

describe("Todo", () => {
  const mockFunc = () => console.log("test");
  const todo = <Todo text="test text" uuid="testUUID" completed={false} onClick={mockFunc} />

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(todo, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const tree = renderer.create(todo).toJSON();
    expect(tree).toMatchSnapshot();
  });
});