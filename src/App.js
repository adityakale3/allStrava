import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import {
  GettingStarted,
  Dashboard,
  Signup,
  Login,
  Logout,
  StravaGetCode,
  QNA,
  Verify,
} from "./routes/routes";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<GettingStarted />} exact={true} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/exchange_token" element={<StravaGetCode />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/qna" element={<QNA />} />
          <Route path="/verify" element={<Verify />} />
          <Route exact path="*" element={<PrivateRoute />}>
            <Route path="*" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={2}
      />
    </Suspense>
  );
}

export default App;
