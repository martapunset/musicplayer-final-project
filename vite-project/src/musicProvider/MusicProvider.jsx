import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const MusicContext = createContext();
import { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audioPlayer.css";

export const MusicProvider = ({ children }) => {
  const [playing, setplaying] = useState(false);
  const [currentTrack, setcurrentTrack] = useState(0);

  const [query, setQuery] = useState("");
  // data from the API to display on list
  const [data, setData] = useState([""]); //visualization
  const [currentPlaylist, setCurrentPlaylist] = useState([""]); //player STate
  console.log("currentplaylist", currentPlaylist);
  console.log("data", data);
  console.log("query", query);

  const track = currentPlaylist[currentTrack].url;
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
    if (query !== "") getdata();
  }, [query]);

  const getSongIndex = (song, data) => {
    return data.indexOf(song);
  };
  /*
  const resetCurrentTrack = () => {
    setcurrentTrack(0);
    console.log("setting current track");
  };
  */

  const playTrackFunction = (id, data) => {
    //change the index of current track with position of the song clicked or id

    setplaying(true);
    setCurrentPlaylist(data); //stores data in the screen for the player
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
        // resetCurrentTrack,
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
        currentPlaylist,
        setCurrentPlaylist,
        //fetchData,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
