import React, { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("authToken");
    console.log("Logout");
    document.location.href = "/";
  }, []);

  return <div>Logout</div>;
}

export default Logout;
