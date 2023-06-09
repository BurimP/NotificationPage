import React from "react";
import { useState } from "react";
import NotificationWrapper from "./NotificationWrapper";
import Headline from "./Headline";

const Container = () => {
  const [style, setStyle] = useState("notification");
  const [redCircle, setRedCircle] = useState("red-circle");
  const [number, setNumber] = useState(7);

  const handleNumber = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
      console.log(number);
    }
  };

  const handleStyle = () => {
    setStyle("notification-click");
    setRedCircle("red-circle-remove");
  };
  return (
    <div className="container">
      <Headline changeStyle={handleStyle} subNumber={number} />
      <NotificationWrapper
        style={style}
        redStyle={redCircle}
        handleNumber={handleNumber}
      />
    </div>
  );
};

export default Container;
