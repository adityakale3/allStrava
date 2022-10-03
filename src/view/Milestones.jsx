import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  FaRunning,
  FaBurn,
  FaCalendarAlt,
  FaRoad,
  FaStar,
  FaFlagCheckered,
  FaCalendarCheck,
  FaTachometerAlt,
} from "react-icons/fa";
import apiClient from "../services/api";

const Milestones = () => {
  const [dataFromDB, setDataFromDB] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiClient.get("/milestones");
        console.log("Milestones resp ::::", data);
        setDataFromDB(data.data.data);
      } catch (error) {
        console.error("User error ::iii::", error);
      }
    })().catch((err) => {
      console.error("Error ::iii::", err);
    });
  }, []);

  return (
    <div className="home-container">
      <div className="d-flex px-2 pb-4">
        <div className="align-self-center me-auto">
          <strong className="text-uppercase opacity-60 font-14">
            Your Journey
          </strong>
          <h1 className="font-28 font-700">Welcome</h1>
        </div>
        <div className="align-self-center ms-auto mt-1">
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="img-fluid shadow-xl rounded-circle"
              width="52"
              alt="img"
            />
          </span>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="col-12 col-sm-6 pe-md-2">
          <div className="morning-activity-card mx-1 px-2 mt-3">
            <div className="mt-2">
              <span className="rounded-sm float-end mx-3 mt-3 font-25 bg-fade-gray-light px-2 pb-2">
                <FaRunning className="color-green-dark" />
              </span>
            </div>
            <div className=" p-3">
              <h5 className="d-block font-16 pt-1 font-700 mb-0">
                Total Distance
              </h5>
              <h1 className=" font-25 pb-1 font-700">23.7 Kms</h1>
              {/* <AiOutlineArrowUp className="color-green-dark" />
              <span className="font-10 font-700 color-green-dark">2.5</span>
              <span className="font-10 opacity-60"> Avg Km / activity</span> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 pe-md-2">
          <div className="morning-activity-card mx-1 px-2 mt-3">
            <div className="mt-2">
              <span className="rounded-sm float-end mx-3 mt-3 font-25 bg-fade-gray-light px-2 pb-2">
                <FaBurn className="color-green-dark" />
              </span>
            </div>
            <div className=" p-3">
              <h5 className="d-block font-16 pt-1 font-700 mb-0">Best Speed</h5>
              <h1 className=" font-25 pb-1 font-700">
                {dataFromDB.length ? dataFromDB[0].activeRefSpeed : null} min /
                km
              </h1>
              {/* <AiOutlineArrowUp className="color-green-dark" />
              <span className="font-10 font-700 color-green-dark">
                {dataFromDB ? dataFromDB[0].activeRefSpeed : null}
              </span>
              <span className="font-10 opacity-60"> Avg Speed / activity</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {dataFromDB
          ? dataFromDB.map((item, id) => {
              return (
                <div className="col-12 col-sm-6 pe-md-2" key={id}>
                  <div className="morning-activity-card mx-1 p-4 mt-3">
                    <center>
                      {item.icon == "FaRoad" ? (
                        <FaRoad
                          className={`font-40 ${
                            item.milestoneStatus
                              ? "color-green-dark"
                              : "color-gray-dark"
                          }`}
                        />
                      ) : item.icon == "FaRunning" ? (
                        <FaRunning
                          className={`font-40 ${
                            item.milestoneStatus
                              ? "color-green-dark"
                              : "color-gray-dark"
                          }`}
                        />
                      ) : item.icon == "FaCalendarAlt" ? (
                        <FaCalendarAlt
                          className={`font-40 ${
                            item.milestoneStatus
                              ? "color-green-dark"
                              : "color-gray-dark"
                          }`}
                        />
                      ) : item.icon == "FaFlagCheckered" ? (
                        <FaFlagCheckered
                          className={`font-40 ${
                            item.milestoneStatus
                              ? "color-green-dark"
                              : "color-gray-dark"
                          }`}
                        />
                      ) : item.icon == "FaCalendarCheck" ? (
                        <FaCalendarCheck
                          className={`font-40 ${
                            item.milestoneStatus
                              ? "color-green-dark"
                              : "color-gray-dark"
                          }`}
                        />
                      ) : item.icon == "FaTachometerAlt" ? (
                        <FaTachometerAlt
                          className={`font-40 ${
                            item.milestoneStatus
                              ? "color-green-dark"
                              : "color-gray-dark"
                          }`}
                        />
                      ) : null}
                      {/* <FaCalendarCheck
                        className={`font-40 ${
                          item.milestoneStatus
                            ? "color-green-dark"
                            : "color-gray-dark"
                        }`}
                      /> */}
                      <h1 className="pt-4 font-30 font-700">{item.speed}</h1>
                      <h2 className="font-11 opacity-60 mt-n2 mb-3 pb-1">
                        <b>{item.milestoneName}</b>
                      </h2>
                    </center>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Milestones;
