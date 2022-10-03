import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import apiClient from "../../services/api";
import Loader from "../../components/Loader";

function StravaGetCode() {
  const [errorMsg, seterrorMsg] = useState(null);
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  useEffect(() => {
    if (searchParams.get("code")) {
      (async () => {
        try {
          const data = await apiClient.post("/linkStrava", {
            code: searchParams.get("code"),
            update: searchParams.get("update") ? true : false,
          });
          console.log("RESPONSE strava get ::::", data);
        } catch (error) {
          console.error("Error ::iii::", error);
          seterrorMsg(error.data.msg);
          setTimeout(() => {
            window.location.href = "/logout";
          }, 3000);
        }
      })().catch((err) => {
        console.error("Error ::iii::", err);
        setTimeout(() => {
          window.location.href = "/logout";
        }, 3000);
      });
    }
  }, []);

  // if (searchParams.get("msg")) {
  //   // toast.error(searchParams.get("msg"));
  //   searchParams.delete("msg");
  // }

  return (
    <div>
      {errorMsg ? (
        <b>
          <center>{errorMsg}</center>
        </b>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default StravaGetCode;
