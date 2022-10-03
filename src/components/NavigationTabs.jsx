import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { GoGraph } from "react-icons/go";
import { HiPlus } from "react-icons/hi";
import { VscChecklist } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavigationTabs = () => {
  const [active, setActive] = useState("#");

  return (
    <div id="footer-bar" className="footer-bar d-flex">
      <Link
        to="/home"
        onClick={() => setActive("#home")}
        className={
          active == "#home"
            ? "active-nav flex-1 footer-tab bg-turmaric text-white"
            : "flex-1 bg-turmaric text-white"
        }>
        <ImHome className="footer-icon" />
        <span>Home</span>
      </Link>
      <Link
        to="/create-challenge"
        onClick={() => setActive("#challenge")}
        className={
          active == "#challenge"
            ? "active-nav flex-1 footer-tab bg-turmaric text-white"
            : "bg-turmaric flex-1 text-white"
        }>
        <HiPlus className="footer-icon" />
        <span>Create Challenge</span>
      </Link>
      <Link
        to="/you"
        data-menu="menu-settings"
        onClick={() => setActive("#profile")}
        className={
          active == "#profile"
            ? "active-nav flex-1 footer-tab bg-turmaric text-white"
            : "flex-1 bg-turmaric text-white"
        }>
        <CgProfile className="footer-icon" />
        <span>You</span>
      </Link>
    </div>
  );
};

export default NavigationTabs;
