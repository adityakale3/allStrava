import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbCurrencyRupee } from "react-icons/tb";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaTachometerAlt } from "react-icons/fa";

const ChallengeDetails = (props: any) => {
  return (
    <div id="menu-expense-1" className="menu rounded-m">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          <b>16th Aug Challenge</b>
        </h3>
        <span
          className="font-28 color-red-light"
          onClick={() => props.setElement(false)}
          style={{ cursor: "pointer" }}
        >
          <MdOutlineClose />
        </span>
      </div>
      <div className="divider divider-margins mb-2 mt-2"></div>
      <div className="content">
        <div className="row mb-0">
          <div className="col-2 mt-2">
            <span className="font-32 rounded-xl bg-blue-dark px-3 py-2 pb-3 ">
              <BsFillTrophyFill className="font-32 color-yellow-dark" />
            </span>
          </div>
          <div className="col-10 ps-4">
            <div className="d-flex my-2">
              <div>
                <p className="font-700 color-theme ps-2 m-0">Amount Betted</p>
              </div>
              <div className="ms-auto">
                <p className="m-0">
                  <TbCurrencyRupee className="color-green-dark font-22" /> 100
                </p>
              </div>
            </div>
            <div className="d-flex my-2">
              <div>
                <p className="font-700 color-theme ps-2 m-0">Amount Won</p>
              </div>
              <div className="ms-auto">
                <p className="m-0 ">
                  <TbCurrencyRupee className="color-green-dark font-22" /> 280
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider mt-2 mb-2"></div>
        <div className=" mb-0">
          <span className="d-flex justify-space-between align-items-center px-2">
            <div className="col-6">
              <h4 className="font-14 m-0">Distance covered</h4>
            </div>
            <div className="col-6">
              <h4 className="font-14 text-end m-0">2.24 Kms</h4>
            </div>
          </span>

          <div className="divider divider-margins mb-2 mt-2"></div>
          <span className="d-flex justify-space-between align-items-center px-2">
            <div className="col-6">
              <h4 className="font-14 mt-1 mb-1">Multipler</h4>
            </div>
            <div className="col-6">
              <h4 className="font-14 text-end mt-1 mb-1">
                <FaTachometerAlt className="color-green-dark font-22 mx-2" />
                2.5x
              </h4>
            </div>
          </span>

          <div className="divider divider-margins mb-2 mt-2"></div>
          <div className="col-12">
            <div className="font-14 text-end mt-1">
              <center>
                <h4 className="font-14 mt-1 font-800">Reason</h4>
              </center>
              <table className="w-100">
                <thead>
                  <tr className="text-center">
                    <th>Factor</th>
                    <th>Min</th>
                    <th>Actual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center font-600">
                    <td>Speed</td>
                    <td>8 min/km</td>
                    <td>
                      <i className="fa fa-check color-green-dark"></i> 7.5
                      min/km
                    </td>
                  </tr>
                  <tr className="text-center font-600">
                    <td>Distance</td>
                    <td>1.5 km</td>
                    <td>
                      <i className="fa fa-check color-green-dark"></i> 2.1 km
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="divider divider-margins w-100 mt-2 mb-3"></div>
          <div className="col-12" onClick={() => props.setElement(false)}>
            <button className="btn btn-sm rounded-sm w-100 bg-turmaric text-uppercase font-700">
              <b>Close</b>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ChallengeDetails;
