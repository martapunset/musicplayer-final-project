import { useState, Fragment, useContext } from "react";
import Like from "../Like";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import songscss from "./songscss.module.scss";
import PlaylistMenu from "../PlaylistMenu";
import { getApiData } from "../../api/getApiData";
import { MusicContext } from "../../musicProvider/MusicProvider";

const Song = ({ song, playlist }) => {
  const [menu, setMenu] = useState(false);
 const {setcurrentTrack, playTrackFunction}=useContext(MusicContext)
console.log(song, song.title)


  return (
   
    <div className={songscss.song_container}>
      <div className={songscss.left}>
        <IconButton className={songscss.play_btn} onClick={() =>playTrackFunction(song.id)}>
          <PlayArrowIcon  />
        </IconButton>
        <img src={song?.thumbnail} alt={song?.title} />
        <p>{song?.title}</p>
      </div>

      <div className={songscss.center}>
        <p>{song?.artist}</p>
      </div>

      <div className={songscss.right}>
        <Like songId={song?.id} />
        <p>4.30</p>
        <IconButton className={songscss.menu_btn} onClick={() => setMenu(true)}>
          <MoreHorizIcon />
        </IconButton>
        {menu && (
          <PlaylistMenu playlist={playlist} closeMenu={() => setMenu(false)} />
        )}
      </div>
    </div>
  
  );
};

export default Song;
