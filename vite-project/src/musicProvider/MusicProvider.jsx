import { getApiData } from "../api/getApiData";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
export const MusicContext = React.createContext("codeInaBottle");
import { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audioPlayer.css";
export const MusicProvider = ({ children }) => {
  const [playing, setplaying] = useState(false);
  const [currentTrack, setcurrentTrack] = useState(0);
  const [query, setQuery] = useState(""); //need to move to musicDATA provider
  // data from the API to display on list
  const [data, setData] = useState([""]);
  const [playlist, setPlaylist] = useState([""]);
  console.log(data)
  console.log(currentTrack)
  const track = data[currentTrack].url ;// -----problems BIG
  const playerRef = useRef();

  useEffect(() => {
    console.log(query);
    const getdata = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/${query}`);
        //return response;
     
          setData(response.data.data);
        
 
      } catch (error) {
        console.log(error);
      }
    };
   if(query!=="")
    getdata();
  }, [query]);


  const getSongIndex=(song, data)=>{
  
          return data.indexOf(song)

  }

   const resetCurrentTrack=()=>{
    setcurrentTrack(0)
    console.log("setting current track")

   }
  const playTrackFunction = (id) => {
    //change the index of current track with position of the song clicked or id
   setplaying(true)
    setcurrentTrack(id);
    playerRef.current.audio.current.play();
  };




  const Player = () => (

    
    <AudioPlayer
      className="audioPlayer"
      autoPlay={playing}
      preload="metadata"
      ref={playerRef}
      src={track}
      showSkipControls="true"
      onClickPrevious={() => setcurrentTrack(currentTrack - 1)}
      onClickNext={() => setcurrentTrack(currentTrack + 1)}
      onPlay={(e) => setplaying(true)}
      onEnded={() => setcurrentTrack(currentTrack + 1)}
    />
  
  );

  return (
    <MusicContext.Provider
      value={{
        Player,
        resetCurrentTrack,
        currentTrack,
        playerRef,
        setQuery,
        setData,
        query,
        data,
        track,
        setplaying,
        playTrackFunction,
        getSongIndex,
        playlist,
        //fetchData,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
