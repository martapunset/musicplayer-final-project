import React from "react";
import { useState, useEffect } from "react";
import { getAlbums } from "../../api/getAlbums";
// import "./Slider.css";
// import { motion } from "framer-motion";
import { SliderTitle } from "../../ui/SliderTitle.styles";
// import axios from "axios";

const Slider = ({ title }) => {
  // const [apiData, setData] = useState([]);

  // useEffect(() => {
  //   const data = async () => {
  //     const jsonData = await getAlbums();
  //     setData(jsonData);
  //   };
  //   data();
  // }, []);
  // const [albumData, setAlbumData] = useState([]);
  // const [playlistData, setPlaylistData] = useState([]);
  // const [artistData, setArtistData] = useState([]);

  // const fetchData = () => {
  //   const albumApi = "http://localhost:4000/albums";
  //   const playlistApi = "http://localhost:4000/playlists";
  //   const artistApi = "http://localhost:4000/artists";

  //   const getAlbumss = axios.get(albumApi);
  //   const getPlaylists = axios.get(playlistApi);
  //   const getArtists = axios.get(artistApi);

  //   axios.all([getAlbumss, getPlaylists, getArtists]).then(
  //     axios.spread((...allData) => {
  //       const allDataAlbums = allData[0].data;
  //       const allDataPlaylists = allData[1].data;
  //       const allDataArtists = allData[2].data;

  //       setAlbumData(allDataAlbums);
  //       setPlaylistData(allDataPlaylists);
  //       setArtistData(allDataArtists[0]);
  //     })
  //   );
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <SliderTitle>{title}</SliderTitle>

      {/* <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -1874 }}
        >
          {artistData.map((album) => {
            return (
              <>
                <motion.div className="item" key={album.id}>
                  <img src={album.photoUrl} alt={album.name} />
                  <p>{album.name}</p>
                </motion.div>
              </>
            );
          })}
        </motion.div>
      </motion.div> */}
    </>
  );
};

export default Slider;
