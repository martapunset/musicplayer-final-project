import React from "react";
import { useState, useEffect } from "react";
import { getAlbums } from "../../api/getAlbums";
// import "./Slider.css";
// import { motion } from "framer-motion";
import { SliderTitle } from "../../ui/SliderTitle.styles";
// import axios from "axios";

const SlidersTitles = ({ title }) => {
  return (
    <>
      <SliderTitle>{title}</SliderTitle>
    </>
  );
};

export default SlidersTitles;
