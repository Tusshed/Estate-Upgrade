import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Property from "./Component/Property";
import Services from "./Component/Services";
import Accordion from "./Component/Accordion";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Property />
      <Services />
      <Accordion />
    </Fragment>
  );
};

export default App;
