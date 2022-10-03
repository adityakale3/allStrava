import React, { useState } from "react";
import face from "../asset/images/pictures/faces/1s.png";
import { Link } from "react-router-dom";
import { FaRoad, FaRunning, FaCalendarAlt } from "react-icons/fa";
import Milestones from "../view/Milestones";

const You = () => {
  const [active, setActive] = useState("#statistics");

  console.log("::::", active);

  return (
    <div>
      <div
        id="menu-expense-1"
        className="you-container menu-box-bottom menu-box-detached rounded-m"
        style={{ marginBottom: "8rem" }}
      >
        <div
          className="tab-controls tab-align tabs-small tabs-rounded"
          data-highlight="bg-highlight"
        >
          <span
            className={
              active == "#statistics" ? "collapsed tab-active" : "collapsed"
            }
            onClick={() => setActive("#statistics")}
          >
            Statistics
          </span>
          <span
            className={
              active == "#challenge" ? "collapsed tab-active" : "collapsed"
            }
            onClick={() => setActive("#challenge")}
          >
            All Challenges
          </span>
          <span
            className={
              active == "#milestones" ? "collapsed tab-active" : "collapsed"
            }
            onClick={() => setActive("#milestones")}
          >
            Milestones
          </span>
        </div>
        {/* 1 */}
        {active == "#statistics" ? (
          <div class="collapse show mt-4">
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
                      <p className="font-700 color-theme">MFN</p>
                    </div>
                    <div className="ms-auto">
                      <p className="color-gray-dark">2334.4</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="font-700 color-theme">Won till date</p>
                    </div>
                    <div className="ms-auto">
                      <p className="color-gray-dark">7312.45 Rs</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="font-700 color-theme">Lost till date</p>
                    </div>
                    <div className="ms-auto">
                      <p className="color-gray-dark">243 Rs</p>
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
                  <h4 className="font-14 text-end">23</h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-2"></div>
                <div className="col-6">
                  <h4 className="font-14 mt-1">Avg RM</h4>
                </div>
                <div className="col-6">
                  <h4 className="font-14 text-end mt-1">2.34x</h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-2"></div>
                <div className="col-6">
                  <h4 className="font-14 mt-1">Win Streak</h4>
                </div>
                <div className="col-6">
                  <h4 className="font-14 text-end mt-1">5 days</h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-2"></div>
                <div className="col-6">
                  <h4 className="font-14 mt-1">Avg Distance</h4>
                </div>
                <div className="col-6">
                  <h4 className="font-14 text-end mt-1 color-green-dark">
                    2.23
                  </h4>
                </div>
                <div className="divider divider-margins w-100 mt-2 mb-3"></div>
                <div className="col-12">
                  <Link
                    to="#"
                    className="btn btn-full  bg-blue-dark rounded-sm text-uppercase font-800 py-2 my-1 w-100"
                  >
                    <b>Download</b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {/* 2 */}
        {active == "#challenge" ? (
          <div className="collapse show mt-4 ">
            <div className="content you-container rounded-m cursor-pointer">
              <h3>Challenge ID : 22314</h3>
              <p className="font-11 mt-n2 mb-0 opacity-50">
                <FaRoad className="mx-2" />
                2.23 Kms | <FaRunning className="mx-2" />
                6.23 mins / km
              </p>
              <div className="row mb-n2 color-theme">
                <div className="col-6 font-10 text-start">
                  <span className="badge bg-green-dark color-white font-10 mt-2">
                    Betted : 23 Rs | WON 34 Rs
                  </span>
                </div>
                <div className="col-6 font-10 text-end opacity-30">
                  <FaCalendarAlt className="mx-2" />
                  17 Sept 22 <span className="copyright-year"></span>
                </div>
              </div>
            </div>
            <div className="content you-container rounded-m cursor-pointer">
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
                    style={{ backgroundColor: "red" }}
                  >
                    Betted : 123 Rs | WON 174 Rs
                  </span>
                </div>
                <div className="col-6 font-10 text-end opacity-30">
                  <FaCalendarAlt className="mx-2" />
                  15 Sept 22 <span className="copyright-year"></span>
                </div>
              </div>
            </div>
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
