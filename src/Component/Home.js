import React, { Fragment } from "react";
import "../Css/Home.css";
export const Home = () => {
  return (
    <Fragment>
      <section className="home">
        <div className="container">
          <h1>Begin your journey to becoming a property owner today </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            enim cupiditate aspernatur obcaecati, delectus harum in iusto
            maxime, excepturi quia tenetur explicabo recusandae!
          </p>
          <div className="link">
            <a href="#" className="explore">
              {" "}
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
