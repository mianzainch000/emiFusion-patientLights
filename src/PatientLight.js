import React from "react";
import Container from "react-bootstrap/Container";
export const PatientLight = () => {
  const lightsObj = {
    bottom: 4,
    bottomOnLights: 2,
    left: 2,
    leftOnLights: 1,
    right: 4,
    rightOnLights: 2,
    top: 3,
    topOnLights: 2,
  };
  let top = [...Array(lightsObj.top).keys(lightsObj)];
  let bottom = [...Array(lightsObj.bottom).keys(lightsObj)];
  let left = [...Array(lightsObj.left).keys(lightsObj)];
  let right = [...Array(lightsObj.right).keys(lightsObj)];

  return (
    <>
      <Container className="mainContainer">
        <div className="top_bottomContainer">
          {top.map((top, index) => {
            return (
              <div
                className={`top_bottomBox ${
                  index + 1 <= lightsObj.topOnLights ? "light" : ""
                }`}
              ></div>
            );
          })}
        </div>
        <div className="left_rightContainer">
          <div className="leftContainer">
            {left.map((left, index) => {
              return (
                <div
                  className={`right_leftBox ${
                    index + 1 <= lightsObj.leftOnLights ? "light" : ""
                  }`}
                ></div>
              );
            })}
          </div>
          <div className="boxContainer"> </div>
          <div className="leftContainer">
            {right.map((right, index) => {
              return (
                <div
                  className={`right_leftBox ${
                    index + 1 <= lightsObj.rightOnLights ? "light" : ""
                  }`}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="top_bottomContainer">
          {bottom.map((bottom, index) => {
            return (
              <div
                className={`top_bottomBox ${
                  index + 1 <= lightsObj.bottomOnLights ? "light" : ""
                }`}
              ></div>
            );
          })}
        </div>
      </Container>
    </>
  );
};
