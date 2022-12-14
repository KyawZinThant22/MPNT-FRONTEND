import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
