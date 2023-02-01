import { useState, useEffect, Fragment } from "react";
import { getApiData } from "../api/getApiData";
import likescss from "../assets/sass/likescss.module.scss";
import likeImg from "../assets/img/like.jpg";
import Playlists from "../components/Playlists";
import { useContext } from "react";
import { MusicContext } from "../musicProvider/MusicProvider";
import { AuthContext } from "../auth/authContext/AuthContext";
import searchpage from "../assets/sass/searchpage.module.scss";
import axios from "axios";
export const LibraryPage = () => {



  //const [textValue, setValue] = useState("");
  const {
    query,
    setQuery,
    track,
    data,
    setplaying,
    currentTrack,
    playTrackFunction,
    playerRef,
    playlist
  } = useContext(MusicContext);
  
  //setQuery("playlists");

//console.log(data)
/*
  
    */
const { login, authState } = useContext(AuthContext);
const { isLogged, user } = authState
const {_id} = user
  const userId = user._id



  const [playlistDat, setPlaylistDat] = useState([]);

  const getPlaylists = async () => {
    const playlistApi = "http://localhost:4000/playlists";
    try {
      const response = await axios.get(playlistApi);
      console.log("function execute")
      setPlaylistDat(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
getPlaylists()
    
  }, []);


console.log(playlistDat)

  return (
    <>

  
      <div className={searchpage.container}>
        <div className={likescss.container}>
          <div className={likescss.head}>
            <div className={likescss.head_gradient}></div>
            <img src={likeImg} alt="like songs" />
            <div className={likescss.playlist_info}>
              <p>Playlist</p>
              <h1>Playlists</h1>
              <span>by {user.firstName}</span>
            </div>
          </div>
          <div className={likescss.body}>
            <div className={likescss.body_nav}>
            </div>

            <div className={searchpage.playlists_container}>
              <Playlists playlists={playlistDat} />
            </div>

           
          </div>
        </div>
      </div>

    </>
  );
};