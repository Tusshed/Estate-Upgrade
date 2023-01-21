import React, { Fragment, useState } from "react";
import "../Css/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Fragment>
      <nav>
        <h1>
          AdronHomes<span>.</span>
        </h1>
        <div className={showMenu ? "menu mobile-menu" : "menu"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Estates</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
          <div className="btn">
            <a href="#Get Property">Get Property</a>
          </div>
        </div>
        <i
          className="fa-solid fa-bars"
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </nav>
    </Fragment>
  );
};
export default Navbar;
