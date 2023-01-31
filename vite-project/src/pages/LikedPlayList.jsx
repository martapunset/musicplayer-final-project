import { useState, useEffect, Fragment } from "react";
import Song from "../components/Song";
import likescss from "../assets/sass/likescss.module.scss";
import likeImg from "../assets/img/like.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { MusicContext } from "../musicProvider/MusicProvider";



export const LikedPlayList = () => {
 // const [likedSong, setLikedSong] = useState([]);
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

  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState

 // const [playing, setplaying] = useState(false);

  console.log(data);

  setQuery("tracks");
  const {_id} = user
  console.log(_id);
  const userId = user._id
  console.log(userId, 'userid');
  return (
    <>

      <div className={likescss.container}>
        <div className={likescss.head}>
          <div className={likescss.head_gradient}></div>
          <img src={likeImg} alt="like songs" />
          <div className={likescss.playlist_info}>
            <p>Playlist</p>
            <h1>Liked Songs</h1>
            <span>by {user.firstName}</span>
          </div>
        </div>
        <div className={likescss.body}>
          <div className={likescss.body_nav}>
            <div className={likescss.left}>
              <p>Title</p>
            </div>
            <div className={likescss.center}>
              <p>Artist</p>
            </div>
            <div className={likescss.right}>
              <AccessTimeIcon />
            </div>
          </div>
          {/* <button onClick={updateUsers(name,)}>Add to Playlist</button> */}
          <button onClick={() => createPlaylist(userId)}>create</button>
          {data.map((song) => (
            <Fragment key={song?.id}>
              <Song song={song} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
