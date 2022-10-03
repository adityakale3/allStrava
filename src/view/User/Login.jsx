import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { toast } from "react-toastify";
import apiClient from "../../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  let handelClick = async (e) => {
    e.preventDefault();

    if (!!!formData.email || !!!formData.password) {
      toast.warning("All Fields are mandatory");
    } else {
      if (validator.isEmail(formData.email)) {
        try {
          const data = await apiClient.post("/login", formData);
          console.log("RESPONSE Login::::", data.data.onBoardingQue);
          if (!data.data.onBoardingQue) {
            navigate("/qna");
          } else {
            toast.success(" Logged in successfully");
            setTimeout(() => {
              navigate("/home");
              // history("/home");
            }, 3000);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.warning("Invalid Email");
      }
    }
  };

  let handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card-center">
      <div className="ps-5 pe-5">
        <h1 className="text-center font-800 font-40 mb-1">Login</h1>
        <p className="color-highlight text-center font-12">
          Signin to your Account
        </p>
        <form action="">
          <div className="input-style no-borders has-icon validate-field mt-2 position-relative">
            <AiOutlineMail className="signup-icon" />
            <input
              type="email"
              name="email"
              className="form-control validate-name"
              id="form1aa"
              placeholder="Email"
              required="true"
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
              required="true"
              onChange={handelChange}
            />
            <label className="color-blue-dark font-10 mt-1">
              Choose a Password
            </label>

            <em>(required)</em>
          </div>

          <div className="text-center mb-2 mt-5">
            <Link
              to="/signup"
              className="font-12"
              style={{ textDecoration: "none" }}>
              New here ? Signup here
            </Link>
          </div>

          <input
            type="submit"
            onClick={handelClick}
            value="Login"
            className="w-100 btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-highlight"
          />
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

export default Login;
