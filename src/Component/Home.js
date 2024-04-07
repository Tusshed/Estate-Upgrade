import React, { Fragment } from "react";
import "../Css/Home.css";

export const Home = () => {
  return (
    <Fragment>
      <section className="home">
        <div className="container">
          <h1>
            Become a property <br />
            owner today{" "}
          </h1>
          <p>
            Explore our estates nationwide, whether you’re looking to build, buy
            or invest, we will kick you off to a great and lasting experience.
          </p>
          <div className="link">
            <a href="#" className="explore">
              Explore
            </a>
            <a href="#" className="contact">
              Contact Agent
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
