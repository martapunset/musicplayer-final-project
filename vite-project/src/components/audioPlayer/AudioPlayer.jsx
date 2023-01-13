import { GpsFixed } from "@mui/icons-material";
import { positions } from "@mui/system";
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { getApiData } from "../../api/getApiData";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import "./audioPlayer.css";

export const AudioPlayerCool = () => {
  const [tracks, setTracks] = useState([]);
  const [isPlaying, setiSPlaying] = useState(false);
  const [currSong, setCurrSong] = useState([0]);

  const getSongs = async () => {
    const tracksApi = "http://localhost:4000/tracks";

    const songList = await getApiData(tracksApi);
    setTracks(songList);
  };
  const playinSong = () => {};

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div>
      <div>
        {tracks.map((s) => {
          return <p>{s.name}</p>;
        })}
      </div>
      <AudioPlayer
        className="audioPlayer"
        // autoPlay
        src=""
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
};
