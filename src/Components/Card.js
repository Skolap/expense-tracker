import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  //props.children is predefined method to get chields data.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
