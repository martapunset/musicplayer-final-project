import { containerClasses } from "@mui/material";
import { positions } from "@mui/system";
import { useEffect, useState, useRef, useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audioPlayer.css";
import axios from "axios";

import { MusicContext } from "../../musicProvider/MusicProvider";

export const AudioPlayerCool = () => {
  const {  query, setQuery, fetchData } = useContext(MusicContext);
  const [datam, setData] = useState(['']);
  //setQuery("hola")
  console.log(datam)
  

  useEffect(() => {
getdata()
   
  //setQuery("tracks/");
  }, []);




  
  const getdata = async () => {
    try {
      const response  = await axios.get("http://localhost:4000/tracks");
      //return response;${query}
      setData(response.data.data);
    
    } catch (error) {
      console.log(error)
  }
  


  }
  

  
          
  


  const tracks = [
    {
      id: 1,
      title: "Better of alone",
      artist: "RXBYN",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583924/tracks-dev/Rxbyn_-_better_off_alone_fvhwp8.mp3",
      thumbnail:
        "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/better_off_alone_gfmcby.jpg",
      genre: "piano",
      likedBy: [],
    },
    {
      id: 2,
      title: "Alone",
      artist: "Color Out",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583929/tracks-dev/Color_Out_-_Alone_aw3gmk.mp3",
      thumbnail:
        "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/alone_rfib7a.jpg",
      genre: "poprock",
      likedBy: [],
    },
    {
      id: 3,
      title: "Mahidevran - Maze of sorrow",
      artist: "MAHIDEVRAN ROCK BAND",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Mahidevran_Rock_Band_-_Mahidevran_-_Maze_of_sorrow_ips3zs.mp3",
      thumbnail:
        "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/Maze_of_sorrow_r1crlr.jpg",
      genre: "chillout",
      likedBy: [],
    },
  ];
  // const i = 0;
  const [currentTrack, setcurrentTrack] = useState(0);
  const [playing, setplaying] = useState(false);
  const track = tracks[currentTrack].url;

  if (!track) return null;

  console.log("onplay", playing);
  console.log(track);
  console.log(tracks);
  console.log(currentTrack);
  console.log("length", tracks.length);
  // const tracksApi = "http://localhost:4000/tracks";

  // const songList = await getApiData(tracksApi);

  const player = useRef();

  const audiofunction = (id) => {
    //change the index of current track with position of the song clicked or id

    setcurrentTrack(id);
    player.current.audio.current.play();
  };

  return (
    <>
      {/* <button onClick={() => audiofunction(0)}>play song 1</button>
      <button onClick={() => audiofunction(1)}>play song 2</button>
      <button onClick={() => audiofunction(2)}>play song 3</button> */}

      {
        <AudioPlayer
          className="audioPlayer"
          //autoPlay='false'

          preload="metadata"
          ref={player}
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
