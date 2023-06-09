import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Notification = (props) => {
  const [style, setStyle] = useState("notification");
  const [redStyle, setRedStyle] = useState("red-circle");

  const handleStyle = () => {
    setStyle("notification-click");
    setRedStyle("red-circle-remove");
  };

  return (
    <div
      onClick={() => {
        handleStyle();
        props.handleNumber;
      }}
      className={`${props.style} ${style}`}
    >
      <img alt="" src={props.imgSrc} className="portrait"></img>
      <div className="notify-right-content">
        <h4 className="name">{props.name}</h4>
        <p className="text">{props.text}</p>
        <p className="bold-text">{props.boldText}</p>
        <p className="chess-text">{props.boldTextChess}</p>
        <div className={`${props.redStyle} ${redStyle}`}></div>
      </div>
      <p className="time">{props.time}</p>
    </div>
  );
};

Notification.propTypes = {
  handleNumber: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  boldText: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  boldTextChess: PropTypes.string.isRequired,
  redStyle: PropTypes.string.isRequired,
};

export default Notification;
