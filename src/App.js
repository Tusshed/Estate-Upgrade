import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Property from "./Component/Property";
import Services from "./Component/Services";
import Accordion from "./Component/Accordion";
import Counter from "./Component/Counter";
import Agent from "./Component/Agent";
import Footer from "./Component/Footer";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Property />
      <Services />
      <Accordion />
      <Counter />
      <Agent />

      <Footer />
    </Fragment>
  );
};
/*api key for chatGpt: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 */
export default App;
