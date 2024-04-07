import React, { Fragment, useState } from "react";
import AgentDetail from "../Detail/AgentDetail";
import "../Css/Agent.css";
const Agent = () => {
  const [detail, setDetail] = useState(AgentDetail);
  return (
    <Fragment>
      <section className="agents">
        <div className="agents-heading">
          <span>Managers</span>
          <h2>Our Top Managers</h2>
        </div>
        <div className="agents-row">
          {detail.map((detail) => {
            return (
              <div className="agents-column">
                <div className="agents-card">
                  <div className="agent-thumb">
                    <img src={detail.Image} alt="agents" />
                  </div>
                  <div className="agent-info">
                    <h3>{detail.name}</h3>
                    <p>{detail.position}</p>
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

export default Agent;
