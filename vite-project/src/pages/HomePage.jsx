import React, { useContext, useEffect, useState } from "react";
// import { ProfileImage } from "../ui/";
// import { WelcomeCard, WelcomeTitle } from "../ui/WelcomeCard.styles";
import { AuthContext } from "../auth/authContext/AuthContext";
import Slider from "../components/Slider/Slider";
import { motion } from "framer-motion";
import axios from "axios";
import "../components/Slider/Slider.css";
// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export const HomePage = () => {

  const { isAuthenticated, user: userFromAuth0 } = useAuth0();

  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  useEffect(() => {
    login(userFromAuth0);

  }, [userFromAuth0]);

  const [albumData, setAlbumData] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [artistData, setArtistData] = useState([]);

  // const fetchData = () => {
  // const albumApi = "http://localhost:4000/album";
  // const playlistApi = "http://localhost:4000/playlists";
  // const artistApi = "http://localhost:4000/artists";

  // const getAlbums = axios.get(albumApi);
  // const getPlaylists = axios.get(playlistApi);
  // const getArtists = axios.get(artistApi);

  // axios.all(getAlbums).then(
  //     axios.spread((...allData) => {
  //  const allDataAlbums = allData[0].data;
  //       // const allDataPlaylists = allData[1].data;
  //       // const allDataArtists = allData[2].data;

  //       setAlbumData(allDataAlbums);
  //       // setPlaylistData(allDataPlaylists);
  //       // setArtistData(allDataArtists[0]);
  //       console.log(allDataAlbums)
  //     })
  //   );
  // };

  const getdata = async () => {

    const { data } = await axios.get("http://localhost:4000/albums")
    setAlbumData(data);
  }

  useEffect(() => {
    // const data = async () => {
    //   const jsonData = await getAlbums();
    //   setAlbumData(jsonData);
    // };
    // data();
    getAllAlbums()
    getAllArtists()
  }, []);

  //petición al back
  const getAllAlbums = async () => {
    try {
      const response = await axios.get("http://localhost:4000/album");
      setAlbumData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  // const followed = playlistData.map((f) => {
  //   return f.isFollowed;
  // });
  // console.log(followed);

  const getAllArtists = async () => {
    try {
      const response = await axios.get("http://localhost:4000/artists")
      setArtistData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>

      <div className="home">
       

        <Slider title="Recently Played" />
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1910 }}
          >

            {albumData?.map((album) => {

              return (

                <motion.div className="item" key={album.id}>
                  <img src={album.imageUrl} alt={album.name} />
                  <p>{album.name}</p>
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
                  <img src={imageUrl} alt={album.name} />
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
