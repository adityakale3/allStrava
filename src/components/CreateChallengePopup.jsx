import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import apiClient from "../services/api";

const CreateChallengePopup = (props) => {
  const [payments, setPayments] = useState("");

  useEffect(() => {
    console.log("FINAL PAYMENTS ::", payments);
    if (payments.short_url) {
      window.open(payments.short_url);
    }
  }, [payments]);

  let subscribe = async () => {
    console.log("Subscribed called");
    try {
      const data = await apiClient.get("/subscribe");
      console.log("Subscribe ::::", data);
      setPayments(data.data.data);
    } catch (error) {
      console.error("User error ::iii::", error);
    }
  };

  return (
    <div id="menu-expense-1" className="menu rounded-m">
      <div className="d-flex justify-content-between ">
        <span className="mx-2">
          <h3 className="m-0 font-700">Premium Required</h3>
          <p className="color-highlight font-13 mt-1">
            Go Unlimited and Unlock this Feature
          </p>
        </span>

        <span
          className="font-28 color-red-light"
          onClick={() => props.setElement(false)}
          style={{ cursor: "pointer" }}
        >
          <MdOutlineClose />
        </span>
      </div>
      <div className="card premium-style mx-0 rounded-m mt-3 mb-0">
        <div className="card-overlay bg-black rounded-m opacity-60"></div>
        <div className="premium-text ps-3 mt-5">
          <h1 className=" font-28 mb-0 text-white font-700">Subscribe for</h1>
          <h1 className="text-white font-31 font-700">Unlimted motivation</h1>
          <button
            onClick={subscribe}
            className="btn py-2 rounded-sm bg-turmaric text-white mt-3 text-uppercase font-800"
          >
            Start your Trial Now
          </button>
          <p className="mb-0 text-white opacity-60 font-11 mt-2">
            99 Rs <i className="fa fa-rupee-sign"></i> / month
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateChallengePopup;
