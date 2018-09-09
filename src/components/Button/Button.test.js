import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Link", () => {
  const mockFunc = () => console.log("test");
  const button = <Button active={true} total={500} iconName="heart" onClick={mockFunc}>Completed</Button>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(button, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const tree = renderer.create(button).toJSON();
    expect(tree).toMatchSnapshot();
  });
});