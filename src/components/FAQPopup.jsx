import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const FAQPopup = (props: any) => {
  return (
    <div id="menu-expense-1" className="menu rounded-m">
      <div className="d-flex justify-content-between align-items-center">
        <span className="mb-1">
          <h1 className="m-0 font-28 font-700">FAQ</h1>
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
      <div className="divider m-0"></div>
      <div className="list-group list-custom-small w-100">
        <div className="d-flex justify-content-between align-items-center">
          <span className="font-15">What is Return Multipler</span>
          <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
        </div>
        <div className="divider m-0"></div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="font-15">Question 2</span>
          <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
        </div>
        <div className="divider m-0"></div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="font-15">Question 3</span>
          <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
        </div>
        <div className="divider m-0"></div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="font-15">Question 4</span>
          <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
        </div>
        <div className="divider m-0"></div>
      </div>
      <div className="col-12" onClick={() => props.setElement(false)}>
        <button className="btn btn-sm rounded-sm w-100 bg-turmaric text-uppercase font-700">
          <b>Close</b>
        </button>
      </div>
    </div>
  );
};

export default FAQPopup;
