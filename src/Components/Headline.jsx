import React from "react";
import PropTypes from "prop-types";

const Headline = ({ changeStyle }) => {
  return (
    <div className="headline">
      <div className="headline-right-content">
        <h2 className="title">Notifications</h2>
        <div className="headline-number">3</div>
      </div>
      <h4 onClick={changeStyle} className="mark-read">
        Mark all as read
      </h4>
    </div>
  );
};

Headline.propTypes = {
  changeStyle: PropTypes.string.isRequired,
};

export default Headline;
