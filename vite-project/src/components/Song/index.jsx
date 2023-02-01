import { useState, Fragment, useContext } from "react";
import Like from "../Like";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import songscss from "./songscss.module.scss";

import { MusicContext } from "../../musicProvider/MusicProvider";

const Song = ({ song, playlist }) => {
  const [menu, setMenu] = useState(false);
  const { playTrackFunction, setcurrentTrack, data, getSongIndex } =
    useContext(MusicContext);

  const index = getSongIndex(song, data);

  return (
    <>
      <div className={songscss.song_container}>
        <div className={songscss.left}>
          <IconButton
            className={songscss.play_btn}
            onClick={() => playTrackFunction(index)}
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
          <Like likedTracks={song?._id} />
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
