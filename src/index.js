// import Instructions from "../instructions";
import Home from './view/components/Home';

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => (
  <div className="App">
    <Home/>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
