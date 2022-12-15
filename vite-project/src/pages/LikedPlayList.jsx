import { useState, useEffect, Fragment } from "react";
import { getApiData } from "../api/getApiData";
import Song from "../components/Song";
import { HomeNavBar } from "../components/HomeNavBar";
import likescss from "../assets/sass/likescss.module.scss";
import likeImg from "../assets/img/like.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const LikedPlayList = () => {
  const [likedSong, setLikedSong] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/tracks";
    const trackListData = async () => {
      const data = await getApiData(url);
      setLikedSong(data);
    };
    trackListData();
  }, []);

  return (
    <>
      <div className={likescss.container}>
        <div className={likescss.head}>
          <div className={likescss.head_gradient}></div>
          <img src={likeImg} alt="like songs" />
          <div className={likescss.playlist_info}>
            <p>Playlist</p>
            <h1>Liked Songs</h1>
            <span>By Lokesh</span>
          </div>
        </div>
        <div className={likescss.body}>
          <div className={likescss.body_nav}>
            <div className={likescss.left}>
              <span>#</span>
              <p>Title</p>
            </div>
            <div className={likescss.center}>
              <p>Artist</p>
            </div>
            <div className={likescss.right}>
              <AccessTimeIcon />
            </div>
          </div>

          {likedSong.map((song) => (
            <Fragment key={song.id}>
              <Song song={song} />
            </Fragment>
          ))}
        </div>
      </div>
      <HomeNavBar />
    </>
  );
};
