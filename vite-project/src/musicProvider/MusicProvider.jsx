import { getApiData } from "../api/getApiData";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
export const MusicContext = createContext();
import { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audioPlayer.css";

export const MusicProvider = ({ children }) => {
  const [playing, setplaying] = useState(false);
  const [currentTrack, setcurrentTrack] = useState(0);
  const [query, setQuery] = useState("react hooks"); //need to move to musicDATA provider
  // data from the API to display on list
  const [data, setData] = useState([""]);
  const track = data[currentTrack].url;
  const playerRef = useRef();
  console.log("Provider", query, data);

  useEffect(() => {
    console.log(query);
    const getdata = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/tracks`);
        //return response;
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
  }, [query]);

  const playTrackFunction = (id) => {
    //change the index of current track with position of the song clicked or id

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
        currentTrack,
        playerRef,
        setQuery,
        setData,
        query,
        data,
        track,
        playTrackFunction,
        //fetchData,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
