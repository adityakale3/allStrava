import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const HowitWorks = () => {
  return (
    <div id="menu-expense-1" className="menu about-menu rounded-m" height="540">
      <div className="responsive-iframe rounded-m">
        <iframe src="https://www.youtube.com/embed/BWwDfLNz4Cc"></iframe>
      </div>
      <div className="list-group list-custom-small w-100 p-0">
        <div className="d-flex">
          <span className="font-25 font-700">How Selfit Works</span>
        </div>
        <div className="divider m-0"></div>
        <p>To Know more intresting stuff about us, follow us on</p>
        <ul className="icon-list">
          <li>
            <AiOutlineInstagram /> @selfitIndia
          </li>
          <li>
            <AiOutlineTwitter /> @selfitIndia
          </li>
          <li>
            <AiOutlineFacebook /> @selfitIndia
          </li>
        </ul>
        <div className="divider my-1"></div>
        <div className="col-12">
          <button className="btn btn-sm rounded-sm w-100 bg-turmaric text-uppercase font-700">
            <b>Know about more features</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
