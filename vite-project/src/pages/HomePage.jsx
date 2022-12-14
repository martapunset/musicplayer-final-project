import React, { useState, useEffect } from "react";
import { HomeNavBar } from "../components/HomeNavBar";
import axios from "axios";
import { HomeItems } from "./HomeItems";
import { getApiData } from "../api/getApiData";

export const HomePage = () => {
  return (
    <>
      <h1>Canciones</h1>
      <div className="home">
        <HomeItems albums={albums} tracks={tracks} />
      </div>

      <HomeNavBar />
    </>
  );
};
