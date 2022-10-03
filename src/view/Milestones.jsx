import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaRunning, FaBurn } from "react-icons/fa";

const Milestones = () => {
  const data = [
    {
      speed: "5Kms",
      description: "Completed 5 Kms",
      color: "color-green-dark",
    },
    {
      speed: "10Kms",
      description: "Completed 10 Kms",
      color: "color-green-dark",
    },
    {
      speed: "15Kms",
      description: "Completed 15 Kms",
      color: "color-gray-dark",
    },
    {
      speed: "20Kms",
      description: "Completed 20 Kms",
      color: "color-gray-dark",
    },
    {
      speed: "20min/km",
      description: "speed of 5min/km",
      color: "color-green-dark",
    },
  ];

  return (
    <div className="home-container">
      <div className="d-flex px-2 pb-4">
        <div className="align-self-center me-auto">
          <strong className="text-uppercase opacity-60 font-14">Your Journey</strong>
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
                <FaRunning />
              </span>
            </div>
            <div className=" p-3">
              <h5 className="d-block font-16 pt-1 font-700 mb-0">Total Distance</h5>
              <h1 className=" font-25 pb-1 font-700">23.7 Kms</h1>
              <AiOutlineArrowUp className="color-green-dark" />
              <span className="font-10 font-700 color-green-dark">2.5</span>
              <span className="font-10 opacity-60"> Avg Km / activity</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 pe-md-2">
          <div className="morning-activity-card mx-1 px-2 mt-3">
            <div className="mt-2">
              <span className="rounded-sm float-end mx-3 mt-3 font-25 bg-fade-orange-light px-2 pb-2">
                <FaBurn className="color-orange-dark" />
              </span>
            </div>
            <div className=" p-3">
              <h5 className="d-block font-16 pt-1 font-700 mb-0">Best Speed</h5>
              <h1 className=" font-25 pb-1 font-700">4 min / km</h1>
              <AiOutlineArrowUp className="color-green-dark" />
              <span className="font-10 font-700 color-green-dark">10</span>
              <span className="font-10 opacity-60"> Avg Speed / activity</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {data.map((item, id) => {
          return (
            <div className="col-12 col-sm-6 pe-md-2" key={id}>
              <div className="morning-activity-card mx-1 p-4 mt-3">
                <center>
                  <FaRunning className={`font-40 ${item.color}`} />
                  <h1 className="pt-4 font-30 font-700">{item.speed}</h1>
                  <p className="font-11 opacity-50 mt-n2 mb-3 pb-1">{item.description}</p>
                  <p className="mb-0 pb-0 font-10 opacity-40">Tap to View</p>
                </center>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Milestones;
