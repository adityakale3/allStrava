import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = () => {
  const token = localStorage.getItem("authToken");
  // const token = "Dhiraj";
  if (token) {
    return <Outlet />;
  } else {
    toast.error("Unauthorized ☠️, Kindly Login");
    localStorage.removeItem("authToken");
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
