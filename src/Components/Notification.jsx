import React from "react";
import PropTypes from "prop-types";

const Notification = (props) => {
  let revealBox = false;
  if (props.name === "Rizky Hasanuddin") {
    revealBox = true;
  }

  console.log(revealBox);
  console.log(props.name);
  return (
    <div className="notification">
      <img alt="" src={props.imgSrc} className="portrait"></img>
      <div className="notify-right-content">
        <h4 className="name">{props.name}</h4>
        <p className="text">{props.text}</p>
        <p className="bold-text">{props.boldText}</p>
        <p className="chess-text">{props.boldTextChess}</p>
        <div className="red-circle"></div>
      </div>
      <p className="time">{props.time}</p>
    </div>
  );
};

Notification.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  boldText: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  boldTextChess: PropTypes.string.isRequired,
};

export default Notification;
