import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { withLayout } from "./Layout/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import About from "./Screens/About";
import Home from "./Screens/Home";

const theme = createMuiTheme();

const Root: React.FC<{ store: any; history: any }> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/program" component={withLayout(Home)} />
            <Route path="/about" component={withLayout(About)} />
            <Redirect to="/program" />
          </Switch>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
