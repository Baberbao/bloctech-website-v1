import React from "react";

const LoadingSuspence = () => {
  return (
    <div
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        transformStyle: "preserve-3d",
        boxSizing: "border-box",
      }}
    >
      {/* <div className="spinner-box">
        <div className="configure-border-1">
          <div className="configure-core" />
        </div>
        <div className="configure-border-2">
          <div className="configure-core" />
        </div>
      </div> */}
      <div className="animation-container">
        <div className="lightning-container">
          <div className="lightning white"></div>
          <div className="lightning red"></div>
        </div>
        <div className="boom-container">
          <div className="shape circle big white"></div>
          <div className="shape circle white"></div>
          <div className="shape triangle big yellow"></div>
          <div className="shape disc white"></div>
          <div className="shape triangle blue"></div>
        </div>
        <div className="boom-container second">
          <div className="shape circle big white"></div>
          <div className="shape circle white"></div>
          <div className="shape disc white"></div>
          <div className="shape triangle blue"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSuspence;
