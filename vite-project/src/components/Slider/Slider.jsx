import React from "react";
import { useState, useEffect } from "react";
import { getAlbums } from "../../api/getAlbums";
import "./Slider.css";
import { motion } from "framer-motion";
import { SliderTitle } from "../../ui/SliderTitle.styles";

const Slider = ({ title }) => {
  const [apiData, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const jsonData = await getAlbums();
      setData(jsonData);
    };
    data();
  }, []);

  return (
    <>
      <SliderTitle>{title}</SliderTitle>

      <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -1874 }}
        >
          {apiData.map((album) => {
            return (
              <>
                <motion.div className="item" key={album.id}>
                  <img src={album.imageUrl} alt={album.name} />
                  <p>{album.name}</p>
                </motion.div>
              </>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Slider;
