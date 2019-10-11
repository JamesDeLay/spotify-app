/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
