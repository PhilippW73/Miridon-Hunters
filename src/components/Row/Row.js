import React from "react";
import "./Row.css";

const Row = props =>
  <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;

export default Row;

