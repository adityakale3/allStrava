import React from "react";
import { ContentBox } from "../../routes/routes";
import NavigationTabs from "../../components/NavigationTabs";
import HeaderSecond from "../../components/Header/Header-Two";

const Home = () => {
  return (
    <div>
      <HeaderSecond />
      <div className="container-fluid mb-5">
        <ContentBox />
      </div>
      <NavigationTabs />
    </div>
  );
};

export default Home;
