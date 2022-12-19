import { useState, Fragment } from "react";
import Like from "../Like";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import songscss from "./songscss.module.scss";
import PlaylistMenu from "../PlaylistMenu";

const Song = ({ song, playlist }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={songscss.song_container}>
      <div className={songscss.left}>
        <IconButton className={songscss.play_btn}>
          <PlayArrowIcon />
        </IconButton>
        <img src={song.thumbnail} alt={song.name} />
        <p>{song.name}</p>
      </div>

      <div className={songscss.center}>
        <p>{song.artist}</p>
      </div>

      <div className={songscss.right}>
        <Like songId={song.id} />
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
