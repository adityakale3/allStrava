import React from "react";
import { FaRunning } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { TbCurrencyRupee } from "react-icons/tb";
import { FaTachometerAlt } from "react-icons/fa";
import apiClient from "../services/api";

const CompleteChallenge = (props) => {
  let handelSubmit = async () => {
    console.log("props.vals.challengeId :::: ", props.vals.challengeId);
    try {
      const data = await apiClient.post("/fetchStravaActivity", {
        betId: props.vals.challengeId,
      });
      console.log("RESPONSE ::::", data.data);
      toast.success("Logged in successfully");
      // setTimeout(() => {
      //   navigate("/home");
      //   // history("/home");
      // }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("PROPS ::::::::::", props.vals);
  return (
    <div
      id="menu-expense-1"
      className="menu menu-box-bottom menu-box-detached rounded-m">
      <div className="menu-title d-flex justify-content-between">
        <span>
          <h1>Morning running activity</h1>
          <p className="color-highlight">
            Activity start time in strava must be after challenge created in
            selfit
          </p>
        </span>
        <MdOutlineClose
          className="font-32 color-red-light"
          onClick={() => props.setElement(false)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="divider divider-margins mb-2 mt-2"></div>
      <div className="content">
        <div className="row mb-0 d-flex align-items-center">
          <div className="col-2">
            <span className="rounded-xl bg-blue-dark font-32 px-3 py-2 pb-3">
              <FaRunning className="" />
            </span>
          </div>
          <div className="col-10 ps-4">
            <div className="d-flex">
              <div>
                <p className="font-700 color-theme ps-2">Submit by</p>
              </div>
              <div className="ms-auto">
                <p>{props.vals.betCreationTime}</p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="font-700 color-theme ps-2 m-0">Amount betted</p>
              </div>
              <div className="ms-auto">
                <p className="m-0">
                  <TbCurrencyRupee className="color-green-dark font-22" />
                  {props.vals.amountBetted}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider divider-margins mb-2 mt-3"></div>
        <div className="mb-0">
          <span className="d-flex justify-space-between align-items-center px-2">
            <div className="col-6">
              <h4 className="font-14">Min distance to cover</h4>
            </div>
            <div className="col-6">
              <h4 className="font-14 text-end">
                {props.vals.minDistanceCondition}
              </h4>
            </div>
          </span>

          <div className="divider divider-margins mb-2 mt-2"></div>
          <span className="d-flex justify-space-between align-items-center px-2">
            <div className="col-6">
              <h4 className="font-14 mt-1">Win Price</h4>
            </div>
            <div className="col-6">
              <h4 className="font-14 text-end mt-1">
                <TbCurrencyRupee className="color-green-dark font-22" />
                {Number(
                  props.vals.amountBetted * props.vals.currentBetRM
                ).toFixed()}
              </h4>
            </div>
          </span>

          <div className="divider divider-margins mb-2 mt-2"></div>
          <span className="d-flex justify-space-between align-items-center px-2">
            <div className="col-6">
              <h4 className="font-14 mt-1">Multipler</h4>
            </div>
            <div className="col-6">
              <h4 className="font-14 text-end mt-1">
                <FaTachometerAlt className="color-green-dark font-22 mx-2" />
                {Number(props.vals.currentBetRM)}
              </h4>
            </div>
          </span>

          <div className="divider divider-margins mb-2 mt-2"></div>
          <div className="col-12 text-center">
            <p
              onClick={handelSubmit}
              className="btn btn-full  bg-turmaric rounded-sm text-uppercase font-800 py-2 my-1 w-100">
              <b>Complete Challenge</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteChallenge;
