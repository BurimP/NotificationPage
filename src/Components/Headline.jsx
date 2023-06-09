import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Headline = ({ changeStyle, subNumber }) => {
  const [number, setNumber] = useState(subNumber);

  useEffect(() => {
    setNumber(subNumber);
  }, [subNumber]);

  const handleNumber = () => {
    setNumber(0);
  };

  console.log("number:", number);
  console.log("subNumber:", subNumber);

  return (
    <div className="headline">
      <div className="headline-right-content">
        <h2 className="title">Notifications</h2>
        <div className="headline-number">{number}</div>
      </div>
      <h4
        onClick={() => {
          changeStyle();
          handleNumber();
        }}
        className="mark-read"
      >
        Mark all as read
      </h4>
    </div>
  );
};

Headline.propTypes = {
  changeStyle: PropTypes.func.isRequired,
  subNumber: PropTypes.number.isRequired,
};

export default Headline;
