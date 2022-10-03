import React from "react";
import { FaAngleRight, FaRunning } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { AiOutlineSetting } from "react-icons/ai";

const NotificationPopup = (props: any) => {
  return (
    <div>
      {props.active ? (
        <div className="notification-card mx-1 px-2 py-2 mt-3 d-flex flex-column">
          <span className="px-2 font-15 font-400 color-gray-dark mb-1">
            Navigation
          </span>
          <div className="divider divider-margins my-2"></div>
          <div
            className="d-flex justify-content-between align-items-center my-2 cursor-pointer"
            onClick={() => props.closenotification(false)}
          >
            <span className="d-flex align-items-center">
              <GiTrophyCup className="mx-2 font-20 text-skyblue" />
              <span className="font-14 font-300">New offer Get RM UpTo 2x</span>
            </span>
            <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
          </div>
          <div className="divider divider-margins my-2"></div>
          <div
            className="d-flex justify-content-between align-items-center my-2 cursor-pointer"
            onClick={() => props.closenotification(false)}
          >
            <span className="d-flex align-items-center">
              <AiOutlineSetting className="mx-2 font-20" />
              <span className="font-14 font-300">
                Complete Challenge before it
              </span>
            </span>
            <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NotificationPopup;
