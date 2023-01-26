
import { containerClasses } from "@mui/material";
import { positions } from "@mui/system";
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

import "./audioPlayer.css";

export const AudioPlayerCool = () => {
  const tracks=[{
    "id": 1,
    "title": "Better of alone",
    "artist": "RXBYN",
    "url": "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583924/tracks-dev/Rxbyn_-_better_off_alone_fvhwp8.mp3",
    "thumbnail": "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/better_off_alone_gfmcby.jpg",
    "genre": "piano",
    "likedBy": []
  },
  {
    "id": 2,
    "title": "Alone",
    "artist": "Color Out",
    "url": "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583929/tracks-dev/Color_Out_-_Alone_aw3gmk.mp3",
    "thumbnail": "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/alone_rfib7a.jpg",
    "genre": "poprock",
    "likedBy": []
  },
  {
    "id": 3,
    "title": "Mahidevran - Maze of sorrow",
    "artist": "MAHIDEVRAN ROCK BAND",
    "url": "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Mahidevran_Rock_Band_-_Mahidevran_-_Maze_of_sorrow_ips3zs.mp3",
    "thumbnail": "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/Maze_of_sorrow_r1crlr.jpg",
    "genre": "chillout",
    "likedBy": []
  }]
 // const i = 0;
  const [currentTrack, setcurrentTrack] = useState(0);
  const track = tracks[currentTrack].url;
  if (!track) return null;

 
  console.log(track);
  console.log(tracks)
  console.log(currentTrack)
    // const tracksApi = "http://localhost:4000/tracks";

    // const songList = await getApiData(tracksApi);
   

    return (
      <>
   

        <AudioPlayer
          className='audioPlayer'
          //autoPlay='false'
          src={track}
         
          onPlay={e => console.log("onPlay", track)}
          onEnded={() => setcurrentTrack(currentTrack+1)} />
  
            
        
      </>
    
    
    )
  }

  



    
