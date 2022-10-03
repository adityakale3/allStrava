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
import { AiFillSetting, AiFillFormatPainter } from "react-icons/ai";
import HowitWorks from "../components/HowitWorks";
import FAQPopup from "../components/FAQPopup";
import SettingPopup from "../components/SettingPopup";
import apiClient from "../services/api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
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

  const [showFAQ, setShowFAQ] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <div>
        <div className="morning-activity-card mx-1 px-4 py-4 mt-3 d-flex">
          <div>
            <img
              data-src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="me-3 rounded-circle shadow-l preload-img entered loaded"
              data-ll-status="loaded"
              width="60"
            />
          </div>
          <div>
            <h3 className="mt-2 mb-0 font-700 font-24">
              {dataFromApi
                ? `${dataFromApi.userDetails.firstName} ${dataFromApi.userDetails.lastName}`
                : null}
            </h3>
            <p className="font-14 mb-0 pb-0 font-500 color-gray-dark">
              Strava ID :
              {dataFromApi ? dataFromApi.userDetails.stravaLinkedAccount : null}
            </p>
          </div>
        </div>
        <div className="morning-activity-card mx-1 px-2 py-2 mt-3 d-flex">
          <div className="list-group list-custom-small w-100">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => setShowAbout(!showAbout)}
            >
              <span className="d-flex align-items-center">
                <FaRunning className=" font-34 bg-yellow-dark mx-2 px-2 rounded-s" />
                About Us
              </span>
              <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
            </div>
            <div className="divider divider-margins my-1"></div>
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => setShowFAQ(!showFAQ)}
            >
              <span className="d-flex align-items-center">
                <FaWifi className=" font-34 bg-blue-dark mx-2 px-2 rounded-s" />
                FAQ
              </span>
              <span className="color-gray-dark">
                <b>Frequently Asked Question</b>
                <FaAngleRight className="mx-1 cursor-pointer" />
              </span>
            </div>
            <div className="divider divider-margins my-1"></div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="d-flex align-items-center">
                <BsFillCameraVideoFill className=" font-34 bg-blue-dark mx-2 px-2 rounded-s" />
                How this Works
              </span>
              <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
            </div>
            <div className="divider divider-margins my-1"></div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="d-flex align-items-center">
                <FaWallet className=" font-34 bg-green-dark mx-2 px-2 rounded-s" />
                Wallet
              </span>
              <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="morning-activity-card mx-1 px-2 py-2 my-4 d-flex">
          <div className="d-flex justify-content-between align-items-center w-100">
            <span className="d-flex align-items-center">
              <BsLightbulbFill className=" font-34 bg-yellow-dark mx-2 px-2 rounded-s" />
              Dark Mode
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
              onClick={() => setShowSetting(!showSetting)}
            >
              <span className="d-flex align-items-center">
                <AiFillSetting className=" font-34 bg-turmaric mx-2 px-2 rounded-s" />
                Setting
              </span>
              <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
            </div>
            <div className="divider divider-margins my-1"></div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="d-flex align-items-center">
                <FaUserAlt className=" font-34 bg-blue-dark mx-2 px-2 rounded-s" />
                Strava Account
              </span>
              <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
            </div>
            <div className="divider divider-margins my-1"></div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="d-flex align-items-center">
                <AiFillFormatPainter className=" font-34 bg-green-dark mx-2 px-2 rounded-s" />
                Background Scheme
              </span>
              <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
            </div>
            <div className="divider divider-margins my-1"></div>
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={logout}
            >
              <span className="d-flex align-items-center">
                <BsPower className=" font-34 bg-turmaric mx-2 px-2 rounded-s" />
                Logout
              </span>
              <FaAngleRight className="mx-1 color-gray-dark cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {showFAQ ? <FAQPopup setElement={setShowFAQ} /> : null}
      {showSetting ? <SettingPopup setElement={setShowSetting} /> : null}
      {showAbout ? <HowitWorks setElement={setShowAbout} /> : null}
    </div>
  );
};

export default Profile;
