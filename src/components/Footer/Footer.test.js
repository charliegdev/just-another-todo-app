import React from "React";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Footer from "./Footer";
import store from "../../states/store";

describe("Footer", () => {
  const footer = (
    <Provider store={store}>
      <Footer store={store} />
    </Provider>
  );

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