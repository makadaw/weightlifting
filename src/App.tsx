import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import "./App.css";
import { withLayout } from "./Layout/Layout";
import About from "./Screens/About";
// import Home from "./Screens/Home";
const Root: React.FC<{ store: any; history: any }> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/program" component={withLayout(About)} />
          <Route path="/about" component={withLayout(About)} />
          <Redirect to="/program" />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
