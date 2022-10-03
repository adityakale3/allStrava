import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

const SettingPopup = (props: any) => {
  return (
    <div
      id="menu-expense-1"
      className="menu menu-box-bottom menu-box-detached rounded-m"
    >
      <div className="d-flex justify-content-between align-items-center">
        <span className="mb-1">
          <h1 className="m-0 font-28 font-700">Setting</h1>
          <p className="color-highlight font-14 m-0">
            Frequently asked questions
          </p>
        </span>

        <MdOutlineClose
          className="font-32 color-red-light"
          onClick={() => props.setElement(false)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="divider my-2"></div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="d-flex align-items-center">
          <BsFillMoonFill className=" font-34 bg-turmaric  px-2 rounded-s" />
          <span className="mx-2">Dark Mode</span>
        </span>
        <span className="d-flex align-items-center">
          <input type="checkbox" id="switch" />
          <label htmlFor="switch">Toggle</label>
        </span>
      </div>
    </div>
  );
};

export default SettingPopup;
