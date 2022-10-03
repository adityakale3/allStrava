import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import apiClient from "../services/api";
import Loader from "../components/Loader";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Leaderboard = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState("area");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Area");

  let handleChange = (e) => {
    console.log("E ::", e.target.value);
    setfilter(e.target.value);
    // (async () => {
    //   try {
    //     const data = await apiClient.get("/leaderboard", {
    //       filter: e.target.value,
    //     });
    //     console.log("User Resp ::::", data.data.data);
    //     setdata([...data.data.data]);
    //   } catch (error) {
    //     console.error("User error ::iii::", error);
    //   }
    // })().catch((err) => {
    //   console.error("Error ::iii::", err);
    // });
  };

  useEffect(() => {
    console.log("Current Filter :::", filter);
    (async () => {
      try {
        const data = await apiClient.get("/leaderboard", { filter });
        console.log("User Resp ::::", data.data.data);
        setdata([...data.data.data]);
      } catch (error) {
        console.error("User error ::iii::", error);
      }
    })().catch((err) => {
      console.error("Error ::iii::", err);
    });
  }, [filter]);

  return (
    <div className="home-container">
      <div className="d-flex px-2 pb-4">
        <div className="ms-auto align-self-center">
          <Link
            to="/create-challenge"
            className="btn btn-sm bg-blue-dark text-uppercase font-700 rounded-sm"
          >
            Create Now
          </Link>
        </div>
      </div>
      <div className="morning-activity-card mx-1 px-4 py-3 ">
        <div className="d-flex">
          <div className="align-self-center">
            <h3 className="mb-0">Leaderboard</h3>
          </div>
          <div className="align-self-center ms-auto ">
            <div className="input-style has-borders no-icon mb-4 position-relative">
              <div
                className="d-flex justify-space-between select-value"
                onClick={() => setOpen(!open)}
              >
                <b>{name}</b>
                <MdOutlineKeyboardArrowDown />
              </div>
              {open ? (
                <div className="select-value text-start mt-3 select-menu">
                  <div
                    className="bg-fade-gray-light px-2 py-2 rounded-s mb-1 cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      setName("City");
                    }}
                  >
                    <b>City</b>
                  </div>
                  <div
                    className="bg-fade-gray-light px-2 py-2 rounded-s cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      setName("State");
                    }}
                  >
                    <b>State</b>
                  </div>
                </div>
              ) : null}

              {/* <select name="filter" onChange={handleChange}>
                <option value="area" disabled="" selected="">
                  Select Fliter
                </option>
                <option value="area" selected>
                  Area
                </option>
                <option value="city">City</option>
                <option value="state">State</option>
              </select>
              <span>
                <i className="fa fa-chevron-down"></i>
              </span>
              <i className="fa fa-check disabled valid color-green-dark"></i>
              <i className="fa fa-check disabled invalid color-red-dark"></i>
              <em></em> */}
            </div>
          </div>
        </div>
        <div className="divider mt-3 mb-3"></div>
        {data.length
          ? data.map((item, id) => {
              return (
                <div className="d-flex mb-3" key={"leader-" + id}>
                  <div className="align-self-center">
                    <h1
                      className={`pe-3 font-40 font-900  ${
                        !!item.isActive ? "opacity-100" : "opacity-25"
                      }`}
                    >
                      {item.Rank}
                    </h1>
                  </div>
                  <div className="align-self-center">
                    <h4 className="mb-n1 font-20">
                      {item.firstName} {item.lastName}
                    </h4>
                    <p className="font-10 opacity-50 m-0">{item.MFN}</p>
                  </div>
                  {id > 3 ? (
                    <div className="align-self-center ms-auto font-32">
                      <BsFillTrophyFill />
                    </div>
                  ) : (
                    <div className="align-self-center ms-auto font-32">
                      <FaMedal />
                    </div>
                  )}
                </div>
              );
            })
          : "No Stats available"}
      </div>
    </div>
  );
};

export default Leaderboard;
