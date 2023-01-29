import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Property from "./Component/Property";
import Services from "./Component/Services";
import Accordion from "./Component/Accordion";
import Counter from "./Component/Counter";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Property />
      <Services />
      <Accordion />
      <Counter />
    </Fragment>
  );
};

export default App;
