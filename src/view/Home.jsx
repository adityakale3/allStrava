import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaRunning,
  FaTachometerAlt,
  FaRoad,
  FaDumbbell,
  FaCalendarAlt,
} from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { HiClock } from "react-icons/hi";
import CompleteChallenge from "../components/CompleteChallengePopup";
import ChallengeDetails from "../components/ChallengeDetails";
import CreateChallengePopup from "../components/CreateChallengePopup";
import apiClient from "../services/api";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dataFromApi, setDataFromApi] = useState(false);
  const [winningPopup, setWinningPopup] = useState(false);

  const [active, setActive] = useState("#going");
  const [completeChallenge, setCompleteChallenge] = useState(false);
  const [challengeDetails, setChallengeDetails] = useState(false);
  const [createChallenge, setCreateChallenge] = useState(false);
  const [dataFromApiRC, setdataFromApiRC] = useState([]);
  const [challengeSelected, setChallengeSelected] = useState("");
  const [calMonths] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  let formatDate = (dateData) => {
    let newDate = new Date(dateData);
    let monthDate = calMonths[newDate.getMonth()];
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    let hr = newDate.getHours();
    let mins = newDate.getMinutes();

    return `${day} ${monthDate} ${year}, ${hr}:${mins}`;
  };

  let formatNameDate = (dateData, id) => {
    let newDate = new Date(dateData);
    let monthDate = calMonths[newDate.getMonth()];
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    let hr = newDate.getHours();
    let mins = newDate.getMinutes();
    return `${day}${newDate.getMonth()}${year
      .toString()
      .substr(2)}${hr}${mins}`;
  };
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("redirect"));

  if (searchParams.get("redirect")) {
    // toast.error(searchParams.get("redirect"));
    searchParams.delete("redirect");
    navigate("/home");
  }

  let fetchRecentChallenges = async () => {
    try {
      const data = await apiClient.get("/previousChallenges");
      console.log("previousChallenges ::::", data.data.data[0]);
      setdataFromApiRC([data.data.data[0], data.data.data[1]]);
    } catch (error) {
      console.error("previousChallenges ::iii::", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        fetchRecentChallenges();
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

  let completeChallengeNow = (e) => {
    console.log(e);
    setChallengeSelected(e);
    setCompleteChallenge(true);
    // CALL STRAVA HERE
    // CALL MANUAL ENTRY HERE
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
                  {dataFromApi.userStats.activeRM}x
                </h1>
                <p className="text-white font-12 font-weight-bold">
                  Today's Multipler
                </p>
              </div>

              <div className="d-flex justify-content-center">
                {/*  */}
                <Link
                  to="/create-challenge"
                  onClick={() => setActive("#challenge")}
                  className={
                    active == "#challenge"
                      ? "active-nav flex-1 footer-tab bg-turmaric text-white"
                      : "bg-turmaric flex-1 text-white"
                  }>
                  <button
                    className="text-uppercase card-top-button text-white"
                    style={{ borderRadius: "20px !important" }}>
                    Create Challenge
                  </button>
                </Link>
                {/*  */}
              </div>
            </div>
          </div>
          <div className="px-2 py-3 d-flex my-4 mx-2 tab-controls">
            <div
              className={`text-center flex-1 ${
                active == "#going" ? "active" : ""
              }`}
              onClick={() => setActive("#going")}>
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
              onClick={() => setActive("#previous")}>
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
                                  {item.currentBetRefSpeed} min / Km
                                </span>
                                <span>
                                  <HiClock className="mx-1 font-18 color-dark-grey " />
                                  {/* {item.createdAt} */}
                                  <small className="color-dark-grey font-12">
                                    Today @ {item.createdAt.substr(11)}
                                  </small>
                                </span>
                              </div>

                              <span className="bg-white color-theme px-2 py-1 rounded-sm">
                                <BiRupee className=" font-21 color-green-dark " />
                                {/* {item.amountBetted} */}
                                {item.amountBetted}
                              </span>
                            </div>
                          </div>
                          <div className="d-flex mt-3">
                            <span className="d-flex align-items-center">
                              <FaTachometerAlt className=" mx-2  color-dark-grey" />
                              <span className="font-13">
                                <b>{item.currentBetRM} x</b>
                              </span>
                            </span>
                            <div className="align-self-center ms-auto">
                              <Link
                                to="#"
                                onClick={() => {
                                  completeChallengeNow(item);
                                }}
                                className="btn btn-s bg-green-dark text-uppercase text-white font-14 ">
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
              {dataFromApiRC.length
                ? dataFromApiRC.map((item) => {
                    return (
                      <div
                        key={`challenge-${item.betCreationTimeUTC}`}
                        className="content you-container rounded-m cursor-pointer">
                        <div className="row mb-n2 color-theme">
                          <h4 className="col-6 font-20 text-start">
                            Challenge ID :{" "}
                            {formatNameDate(item.betCreationTimeUTC, item.id)}
                          </h4>
                          <div className="col-6 font-10 text-end opacity-30">
                            <font
                              className={` ${
                                item.betStatus == "Active" ||
                                item.betStatus == "Completed"
                                  ? "bg-highlight"
                                  : "bg-redd-dark"
                              }`}
                              style={{ padding: "5px", borderRadius: "10px" }}>
                              {item.betStatus}
                            </font>
                          </div>
                        </div>

                        <p className="font-11 mt-n2 mb-0 opacity-50">
                          <FaRoad className="mx-2" />
                          {item.minDistanceCondition} Kms |{" "}
                          <FaRunning className="mx-2" />
                          {item.activitySpeed} mins / km
                        </p>
                        <div className="row mb-n2 color-theme">
                          <div className="col-6 font-10 text-start">
                            <span
                              className={`badge ${
                                item.result != null
                                  ? item.result
                                    ? "bg-green-dark"
                                    : "bg-redd-dark"
                                  : "bg-redd-dark"
                              } color-white font-10 mt-2`}>
                              Betted : {item.amountBetted} Rs |{" "}
                              {item.result == null
                                ? "-"
                                : item.result
                                ? "WON"
                                : "LOST"}{" "}
                              {item.result == null
                                ? "-"
                                : item.amountWon != null
                                ? item.amountWon
                                : "-"}{" "}
                              Rs
                            </span>
                          </div>
                          <div className="col-6 font-10 text-end opacity-30">
                            <FaCalendarAlt className="mx-2" />
                            {formatDate(item.betCreationTimeUTC)}
                            <span className="copyright-year"></span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}

              {/* <div className="d-flex">
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
                onClick={() => setChallengeDetails(!challengeDetails)}>
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
                onClick={() => setCompleteChallenge(!completeChallenge)}>
                <button className=" btn btn-sm rounded-sm w-100 bg-blue-dark text-uppercase font-700">
                  <b>View Details</b>
                </button>
              </div> */}
            </div>
          )}

          <div className="col-12 mt-3">
            <button
              className="btn  rounded-sm w-100 bg-turmaric text-white text-uppercase font-700 py-2"
              onClick={() => setWinningPopup(!winningPopup)}>
              <b>TIP'S ON WINNING BETS</b>
            </button>
          </div>
          {winningPopup ? (
            <div>
              <div
                className="winning-popup menu-box-modal menu-box-detached rounded-m"
                style={{ display: "block" }}>
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
                    onClick={() => setWinningPopup(false)}>
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

          <div className="menu-hider"></div>
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
