import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Footer from "./Footer";

describe("Link", () => {
  const footer = <Footer />;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(footer, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const tree = renderer.create(footer).toJSON();
    expect(tree).toMatchSnapshot();
  });
});