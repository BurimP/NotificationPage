import React from "react";
import { useState } from "react";
import NotificationWrapper from "./NotificationWrapper";
import Headline from "./Headline";

const Container = () => {
  const [style, setStyle] = useState("notification");
  const [redCircle, setRedCircle] = useState("red-circle");

  const handleStyle = () => {
    setStyle("notification-click");
    setRedCircle("red-circle-remove");
  };
  return (
    <div className="container">
      <Headline changeStyle={handleStyle} />
      <NotificationWrapper style={style} redStyle={redCircle} />
    </div>
  );
};

export default Container;
