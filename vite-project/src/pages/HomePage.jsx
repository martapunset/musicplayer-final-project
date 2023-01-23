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
  
  const { login, authState } = useContext(AuthContext);
  const { isLogged } = authState;
  const userFromAuth0 = user; //rename
  //const {given_name}=userFromAuth0
  useEffect(() => {
    login(userFromAuth0);
   
  }, [userFromAuth0]);

 
   //copiariamos el objeto de auth0
  //const { isLogged, user } = authState;

 
   // console.log("isauthenticatedHomePAge", isAuthenticated)

  
    
  // const { first_name } = userProfile;
  //console.log(user);

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
  const getdata = async() => {
       
    const { data } = await axios.get("http://localhost:4000/albums")
    setAlbumData(data);
  }
    
  useEffect(() => {
    getdata()
 
  
    }, []);
  console.log(albumData)
  console.log(getUsers())


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
            {artistData?.map((album) => {
              return (
                <>
                  <motion.div className="item" key={album.id}>
                    <img
                      className="artistsProfile"
                      src={album.photoUrl}
                      alt={album.name}
                    />
                    <p>{album.name}</p>
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
