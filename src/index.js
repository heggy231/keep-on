import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormMood from "./components/FormMood";

ReactDOM.render(<App />, document.getElementById("root"));
