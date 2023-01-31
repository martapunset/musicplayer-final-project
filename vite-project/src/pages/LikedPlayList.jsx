import { useState, useEffect, Fragment } from "react";
import Song from "../components/Song";
import likescss from "../assets/sass/likescss.module.scss";
import likeImg from "../assets/img/like.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useContext } from "react";
import { MusicContext } from "../musicProvider/MusicProvider";
import { AuthContext } from "../auth/authContext/AuthContext";

export const LikedPlayList = () => {
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  const { setQuery, data} = useContext(MusicContext);

  const [playing, setplaying] = useState(false);

  console.log(data);

  setQuery("tracks");

  return (
    <>

      <div className={likescss.container}>
        <div className={likescss.head}>
          <div className={likescss.head_gradient}></div>
          <img src={likeImg} alt="like songs" />
          <div className={likescss.playlist_info}>
            <p>Playlist</p>
            <h1>Liked Songs</h1>
            <p>user.name</p>
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
