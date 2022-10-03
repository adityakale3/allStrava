import React, { useState, useEffect } from "react";
import { FaRunning } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { TbCurrencyRupee } from "react-icons/tb";
import { FaTachometerAlt, FaRoad, FaClock } from "react-icons/fa";
import apiClient from "../services/api";
import { useNavigate } from "react-router-dom";

const CompleteChallenge = (props) => {
  const [distance, setDistance] = useState(0);
  const [elapsedTime, setelapsed_time] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [load, setLoad] = useState(false);
  const [winningPopup, setWinningPopup] = useState(false);
  const [finalResponse, setfinalResponse] = useState(null);
  const navigate = useNavigate();
  let handelSubmit = async () => {
    setClicked(true);
  };

  let onChangeHandler = (e) => {
    if (e.target.name == "distance") {
      setDistance(e.target.value);
    } else {
      setelapsed_time(e.target.value);
    }
  };

  useEffect(() => {
    if (finalResponse) {
      console.log("finalResponse :::::::::", finalResponse);
    }
  }, [finalResponse]);

  let handelNextClick = async () => {
    setLoad(true);
    try {
      // const data = await apiClient.post("/fetchStravaActivity", {
      //   betId: props.vals.challengeId,
      // });
      // console.log("RESPONSE ::::", data.data);
      // toast.success("Logged in successfully");
      // // setTimeout(() => {
      // //   navigate("/home");
      // //   // history("/home");
      // // }, 3000);
      // CALL FAKE STRAVA INPUT

      // console.log("FINAL DATA :::::", {
      //   betId: props.vals.challengeId,
      //   distance,
      //   elapsed_time: elapsedTime,
      // });

      const data = await apiClient.post("/fakeStravaActivity", {
        betId: props.vals.challengeId,
        distance,
        elapsed_time: elapsedTime,
      });

      // console.log("RESP ::::::", data);

      if (data) {
        const betAll = await apiClient.post("/completeChallenge", {
          betId: props.vals.challengeId,
        });
        console.log("betAll ::::::::", betAll.data.data);
        setWinningPopup(true);
        setClicked(false);
        setfinalResponse(betAll.data.data);
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("PROPS ::::::::::", props.vals);
  return (
    <div
      id="menu-expense-1"
      className="menu menu-box-bottom menu-box-detached rounded-m">
      {!clicked && !winningPopup && distance == 0 ? (
        <div>
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
                    <p className="font-700 color-theme ps-2 m-0">
                      Amount betted
                    </p>
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
          </div>{" "}
        </div>
      ) : (
        <div>
          <div className="input-style no-borders has-icon validate-field mt-2 position-relative">
            <FaRoad className="signup-icon" />
            <input
              type="number"
              name="distance"
              className="form-control validate-name"
              id="form1aa"
              placeholder="Distance Covered in meters"
              required="true"
              onChange={onChangeHandler}
            />
            <label className="color-blue-dark font-10 mt-1">
              Distance Convered*
            </label>

            <em>Distance covered must be in mtrs</em>
            <span></span>
          </div>

          <div className="input-style no-borders has-icon validate-field mt-2 position-relative">
            <FaClock className="signup-icon" />
            <input
              type="number"
              name="time"
              className="form-control validate-name"
              id="form1aa"
              placeholder="Time in seconds"
              required="true"
              onChange={onChangeHandler}
            />
            <label className="color-blue-dark font-10 mt-1">
              Time required in seconds*
            </label>

            <em>Activity time in seconds</em>
            <span></span>
          </div>
          <p
            onClick={handelNextClick}
            className="btn btn-full  bg-turmaric rounded-sm text-uppercase font-800 py-2 my-1 w-100"
            disabled={load}>
            <b>Send to calculate </b>
          </p>
        </div>
      )}

      {winningPopup ? (
        <div>
          <div
            className=" menu-box-modal menu-box-detached rounded-m"
            style={{ display: "block", marginTop: "0" }}>
            <div className="boxed-text-xl mb-4">
              <h3 className="text-uppercase mt-4 font-800 font-26">
                Challenge Results
              </h3>
              <table style={{ width: "100%" }}>
                <tr>
                  <td>
                    Win Status :{" "}
                    {finalResponse
                      ? finalResponse.result
                        ? "WON"
                        : "LOST"
                      : null}
                  </td>
                  <td>
                    Reason : {finalResponse ? finalResponse.reason : null}
                  </td>
                </tr>

                <tr>
                  <td>
                    Final Amount Won/Lost :{" "}
                    {finalResponse ? finalResponse.finalAmountWonLost : null}
                  </td>
                  <td>MFN : {finalResponse ? finalResponse.MFN : null}</td>
                </tr>

                <tr>
                  <td>
                    Was First Activity :{" "}
                    {finalResponse
                      ? finalResponse.wasFirstActivity
                        ? "Yes"
                        : "No"
                      : null}
                  </td>
                  <td>
                    Next Bet RM :{finalResponse ? finalResponse.finalRM : null}
                  </td>
                </tr>

                <tr>
                  <td>
                    Actual RM : {finalResponse ? finalResponse.actualRM : null}
                  </td>
                  <td>
                    Activity Ref Speed :{" "}
                    {finalResponse ? finalResponse.activeRefSpeed : null}
                  </td>
                </tr>

                <tr>
                  <td>
                    Next Bet Ref Speed :{" "}
                    {finalResponse ? finalResponse.nextBetRefSpeed : null}
                  </td>
                  <td>
                    This bet Ref Speed :{" "}
                    {finalResponse ? finalResponse.refSpeed : null}
                  </td>
                </tr>
              </table>
              <button
                className="btn btn-sm rounded-s shadow-l bg-turmaric text-white px-5 btn-center-m text-uppercase font-900"
                onClick={() => {
                  navigate("/home?redirect=true");
                  setWinningPopup(false);
                }}>
                Got It
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CompleteChallenge;
