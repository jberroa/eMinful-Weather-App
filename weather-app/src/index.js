import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFound from "./pages/404";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
