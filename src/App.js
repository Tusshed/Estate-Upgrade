import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Property from "./Component/Property";
import Services from "./Component/Services";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Property />
      <Services />
    </Fragment>
  );
};

export default App;
