import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Property from "./Component/Property";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Property />
    </Fragment>
  );
};

export default App;
