import React, { useState, useEffect } from "react";
import {
  FaAngleRight,
  FaRunning,
  FaWifi,
  FaWallet,
  FaUserAlt,
} from "react-icons/fa";
import {
  BsFillCameraVideoFill,
  BsLightbulbFill,
  BsPower,
} from "react-icons/bs";
import { MdAccountTree, MdCancel } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { AiFillSetting, AiFillFormatPainter } from "react-icons/ai";
import HowitWorks from "../HowitWorks";
import FAQPopup from "../FAQPopup";
import SettingPopup from "../SettingPopup";
import apiClient from "../../services/api";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const MenuBar = (props) => {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const navigate = useNavigate();
  const [dataFromApi, setDataFromApi] = useState(false);
  let logout = () => {
    navigate("/logout");
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await apiClient.get("/user");
        console.log("User Resp ::::", data.data.data);
        setDataFromApi(data.data.data);
      } catch (error) {
        console.error("User error ::iii::", error);
      }
    })().catch((err) => {
      console.error("Error ::iii::", err);
    });
  }, []);

  return (
    <div>
      {props.active ? (
        <div className="menu-container bg-skyblue">
          <div className="position-relative">
            <span
              className="font-28 text-turmaric cancal-sidebar-icon"
              onClick={() => props.closemenu(false)}>
              <MdCancel />
            </span>
            <div className="morning-activity-card mx-1 px-4 py-2 mt-3 d-flex">
              <div className="d-flex">
                <div>
                  <img
                    data-src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    className="me-3 rounded-circle shadow-l preload-img entered loaded"
                    data-ll-status="loaded"
                    width="40"
                  />
                </div>
                {/* <div className="d-flex flex-column">
                  Aditya Kale
                  <span className="font-12 color-gray-dark">
                    Strava: 67891273
                  </span>
                </div> */}
                <div>
                  <h3 className="mt-2 mb-0 font-700 font-24">
                    {dataFromApi
                      ? `${dataFromApi.userDetails.firstName} ${dataFromApi.userDetails.lastName}`
                      : null}
                  </h3>
                  <p className="font-14 mb-0 pb-0 font-500 color-gray-dark">
                    Strava ID :
                    {dataFromApi
                      ? dataFromApi.userDetails.stravaLinkedAccount
                      : null}
                  </p>
                </div>
              </div>
            </div>
            <div className="morning-activity-card mx-1 px-2 py-2 mt-3 d-flex flex-column">
              <span className="px-3 font-15 font-400 color-gray-dark mb-1">
                Navigation
              </span>
              <div className="list-group list-custom-small w-100">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => setShowAbout(!showAbout)}>
                  <span className="d-flex align-items-center">
                    <FaRunning className=" font-28 bg-yellow-dark mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300 ">About Us</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
                <div className="divider divider-margins my-1"></div>

                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={
                    () => navigate("/faq")
                    // setShowFAQ(!showFAQ)
                  }>
                  <span className="d-flex align-items-center">
                    <FaWifi className=" font-28 bg-blue-dark mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">FAQ</span>
                  </span>
                  <span className="color-gray-dark">
                    <FaAngleRight className="mx-1 cursor-pointer" />
                  </span>
                </div>

                <div className="divider divider-margins my-1"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    <BsFillCameraVideoFill className=" font-28 bg-blue-dark mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">How this Works</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
                <div className="divider divider-margins my-1"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    <FaWallet className=" font-28 bg-green-dark mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">Wallet</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="morning-activity-card mx-1 px-2 py-2 my-4 d-flex">
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className="d-flex align-items-center">
                  <BsLightbulbFill className=" font-28 bg-yellow-dark mx-2 px-2 rounded-s" />
                  <span className="font-15 font-300">Dark Mode</span>
                </span>
                <span className="d-flex align-items-center">
                  <input type="checkbox" id="switch" />
                  <label htmlFor="switch">Toggle</label>
                </span>
              </div>
            </div>
            <div className="morning-activity-card mx-1 px-2 py-2 my-4 d-flex">
              <div className="list-group list-custom-small w-100">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => setShowSetting(!showSetting)}>
                  <span className="d-flex align-items-center">
                    <AiFillSetting className=" font-28 bg-turmaric mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">Setting</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
                <div className="divider divider-margins my-1"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    <FaUserAlt className=" font-28 bg-blue-dark mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">Strava Account</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
                <div className="divider divider-margins my-1"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    <AiFillFormatPainter className=" font-28 bg-green-dark mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">Background Scheme</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
                <div className="divider divider-margins my-1"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    <BiSupport className=" font-28 bg-yellow-dark  mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">Support</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
                <div className="divider divider-margins my-1"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    <MdAccountTree className=" font-28 bg-turmaric mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">Legal</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
                <div className="divider divider-margins my-1"></div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={logout}>
                  <span className="d-flex align-items-center">
                    <BsPower className=" font-28 bg-turmaric mx-2 px-2 rounded-s" />
                    <span className="font-15 font-300">Logout</span>
                  </span>
                  <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showFAQ ? <FAQPopup setElement={setShowFAQ} /> : null}
      {showSetting ? <SettingPopup setElement={setShowSetting} /> : null}
      {showAbout ? <HowitWorks setElement={setShowAbout} /> : null}
    </div>
  );
};

export default MenuBar;
