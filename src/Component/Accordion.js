import React, { Fragment, useState } from "react";
import Collapsible from "react-collapsible";
import pic from "../Images/suitboy.jpg";
import Question from "../Detail/AccordionDetail";
import "../Css/Accordion.css";

const Accordion = () => {
  const [detail, setDetail] = useState(Question);

  return (
    <Fragment>
      <section className="accordion">
        <div className="accordion-row">
          <div className="left">
            <h3>Frequently Asked Questions(FAQS)</h3>
            {detail.map((detail) => {
              return (
                <div className="left-content">
                  <Collapsible
                    className="Collapsible"
                    trigger={[
                      <i class="fa-solid fa-angle-down"></i>,
                      detail.question,
                    ]}
                    triggerWhenOpen={[
                      <i class="fa-solid fa-angle-up"></i>,
                      detail.question,
                    ]}
                  >
                    <p className="content-show">{detail.answer}</p>
                  </Collapsible>
                </div>
              );
            })}
          </div>
          <div className="right">
            <img src={pic} alt="agent-pic" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Accordion;
