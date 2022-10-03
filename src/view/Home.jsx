import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRunning, FaTachometerAlt, FaRoad, FaDumbbell } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";

import {
  AiFillCaretUp,
  AiOutlineCalendar,
  AiFillCaretDown,
} from "react-icons/ai";
import CompleteChallenge from "../components/CompleteChallengePopup";
import ChallengeDetails from "../components/ChallengeDetails";
import CreateChallengePopup from "../components/CreateChallengePopup";
import apiClient from "../services/api";
import Loader from "../components/Loader";

const Home = () => {
  const [dataFromApi, setDataFromApi] = useState(false);
  const [winningPopup, setWinningPopup] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiClient.get("/user");
        console.log("User Resp ::::", data);
        setDataFromApi(data.data.data);
      } catch (error) {
        console.error("User error ::iii::", error);
      }
    })().catch((err) => {
      console.error("Error ::iii::", err);
    });
  }, []);

  const [active, setActive] = useState("#going");
  const [completeChallenge, setCompleteChallenge] = useState(false);
  const [challengeDetails, setChallengeDetails] = useState(false);
  const [createChallenge, setCreateChallenge] = useState(false);
  const [challengeSelected, setChallengeSelected] = useState("");

  let completeChallengeNow = (e) => {
    // setCompleteChallenge(true);
    console.log(e);
    setChallengeSelected(e);
    setCompleteChallenge(true);
    // setChallengeDetails(!challengeDetails);
  };

  if (dataFromApi) {
    return (
      <div>
        <div className="home-container">
          {/* <div className="d-flex px-2 pb-4 notch-clear">
            <div className="align-self-center">
              <h1 className="font-26 mb-n1">
                👋 {dataFromApi.userDetails.firstName}
              </h1>
              <p className="font-12 mb-0 opacity-70">
                Start your day by creating Challenge
              </p>
            </div>
            <div className="ms-auto align-self-center">
              <Link
                to="/create-challenge"
                className="btn btn-sm bg-blue-dark text-uppercase font-700 rounded-sm">
                Create Now
              </Link>
            </div>
          </div> */}

          <div className="card card-style rounded-m shadow-xl preload-img">
            <div className="overlay d-flex flex-column justify-content-center align-items-center">
              <div className="card-top text-center">
                <h1 className="text-white">
                  {/* {dataFromApi.userStats.activeRM} */}x
                </h1>
                <p className="text-white font-12 font-weight-bold">
                  Today's Multipler
                </p>
              </div>
              <div
                className="d-flex justify-content-center"
                onClick={() => setCreateChallenge(!createChallenge)}
              >
                <button className="text-uppercase card-top-button text-white">
                  CREATE CHALLENGE
                </button>
              </div>
            </div>
          </div>
          <div className="px-2 py-3 d-flex my-4 mx-2 tab-controls">
            <div
              className={`text-center flex-1 ${
                active == "#going" ? "active" : ""
              }`}
              onClick={() => setActive("#going")}
            >
              <FaRunning className="font-32" />
              <p className="m-0">
                On Going <br />
                <b className="font-22">Challenge</b>
              </p>
            </div>
            <div
              className={`text-center flex-1 ${
                active == "#previous" ? "active" : ""
              }`}
              onClick={() => setActive("#previous")}
            >
              <FaDumbbell className="font-32" />
              <p className="m-0">
                Recent <br />
                <b className="font-22">Challenge's</b>
              </p>
            </div>
          </div>

          {active == "#going" ? (
            <div className="morning-activity-card mx-2 px-3 py-3 ">
              {dataFromApi.ongoingChallenges.length
                ? dataFromApi.ongoingChallenges.map((item, idx) => {
                    return (
                      <div className="px-3" key={"chal-" + idx}>
                        <div className="px-3 py-3 bg-light-skyblue rounded-m">
                          <div className="card-top ">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex flex-column">
                                <span className="font-18 font-700">
                                  Challenge Id : 223141
                                </span>
                                <span>
                                  <HiClock className="mx-1 font-18 color-dark-grey " />
                                  {/* {item.createdAt} */}
                                  <small className="color-dark-grey font-12">
                                    23 min 12 sec
                                  </small>
                                </span>
                              </div>

                              <span className="bg-white color-theme px-2 py-1 rounded-sm">
                                <BiRupee className=" font-21 color-green-dark " />
                                {/* {item.amountBetted} */}
                                100bet
                              </span>
                            </div>
                          </div>
                          <div className="d-flex mt-3">
                            <span className="d-flex align-items-center">
                              <FaRoad className=" mx-2  color-dark-grey" />
                              <span className="font-13">
                                Min Distance to Cover : 2kms
                              </span>
                            </span>
                            <div className="align-self-center ms-auto">
                              <Link
                                to="#"
                                onClick={() => completeChallengeNow(item)}
                                className="btn btn-s bg-turmaric text-uppercase text-white font-14 "
                              >
                                <b>Complete challenge</b>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : "No Ongoin Challenges"}
            </div>
          ) : (
            <div className="morning-activity-card mx-2 px-4 py-3 ">
              <div className="d-flex">
                <div className="align-self-center">
                  <h3 className="mb-0 font-24 font-700">
                    <font style={{ color: "green" }}>Won</font> 280 Rs
                    <AiFillCaretUp className="color-green-dark mx-2" />
                  </h3>
                </div>
                <div className="align-self-center ms-auto">
                  <h5 className="mb-0 opacity-50 font-13 font-500">
                    <AiOutlineCalendar className="font-26" />: 16th Aug
                  </h5>
                </div>
              </div>
              <div className="d-flex pt-1">
                <h5 className="pe-3 font-600 font-14 opacity-80">
                  <FaRunning /> 4 min/km
                </h5>
                <h5 className="pe-3 font-600 font-14 opacity-80">
                  <FaRoad /> 2.23 Km
                </h5>
                <h5 className="pe-3 font-600 font-14 opacity-80">
                  <FaTachometerAlt /> 1.83x
                </h5>
              </div>
              <div
                className="d-flex mt-2"
                onClick={() => setChallengeDetails(!challengeDetails)}
              >
                <button className=" btn btn-sm rounded-sm w-100 bg-blue-dark text-uppercase font-700">
                  <b>View Details</b>
                </button>
              </div>
              <div className="divider divider-margins mb-2 mt-3"></div>
              <div className="d-flex mt-3">
                <div className="align-self-center">
                  <h3 className="mb-0 font-24 font-700">
                    <font style={{ color: "red" }}>Lost</font> 99 Rs
                    <AiFillCaretDown
                      className="mx-2"
                      style={{ color: "red" }}
                    />
                  </h3>
                </div>
                <div className="align-self-center ms-auto">
                  <h5 className="mb-0 opacity-50 font-13 font-500">
                    <AiOutlineCalendar className="font-26" />: 15th Aug
                  </h5>
                </div>
              </div>
              <div className="d-flex pt-1">
                <h5 className="pe-3 font-600 font-14 opacity-80">
                  <FaRunning /> 6.23 min/km
                </h5>
                <h5 className="pe-3 font-600 font-14 opacity-80">
                  <FaRoad /> 1.98 Km
                </h5>
                <h5 className="pe-3 font-600 font-14 opacity-80">
                  <FaTachometerAlt /> 2.91x
                </h5>
              </div>
              <div
                className="d-flex mt-2"
                onClick={() => setCompleteChallenge(!completeChallenge)}
              >
                <button className=" btn btn-sm rounded-sm w-100 bg-blue-dark text-uppercase font-700">
                  <b>View Details</b>
                </button>
              </div>
            </div>
          )}

          <div className="col-12 mt-3">
            <button
              className="btn  rounded-sm w-100 bg-turmaric text-white text-uppercase font-700 py-2"
              onClick={() => setWinningPopup(!winningPopup)}
            >
              <b>TIP'S ON WINNING BETS</b>
            </button>
          </div>
          {winningPopup ? (
            <div>
              <div
                className="winning-popup menu-box-modal menu-box-detached rounded-m"
                style={{ display: "block" }}
              >
                <div className="boxed-text-xl mb-4">
                  <h3 className="text-uppercase mt-4 font-800 font-26">
                    Tips on how to win a BET
                  </h3>
                  <ul>
                    <li className="font-15 mb-1 ">
                      Make sure challenge cretaion time on Selfit is less than
                      the strava activity start time
                    </li>
                    <li className="font-15 mb-1 ">
                      Make sure your avg speed remains over the reference speed{" "}
                    </li>
                    <li className="font-15 mb-1 ">
                      Make sure your distance covered is more than minimum
                      distance to cover
                    </li>
                  </ul>
                  <button
                    className="btn btn-sm rounded-s shadow-l bg-turmaric text-white px-5 btn-center-m text-uppercase font-900"
                    onClick={() => setWinningPopup(false)}
                  >
                    Got It
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {completeChallenge ? (
            <CompleteChallenge
              setElement={setCompleteChallenge}
              vals={challengeSelected}
            />
          ) : null}
          {challengeDetails ? (
            <ChallengeDetails setElement={setChallengeDetails} />
          ) : null}
          {createChallenge ? (
            <CreateChallengePopup setElement={setCreateChallenge} />
          ) : null}

          {/* <SettingPopup /> */}

          <div class="menu-hider"></div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }

  // return (

  // );
};

export default Home;
