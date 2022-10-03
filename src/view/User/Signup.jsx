import React, { useState, useEffect } from "react";
import { FaUserAlt, FaBirthdayCake, FaMapPin, FaMobile } from "react-icons/fa";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import validator from "validator";

// import { toast } from "react-toastify";
import apiClient from "../../services/api";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams);
    document.getElementById("refralCode").value = searchParams.get("ref")
      ? searchParams.get("ref")
      : "";
  }, []);

  let handelClick = async (e) => {
    e.preventDefault();

    console.log("ALL DATA  :::::", formData);

    setFormData({
      ...formData,
      refralCode: document.getElementById("refralCode").value
        ? document.getElementById("refralCode").value
        : null,
    });

    let errors = [];

    !!!formData.firstName ? errors.push("First name is required") : null;
    !!!formData.lastName ? errors.push("Last name is required") : null;
    !!!formData.email ? errors.push("Email is required") : null;
    !!!formData.password ? errors.push("Password is required") : null;
    !!!formData.cpassword ? errors.push("Confirm password is required") : null;
    !!!formData.dob ? errors.push("Date of birth is required") : null;
    !!!formData.phone ? errors.push("Phone is required") : null;
    !!!formData.pincode ? errors.push("Pincode birth is required") : null;

    if (errors.length) {
    } else {
      try {
        const data = await apiClient.post("/signup", formData);
        console.log("RESPONSE ::::", data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  let handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card-center">
      <div className="ps-5 pe-5">
        <h1 className="text-center font-800 font-40 mb-1">Sign Up</h1>
        <p className="color-highlight text-center font-12">Create an Account</p>
        <form action="">
          <div className="d-flex px-1 pb-0" style={{ margin: 0, padding: 0 }}>
            <div className="align-self-center">
              <div className="input-style no-borders has-icon validate-field position-relative">
                <FaUserAlt className="signup-icon" />
                <input
                  type="name"
                  name="firstName"
                  className="form-control validate-name"
                  id="form1a"
                  placeholder="First Name"
                  onChange={handelChange}
                  required
                />
                <label className="color-blue-dark font-10 mt-1">
                  First Name*
                </label>

                <em></em>
              </div>
            </div>
            <div className="ms-auto align-self-center">
              <div className="input-style no-borders has-icon validate-field position-relative">
                <FaUserAlt className="signup-icon" />
                <input
                  type="name"
                  name="lastName"
                  className="form-control validate-name"
                  id="form1a"
                  placeholder="Last Name"
                  onChange={handelChange}
                  required
                />
                <label className="color-blue-dark font-10 mt-1">
                  Last Name*
                </label>

                <em></em>
              </div>
            </div>
          </div>

          <div className="input-style no-borders has-icon validate-field mt-2 position-relative">
            <AiOutlineMail className="signup-icon" />
            <input
              type="email"
              name="email"
              className="form-control validate-name"
              id="form1aa"
              placeholder="Email"
              required
              onChange={handelChange}
            />
            <label className="color-blue-dark font-10 mt-1">Email*</label>

            <em>Email must match with Strava email</em>
            <span></span>
          </div>
          <div className="input-style no-borders has-icon validate-field mt-2 position-relative">
            <AiFillLock className="signup-icon" />
            <input
              type="password"
              name="password"
              className="form-control validate-text"
              id="form3a"
              placeholder="Choose a Password"
              required
              onChange={handelChange}
            />
            <label className="color-blue-dark font-10 mt-1">
              Choose a Password
            </label>

            <em>(required)</em>
          </div>
          <div className="input-style no-borders has-icon validate-field mt-2 position-relative">
            <AiFillLock className="signup-icon" />
            <input
              type="password"
              name="cpassword"
              className="form-control validate-text"
              id="form3a1"
              placeholder="Confirm your Password"
              required
              onChange={handelChange}
            />
            <label className="color-blue-dark font-10 mt-1">
              Confirm your Password
            </label>

            <em>(required)</em>
          </div>

          <div className="input-style no-borders has-icon validate-field mt-2">
            <FaBirthdayCake className="signup-icon" />
            <input
              type="date"
              className="form-control validate-text"
              id="form4a1"
              placeholder="Date of Birth"
              required
              name="dob"
              onChange={handelChange}
            />
            <label htmlFor="form4a1" className="color-blue-dark font-10 mt-1">
              Enter Date of Birth
            </label>
            <i className="fa fa-times disabled invalid color-red-dark"></i>
            <i className="fa fa-check disabled valid color-green-dark"></i>
            <em>(required)</em>
          </div>

          <div className="input-style no-borders has-icon validate-field mt-2">
            <FaMapPin className="signup-icon" />
            <input
              type="number"
              className="form-control validate-text"
              id="form4a2"
              placeholder="Pin Code"
              required
              name="pincode"
              onChange={handelChange}
            />
            <label htmlFor="form4a2" className="color-blue-dark font-10 mt-1">
              Enter your area Pin Code
            </label>
            <i className="fa fa-times disabled invalid color-red-dark"></i>
            <i className="fa fa-check disabled valid color-green-dark"></i>
            <em>(required)</em>
          </div>

          <div className="input-style no-borders has-icon validate-field mt-2">
            <FaMobile className="signup-icon" />
            <input
              type="number"
              className="form-control validate-text"
              id="form4a3"
              placeholder="Phone Number"
              required
              name="phone"
              onChange={handelChange}
            />
            <label htmlFor="form4a3" className="color-blue-dark font-10 mt-1">
              Enter your Mobile Number
            </label>
            <i className="fa fa-times disabled invalid color-red-dark"></i>
            <i className="fa fa-check disabled valid color-green-dark"></i>
            <em>(required)</em>
          </div>

          <input type="hidden" id="refralCode" value="adityakale3@gmail.com" />

          <div className="text-center mb-5 mt-5">
            <Link to="/login" className="font-12">
              Already Registered? Sign in Here
            </Link>
          </div>

          <div className="text-center w-100">
            <input
              type="submit"
              onClick={handelClick}
              value="Signup & Continue"
              className="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-highlight w-100"
            />
          </div>
        </form>
        {/* <div className="text-center">
          <a
            href="http://www.strava.com/oauth/authorize?client_id=90770&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,read_all,profile:read_all,activity:read,activity:read_all"
            className="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-highlight">
            Link Strava
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
