import React, { useState } from "react";
import Header from "../components/Header/Header-One";
import { GoCheck } from "react-icons/go";
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { toast } from "react-toastify";
import apiClient from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const Qna = () => {
  const navigate = useNavigate();
  const [workoutType, setWorkoutType] = useState(false);
  const [workoutFrequency, setWorkoutFrequency] = useState(false);
  const [workoutConsumption, setWorkoutConsumption] = useState(false);
  const [inputValue, setInputValue] = useState({
    height: "",
    weight: "",
    workoutType: "",
    workoutFrequency: "",
    workoutConsumption: "",
  });

  let handleclick = async (e) => {
    e.preventDefault();

    let dataToSend = {
      activityType: inputValue.workoutType,
      frequency: inputValue.workoutFrequency,
      consumption: inputValue.workoutConsumption,
      height: inputValue.height,
      weight: inputValue.weight,
    };

    console.log(dataToSend);

    if (
      dataToSend.activityType == "" ||
      dataToSend.frequency == "" ||
      dataToSend.consumption == "" ||
      dataToSend.height == "" ||
      dataToSend.weight == ""
    ) {
      toast.warning("All fields are mandatory");
    } else {
      try {
        const data = await apiClient.post("/qna", dataToSend);
        console.log("RESPONSE ::::", data.data);
        toast.success("Profile Completed");
        setTimeout(() => {
          navigate("/home");
          // history("/home");
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  let handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header />
      <div className="card-center">
        <div className="ps-4 pe-4">
          <div
            id="menu-expense-1"
            className="qna-section menu-box-bottom menu-box-detached rounded-m">
            <div className="content mb-0">
              <h3>Onboarding survey</h3>
              <p>Fill in the required onboarding questions to register</p>
              <div className="row mb-0">
                <div className="col-6">
                  <div className="input-style has-borders has-icon validate-field mb-4">
                    <FaWeightHanging className="input-icons" />

                    <input
                      type="number"
                      className="form-control validate-name"
                      id="form1"
                      placeholder="Height in CM"
                      onChange={(e) =>
                        setInputValue({ ...inputValue, height: e.target.value })
                      }
                    />
                    <label htmlFor="form1" className="color-highlight">
                      Height in CM
                    </label>

                    <em>(required)</em>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-style has-borders has-icon validate-field mb-4">
                    <GiBodyHeight className="input-icons" />

                    <input
                      type="number"
                      className="form-control validate-name"
                      id="form1"
                      placeholder="Weight in Kg"
                      onChange={(e) =>
                        setInputValue({ ...inputValue, weight: e.target.value })
                      }
                    />
                    <label htmlfor="form1" className="color-highlight">
                      Weight in Kg
                    </label>

                    <em>(required)</em>
                  </div>
                </div>
              </div>
              <div className="input-style no-borders no-icon mb-4">
                <label htmlfor="form5a" className="color-highlight">
                  Your workout type
                </label>
                <select onChange={handleChange} name="workoutType">
                  <option defaultValue="default" disabled selected>
                    Your workout type
                  </option>
                  <option value="Walking">Walking</option>
                  <option value="Jogging">Jogging</option>
                  <option value="Mix">Mix</option>
                </select>
                <span>
                  {workoutType ? (
                    <GoCheck className="font-28 color-green-dark" />
                  ) : null}
                </span>

                <em></em>
              </div>

              <div className="input-style no-borders no-icon mb-4">
                <label htmlfor="form5a" className="color-highlight">
                  Your workout frequency
                </label>
                <select onChange={handleChange} name="workoutFrequency">
                  <option defaultValue="default" disabled selected>
                    Your workout frequency
                  </option>
                  <option value="4 times a week">4 times a week</option>
                  <option value="Once in 2 weeks">Once in 2 weeks</option>
                  <option value="Once in a month">Once in a month</option>
                </select>
                <span>
                  {workoutFrequency ? (
                    <GoCheck className="font-28 color-green-dark" />
                  ) : null}
                </span>
                <em></em>
              </div>
              <div className="input-style no-borders no-icon mb-4">
                <label htmlfor="form5a" className="color-highlight">
                  Your workout consumption
                </label>
                <select onChange={handleChange} name="workoutConsumption">
                  <option defaultValue="default" disabled selected>
                    Your workout consumption
                  </option>
                  <option value="Less than 2 Kms">Less than 2 Kms</option>
                  <option value="2 to 5 Kms">2 to 5 Kms</option>
                  <option value="5 Plus Kms">5 Plus Kms</option>
                </select>
                <span>
                  {workoutConsumption ? (
                    <GoCheck className="font-28 color-green-dark" />
                  ) : null}
                </span>

                <em></em>
              </div>
            </div>
          </div>
          <div className="text-center w-100 mt-4">
            <input
              type="submit"
              value="Continue"
              onClick={handleclick}
              className="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-green-dark  w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
