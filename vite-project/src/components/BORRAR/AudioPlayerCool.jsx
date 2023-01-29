
import { useEffect, useState, useRef, useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audioPlayer.css";


import { MusicContext } from "../../musicProvider/MusicProvider";


 const AudioPlayerCool = (id ) => {


  const { data, query, setQuery, fetchData , playerRef} = useContext(MusicContext);
  //const [data, setData] = useState([""]);
  const [currentTrack, setcurrentTrack] = useState(0);

  const [playing, setplaying] = useState(false);
 const track = data[currentTrack].url;

useEffect(() => {
  //getData();
    setQuery("tracks");
  }, []);
  
  
const playTrackFunction = (id) => {
  //change the index of current track with position of the song clicked or id

  setcurrentTrack(id);
playerRef.current.audio.current.play();

console.log(track)
};

  return (
    <><h1>{track}</h1>
       <button onClick={() => playTrackFunction(0)}>play song 1</button>
      <button onClick={() => playTrackFunction(1)}>play song 2</button>
      <button onClick={() => playTrackFunction(2)}>play song 3</button> 


      {
        <AudioPlayer
          className="audioPlayer"
          autoPlay={false}
          preload="metadata"
          ref={playerRef}
          src={track}
          showSkipControls="true"
          onClickPrevious={() => setcurrentTrack(currentTrack - 1)}
          onClickNext={() => setcurrentTrack(currentTrack + 1)}
          onPlay={(e) => setplaying(true)}
          onEnded={() => setcurrentTrack(currentTrack + 1)}
        />
      }
    </>
  );
};
