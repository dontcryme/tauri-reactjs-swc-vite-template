import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Titlebar from "./components/Titlebar/Titlebar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Titlebar />
    <App />
  </React.StrictMode>
);
