import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import { Login } from "../components/Login";
const HomePage = () => {
  return (
    <div>
      <Login />
      <HomeNavBar />
    </div>
  );
};

export default HomePage;
