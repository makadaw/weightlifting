import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store, { history } from "./store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App store={store} history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
