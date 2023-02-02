import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import axios from "axios";
import Slider from "../components/Slider/Slider";
import "../components/Slider/Slider.css";
import { H1style } from "../ui";

export const HomePage = () => {
  const { isAuthenticated, user: userFromAuth0 } = useAuth0();
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  useEffect(() => {
    login(userFromAuth0);
  }, [userFromAuth0]);

  const [tracksData, setTracksData] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [artistData, setArtistData] = useState([]);

  const date = new Date();
  const hour = date.getHours();
  const welcome =
    hour < 6 || hour > 18
      ? "Good evening, "
      : hour > 5 && hour < 13
      ? "Good morning, "
      : "Good afternoon, ";

  const getTracks = async () => {
    const tracksApi = "http://localhost:4000/tracks";

    try {
      const response = await axios.get(tracksApi);
      setTracksData(response.data.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const getPlaylists = async () => {
    const playlistApi = "http://localhost:4000/playlists";
    try {
      const response = await axios.get(playlistApi);
      setPlaylistData(response.data.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getTracks();
    getPlaylists();
    getAllArtists();
  }, []);

  //Request to back

  const getAllAlbums = async () => {
    try {
      const response = await axios.get("http://localhost:4000/albums");
      setAlbumData(response.data.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const getAllArtists = async () => {
    try {
      const response = await axios.get("http://localhost:4000/artists");
      setArtistData(response.data.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <H1style>{`${welcome}${user?.firstName}`}</H1style>
      <div className="home">
        <Slider title="Recently Played" />
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1910 }}
          >
            {tracksData?.map((album) => {
              return (
                <motion.div className="item" key={album.id}>
                  <img src={album.thumbnail} alt={album.title} />
                  <p>{album.title}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <Slider title="Followed Playlists" />
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -780 }}
          >
            {playlistData?.map((album) => {
              return (
                <motion.div className="item" key={album.id}>
                  <img src={album.thumbnail} alt={album.name} />
                  <p>{album.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <Slider title="Popular Artists" />
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1910 }}
          >
            {artistData?.map((artists) => {
              return (
                <motion.div className="item" key={artists.id}>
                  <img
                    className="artistsProfile"
                    src={artists.photoUrl}
                    alt={artists.name}
                  />
                  <p>{artists.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
