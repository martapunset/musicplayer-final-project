import Player from "@madzadev/audio-player";
import "@madzadev/audio-player";
import { useEffect, useState } from "react";
import tracks from "../../api/tracks.json";
import "./audio.css";

const colors = `html {
          --tagsBackground: #9440f3;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #64c27b;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #64c27b;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }`;

const AudioPlayer = () => {
  return (
    <div>
      <Player
        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={true}
        customColorScheme={colors}
      />
    </div>
  );
};

export default AudioPlayer;
