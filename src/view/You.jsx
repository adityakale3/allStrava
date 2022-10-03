import React, { useState, useEffect } from "react";
import face from "../asset/images/pictures/faces/1s.png";
import { Link } from "react-router-dom";
import { FaRoad, FaRunning, FaCalendarAlt } from "react-icons/fa";
import Milestones from "../view/Milestones";
import apiClient from "../services/api";

const You = () => {
  const [active, setActive] = useState("#statistics");
  const [dataFromApi, setDataFromApi] = useState(false);
  const [dataFromApiRC, setDataFromApiRC] = useState([]);
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

  let fetchUserData = async () => {
    try {
      const data = await apiClient.get("/user");
      console.log("User Resp YO ::::", data.data);
      setDataFromApi(data.data.data);
    } catch (error) {
      console.error("User error ::iii::", error);
    }
  };
  let fetchRecentChallenges = async () => {
    try {
      const data = await apiClient.get("/previousChallenges");
      console.log("previousChallenges ::::", data.data.data);
      setDataFromApiRC(data.data.data);
    } catch (error) {
      console.error("previousChallenges ::iii::", error);
    }
  };

  useEffect(() => {
    if (dataFromApiRC) {
      console.log("dataFromApiRC :::::::::", dataFromApiRC);
    }
  }, [dataFromApiRC]);

  useEffect(() => {
    fetchUserData();
    fetchRecentChallenges();
  }, []);

  console.log("::::", active);

  return (
    <div>
      <div
        id="menu-expense-1"
        className="you-container menu-box-bottom menu-box-detached rounded-m"
        style={{ marginBottom: "8rem" }}>
        <div
          className="tab-controls tab-align tabs-small tabs-rounded"
          data-highlight="bg-highlight">
          <span
            className={
              active == "#statistics" ? "collapsed tab-active" : "collapsed"
            }
            onClick={() => setActive("#statistics")}>
            Statistics
          </span>
          <span
            className={
              active == "#challenge" ? "collapsed tab-active" : "collapsed"
            }
            onClick={() => setActive("#challenge")}>
            All Challenges
          </span>
          <span
            className={
              active == "#milestones" ? "collapsed tab-active" : "collapsed"
            }
            onClick={() => setActive("#milestones")}>
            Milestones
          </span>
        </div>
        {/* 1 */}
        {active == "#statistics" ? (
          <div className="collapse show mt-4">
            <div className="menu-title">
              <h1 className="font-28 font-700">Your stats</h1>
              <p className="text-turmaric">
                Last updated on Completed activity
              </p>
            </div>
            <div className="divider divider-margins mb-1 mt-3"></div>
            <div className="content">
              <div className="row mb-0">
                <div className="col-3">
                  <img src={face} className="rounded-xl" width="80" />
                </div>
                <div className="col-9 ps-4">
                  <div className="d-flex">
                    <div>
                      <p className="font-700 color-theme">MFN Score</p>
                    </div>
                    <div className="ms-auto">
                      <p className="color-gray-dark">
                        {dataFromApi.userStats
                          ? dataFromApi.userStats.MFN
                          : null}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="font-700 color-theme">Won till date</p>
                    </div>
                    <div className="ms-auto">
                      <p className="color-gray-dark">
                        {dataFromApi.userStats
                          ? dataFromApi.userStats.totalAmountWonTillDate
                          : null}{" "}
                        Rs
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="font-700 color-theme">Lost till date</p>
                    </div>
                    <div className="ms-auto">
                      <p className="color-gray-dark">
                        {dataFromApi.userStats
                          ? dataFromApi.userStats.totalAmountLostTillDate
                          : null}{" "}
                        Rs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider mt-3 mb-3"></div>
              <div className="row mb-0">
                <div className="col-6">
                  <h4 className="font-14">Total Bets taken</h4>
                </div>
                <div className="col-6">
                  <h4 className="font-14 text-end">
                    {dataFromApi.userStats
                      ? dataFromApi.userStats.totalBetsPlacedTillDate
                      : null}
                  </h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-2"></div>
                <div className="col-6">
                  <h4 className="font-14 mt-1">Avg RM</h4>
                </div>
                <div className="col-6">
                  <h4 className="font-14 text-end mt-1">
                    {dataFromApi.userStats ? dataFromApi.userStats.avgRM : null}
                    x
                  </h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-2"></div>
                <div className="col-6">
                  <h4 className="font-14 mt-1">Win Streak</h4>
                </div>
                <div className="col-6">
                  <h4 className="font-14 text-end mt-1">0</h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-2"></div>
                <div className="col-6">
                  <h4 className="font-14 mt-1">Member Since days</h4>
                </div>
                <div className="col-6">
                  <h4 className="font-14 text-end mt-1">
                    {dataFromApi.userStats
                      ? dataFromApi.userStats.membersinceDays + " days"
                      : null}
                  </h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-3"></div>

                <div className="col-6">
                  <h4 className="font-14 mt-1">Next Challenge Ref Speed </h4>
                </div>
                <div className="col-6">
                  <h4 className="font-14 text-end mt-1">
                    {dataFromApi.userStats
                      ? dataFromApi.userStats.activeRefSpeed + "min's / Km"
                      : null}
                  </h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-3"></div>

                {/* <div className="col-12">
                  <Link
                    to="#"
                    className="btn btn-full  bg-blue-dark rounded-sm text-uppercase font-800 py-2 my-1 w-100">
                    <b>Download</b>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        ) : null}
        {/* 2 */}
        {active == "#challenge" ? (
          <div className="collapse show mt-4 ">
            {dataFromApiRC.length
              ? dataFromApiRC.map((item) => {
                  return (
                    <div
                      key={`challenge-${item.betCreationTimeUTC}`}
                      className="content you-container rounded-m cursor-pointer">
                      <div className="row mb-n2 color-theme">
                        <h4 className="col-6 font-20 text-start">
                          CID :{" "}
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

            {/* <div className="content you-container rounded-m cursor-pointer">
              <h3>Challenge ID : 22514</h3>
              <p className="font-11 mt-n2 mb-0 opacity-50">
                <FaRoad className="mx-2" />
                2.24 Kms | <FaRunning className="mx-2" />
                7.23 mins / km
              </p>
              <div className="row mb-n2 color-theme">
                <div className="col-6 font-10 text-start">
                  <span className="badge bg-green-dark color-white font-10 mt-2">
                    Betted : 123 Rs | WON 174 Rs
                  </span>
                </div>
                <div className="col-6 font-10 text-end opacity-30">
                  <FaCalendarAlt className="mx-2" />
                  16 Sept 22 <span className="copyright-year"></span>
                </div>
              </div>
            </div>
            <div className="content you-container rounded-m cursor-pointer">
              <h3>Challenge ID : 22514</h3>
              <p className="font-11 mt-n2 mb-0 opacity-50">
                <FaRoad className="mx-2" />
                2.24 Kms | <FaRunning className="mx-2" />
                11.23 mins / km
              </p>
              <div className="row mb-n2 color-theme">
                <div className="col-6 font-10 text-start">
                  <span
                    className="badge bg-red-dark color-white font-10 mt-2"
                    style={{ backgroundColor: "red" }}>
                    Betted : 123 Rs | WON 174 Rs
                  </span>
                </div>
                <div className="col-6 font-10 text-end opacity-30">
                  <FaCalendarAlt className="mx-2" />
                  15 Sept 22 <span className="copyright-year"></span>
                </div>
              </div>
            </div> */}
          </div>
        ) : null}
        {active == "#milestones" ? (
          <div className="collapse show mt-4">
            <Milestones />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default You;
