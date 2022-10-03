import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import MenuBar from "../Menu/MenuBar";
import NotificationPopup from "../Notification/NotificationPopup";
import { Link } from "react-router-dom";

const HeaderSecond = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <div className="position-relative">
      <div
        className="d-flex justify-content-between w-100 p-3 font-600 bg-turmaric color-white"
        style={{ color: "white" }}>
        <span className="cursor-pointer" onClick={() => setMenuBar(!menuBar)}>
          <AiOutlineMenu />
        </span>
        Selfit
        <div>
          <span
            style={{ marginRight: "1rem" }}
            className="cursor-pointer"
            onClick={() => setNotification(!notification)}>
            <GrNotification style={{ color: "white !important" }} />
          </span>
          <span className="cursor-pointer">
            <Link
              to="/leaderboard"
              style={{ textDecoration: "none", color: "white" }}>
              <VscGraph />
            </Link>
          </span>
        </div>
      </div>
      <NotificationPopup
        active={notification}
        closenotification={setNotification}
      />
      <MenuBar active={menuBar} closemenu={setMenuBar} />
    </div>
  );
};

export default HeaderSecond;
