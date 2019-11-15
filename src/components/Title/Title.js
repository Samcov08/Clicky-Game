import React from "react";
import "./Title.css";

const Title = props => {
  return (
    <div className="title">
      <h1 > {props.children} </h1>
      <h3>Current Score: {props.currentScore}</h3>
      <h3>High Score: {props.topScore}</h3>
      <h1>{props.alert}</h1>
    </div>
  );
};
export default Title;
