import { useContext } from "react";
import { useState, useEffect } from "react";
import { MusicContext } from "../musicProvider/MusicProvider";
import { AuthContext } from "../auth/authContext/AuthContext";

import axios from "axios";
import likescss from "../assets/sass/likescss.module.scss";
import likeImg from "../assets/img/like.jpg";
import Playlists from "../components/Playlists";
import searchpage from "../assets/sass/searchpage.module.scss";
import { toast } from "react-hot-toast";

export const LibraryPage = () => {
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  const [playlistDat, setPlaylistDat] = useState([]);

  const getPlaylists = async () => {
    const playlistApi = "http://localhost:4000/playlists";
    try {
      const response = await axios.get(playlistApi);
      setPlaylistDat(response.data.data);
      // toast.success("Getting all playlist");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getPlaylists();
  }, []);

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
            <div className={likescss.body_nav}></div>

            <div className={searchpage.playlists_container}>
              <Playlists playlists={playlistDat} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
