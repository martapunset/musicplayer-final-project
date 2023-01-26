import { useState, useEffect, Fragment } from "react";
import { getApiData } from "../api/getApiData";
// import Song from "../components/Song";
// import { HomeNavBar } from "../components/HomeNavBar";
import likescss from "../assets/sass/likescss.module.scss";
import likeImg from "../assets/img/like.jpg";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Playlists from "../components/Playlists";

import searchpage from "../assets/sass/searchpage.module.scss";

export const LibraryPage = () => {
  const [likedSong, setLikedSong] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const endPointTracks = "tracks";
  const endPointPlaylists = "playlists";

  const [textValue, setValue] = useState("");

  const asyncFetchData = async () => {
    //  const urlTracks = `http://localhost:4000/${endPointTracks}`;
    const urlPlaylists = `http://localhost:4000/${endPointPlaylists}`;

    //  const awaitTracks = await getApiData(urlTracks);
    const awaitPlaylist = await getApiData(urlPlaylists);
    // console.log(awaitTracks, awaitPlaylist);

    //  setTracks(awaitTracks);
    setPlaylists(awaitPlaylist);
  };

  useEffect(() => {
    asyncFetchData();
  }, []);

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
      <div className={searchpage.container}>
        <div className={likescss.container}>
          <div className={likescss.head}>
            <div className={likescss.head_gradient}></div>
            <img src={likeImg} alt="like songs" />
            <div className={likescss.playlist_info}>
              <p>Playlist</p>
              <h1>Playlists</h1>
              <span>By Lokesh</span>
            </div>
          </div>
          <div className={likescss.body}>
            <div className={likescss.body_nav}>
            </div>

            <div className={searchpage.playlists_container}>
              <Playlists playlists={playlists} />
            </div>

            {/*likedSong.map((song) => (
            <Fragment key={song.id}>
              <Song song={song} />
            </Fragment>
          ))*/}
          </div>
        </div>
      </div>

    </>
  );
};