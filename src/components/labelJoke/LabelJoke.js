import React from "react";
import "./LabelJoke.scss";
const LabelJoke = ({ text }) => {
  return (
    <div className="LabelJoke" value={text}>
      <p value={text}>{text} jokes</p>
    </div>
  );
};

export default LabelJoke;
