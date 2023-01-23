import React, { useContext, useEffect, useState } from "react";
import { HomeNavBar } from "../components/HomeNavBar";
import { Button } from "../ui";
import { GridRegisterLogin } from "../ui/Gridstyle";
import { ProfileImage } from "../ui/ProfileImage.style";
import { WelcomeCard, WelcomeTitle } from "../ui/WelcomeCard.styles";
import { AuthContext } from "../auth/authContext/AuthContext";
import Logo from "../components/Logo";
import Slider from "../components/Slider/Slider";
import { motion } from "framer-motion";
import axios from "axios";
import "../components/Slider/Slider.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//import { bottomNavigationActionClasses } from "@mui/material";
// import { CallApi } from "../api/CallApi";
import { getAlbums } from "../api/getAlbums";
import { getUsers } from "../api/postUsers";


export const HomePage = () => {


  //const navigate=useNavigate()
  const { isAuthenticated, user } = useAuth0();

  const { login, authState } = useContext(AuthContext); //userDAta for profile
  const { isLogged, userData } = authState; //userDAta for profile
  console.log("userDAta for Toni", userData) //userDAta for profile


  const userFromAuth0 = user; //rename

  useEffect(() => {
    login(userFromAuth0);
   
  }, [userFromAuth0]);

 ;

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

  const getdata = async() => {
       
    const { data } = await axios.get("http://localhost:4000/albums")
    setAlbumData(data);
  }
    
  useEffect(() => {
    
      getAllAlbums()
      getAllArtists()
    getdata()
 
  
    }, []);
  console.log(albumData)
  console.log(getUsers())


//petición al back
    const getAllAlbums = async ()=>{
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

  const getAllArtists = async()=>{
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
      
        
        <Logo />
 
        <WelcomeCard>
          <WelcomeTitle>{userFromAuth0?.given_name}</WelcomeTitle>
          <Link to="/profile">
            {" "}
            <ProfileImage src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
          </Link>
        </WelcomeCard>

        <Slider title="Recently Played" />
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1910 }}
          >
            
            {albumData?.map((album) => {
            
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
                <>
                  <motion.div className="item" key={artists.id}>
                    <img
                      className="artistsProfile"
                      src={artists.photoUrl}
                      alt={artists.name}
                    />
                    <p>{artists.name}</p>
                  </motion.div>
                </>
              );
            })}
          </motion.div>
        </motion.div>

        
      </div>
      
    </>
  );
};
