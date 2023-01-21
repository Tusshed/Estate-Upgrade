import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
};

export default App;
