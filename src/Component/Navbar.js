import React, { Fragment, useState } from "react";
import "../Css/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [transitionNavbar, setTransitionNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setTransitionNavbar(true);
    } else {
      setTransitionNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Fragment>
      <nav className={transitionNavbar ? "navbar active" : "navbar"}>
        <h1>
          Ringroad Territory <span>.</span>
        </h1>
        <div className={showMenu ? "menu mobile-menu" : "menu"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Estates</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <div className="btn">
            <a href="#Get Property">Get Property</a>
          </div>
        </div>
        <i class="fa-solid fa-bars" onClick={() => setShowMenu(!showMenu)}></i>
      </nav>
    </Fragment>
  );
};
export default Navbar;
