import React, { Suspense } from "react";
import Loader from "./Loader";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Leaderboard,
  CreateChallenge,
  Milestones,
  Profile,
  FAQ,
  You,
  Wallet,
} from "../routes/routes";

const ContentBox = () => {
  return (
    <div className="pt-3">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/create-challenge" element={<CreateChallenge />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/you" element={<You />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/milestones" element={<Milestones />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default ContentBox;
