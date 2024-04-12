import React, { Fragment } from "react";
import "../Css/Footer.css";
const Footer = () => {
  return (
    <Fragment>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>
                      Ring Road; Townplanning way, Beside Zartech ,Ibadan.
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span> 08062327114</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>ringroad@adronhomesproperties.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img
                        src="https://adronhomesproperties.com/wp-content/uploads/2020/09/ADRON-homes-logo-1.png"
                        class="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>
                      We are daily driven to increase our land bank,expand our
                      client base,offer excellent services and affordable
                      housing products with a singular mission to exceed
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>

                    <li>
                      <a href="#services">Our Services</a>
                    </li>
                    <li>
                      <a href="team.html">Expert Team</a>
                    </li>
                    <li>
                      <a href="email.html">Contact us</a>
                    </li>
                    <li>
                      <a href="https://adronhomesproperties.com/blog/">
                        Latest News
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              s
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2024, All Right Reserved Tussh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
