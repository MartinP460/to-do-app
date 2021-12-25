import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
