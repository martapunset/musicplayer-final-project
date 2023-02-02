import { useState, Fragment, useContext } from "react";
import Like from "../Like";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import songscss from "./songscss.module.scss";

import { MusicContext } from "../../musicProvider/MusicProvider";
import { updateUsers} from "../../api/postUsers"
import { createPlaylist } from "../../api/getPlaylists";
import { AuthContext } from "../../auth/authContext/AuthContext";
const Song = ({ song, playlist }) => {
  const [menu, setMenu] = useState(false);
  const { playTrackFunction, setcurrentTrack, data, getSongIndex } = useContext(MusicContext)
  const {authState}=useContext(AuthContext)
  const { user } = authState
  const { likedTracks } = user
  const[liked, setLiked]=useState(false)
  
console.log(likedTracks)
  
 const index=getSongIndex(song, data)
  console.log(likedTracks.includes(song._id))
  
  if (likedTracks.includes(song._id)) {
    setLiked(true)
    console.log("track already liked")
    
      
  } else {
    setLiked(false)
    console.log("track is not liked still")
    
  }

  return (
    <>
      <div className={songscss.song_container}>
        <div className={songscss.left}>
          <IconButton
            className={songscss.play_btn}
            onClick={() => playTrackFunction(index, data)}
          >
            <PlayArrowIcon />
          </IconButton>
          <img src={song?.thumbnail} alt={song?.title}></img>
          <p>{song?.title}</p>
        </div>

        <div className={songscss.center}>
          <p>{song?.artist}</p>
        </div>

      <div className={songscss.right}>
        <Like oneTrack={song} liked={liked} />
        <p>4.30</p>
        {/* <IconButton className={songscss.menu_btn} onClick={() => setMenu(true)}>
          <MoreHorizIcon />
        </IconButton> */}

          {/* {menu && (
          <PlaylistMenu playlist={playlist} closeMenu={() => setMenu(false)} />
        )} */}
        </div>
      </div>
    </>
  );
};

export default Song;
