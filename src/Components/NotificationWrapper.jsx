import React from "react";
import Notification from "./Notification";
import img1 from "../project-assets/images/avatar-mark-webber.webp";
import img2 from "../project-assets/images/avatar-angela-gray.webp";
import img3 from "../project-assets/images/avatar-jacob-thompson.webp";
import img4 from "../project-assets/images/avatar-rizky-hasanuddin.webp";
import img5 from "../project-assets/images/avatar-kimberly-smith.webp";
import img6 from "../project-assets/images/avatar-nathan-peterson.webp";
import img7 from "../project-assets/images/avatar-anna-kim.webp";

const NotificationWrapper = () => {
  return (
    <div className="notify-wrapper">
      <Notification
        imgSrc={img1}
        name="Mark Webber"
        text="reacted to your recent post"
        boldText="My first tournament today!"
        time="1m ago"
      />
      <Notification
        imgSrc={img2}
        name="Angela Gray"
        text="followed you"
        time="5min ago"
      />

      <Notification
        imgSrc={img3}
        name="Jacob Thompson"
        text="has joined your group"
        boldTextChess="Chess Club"
        time="1 day ago"
      />

      <Notification
        imgSrc={img4}
        name="Rizky Hasanuddin"
        text="sent you a private message"
        boldTextChess="Chess Club"
        time="5 days ago"
      />
      <div className="box">
        <p className="text-box">
          Hello, thanks for setting up the Chess Club. I&apos;ve been a member
          for a few weeks now and I&apos;m already having lots of fun and
          improving my game.
        </p>
      </div>
      <div className="space"></div>
      <Notification
        imgSrc={img5}
        name="Kimberly Smith"
        text="commented on your picture"
        // boldTextChess="Chess Club"
        time="1 week ago"
      />
      <Notification
        imgSrc={img6}
        name="Nathan Peterson"
        text="reacted to your post"
        boldText="5 end-game strategies to increase your win rate"
        time="2 weeks ago"
      />
      <Notification
        imgSrc={img7}
        name="Anna Kim"
        text="left the group"
        boldTextChess="Chess Club"
        time="2 weeks ago"
      />
    </div>
  );
};

export default NotificationWrapper;
