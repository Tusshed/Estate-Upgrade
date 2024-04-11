import React, { Fragment, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../Css/Counter.css";

const Counter = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <Fragment>
      <section className="counter">
        <div className="counter-container">
          <div className="counter-row">
            {/* Column 1 
            <div className="counter-column">
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={305}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span
                          className="counter-number"
                          ref={countUpRef}
                        ></span>
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                Area
                <br /> population
              </span>
            </div>
            */}
            {/*Col 2 */}
            <div className="counter-column">
              <strong>
                <CountUp
                  {...rest}
                  start={viewPortEntered ? null : 0}
                  end={12024}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span
                          className="counter-number"
                          ref={countUpRef}
                        ></span>
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                Total
                <br /> Properties
              </span>
            </div>
            {/*col 3*/}
            <div className="counter-column">
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={42}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span
                          className="counter-number"
                          ref={countUpRef}
                        ></span>
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                Land
                <br /> Locations
              </span>
            </div>
            {/*col 4*/}
            <div className="counter-column">
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={58}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span
                          className="counter-number"
                          ref={countUpRef}
                        ></span>
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                Total
                <br /> Branches
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Counter;
