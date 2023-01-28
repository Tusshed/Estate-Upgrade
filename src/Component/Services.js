import React, { Fragment, useState } from "react";
import ServicesDetail from "../Detail/ServicesDetail";

const Services = () => {
  const [detail, setDetail] = useState(ServicesDetail);
  return (
    <Fragment>
      <section className="services">
        <div className="heading">
          <span>My Services</span>
          <h2> Begin Your Journey To Becoming A Property Owner Today</h2>
        </div>

        <div className="services-row">
          {detail.map((detail) => {
            return (
              <div className="services-card">
                <div className="services-column">
                  <div className="content">
                    <div className="services-icon">
                      <img src={detail.Image} alt="serv-img" />
                    </div>
                    <div className="services-content">
                      <h3>{detail.heading}</h3>
                      <p>{detail.info}</p>
                      {/*Infrastructure,Expert,Locked Payment*/}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
