import React, { Fragment } from "react";
import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Property from "./Component/Property";
import Agent from "./Component/Agent";
import Counter from "./Component/Counter";
import Services from "./Component/Services";
import Footer from "./Component/Footer";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Property />
        <Services />
        <Counter />
        <Agent />
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
