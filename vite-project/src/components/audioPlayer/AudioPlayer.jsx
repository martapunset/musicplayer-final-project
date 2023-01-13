import { GpsFixed } from '@mui/icons-material';
import { positions } from '@mui/system';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import './audioPlayer.css'
export const AudioPlayerCool = () => {
  console.log("audioplayer")
  
  const tracks = [
    {
      "id": 1,
      "name": "Better of alone",
      "artist": "RXBYN",
      "url": "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583924/tracks-dev/Rxbyn_-_better_off_alone_fvhwp8.mp3",
      "thumbnail": "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/better_off_alone_gfmcby.jpg",
      "genre": "piano",
      "liked": false
    },
    {
      "id": 2,
      "name": "Alone",
      "artist": "Color Out",
      "url": "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583929/tracks-dev/Color_Out_-_Alone_aw3gmk.mp3",
      "thumbnail": "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/alone_rfib7a.jpg",
      "genre": "poprock",
      "liked": false
    },
    {
      "id": 3,
      "name": "Mahidevran - Maze of sorrow",
      "artist": "MAHIDEVRAN ROCK BAND",
      "url": "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Mahidevran_Rock_Band_-_Mahidevran_-_Maze_of_sorrow_ips3zs.mp3",
      "thumbnail": "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/Maze_of_sorrow_r1crlr.jpg",
      "genre": "chillout",
      "liked": false
    },
    {
      "id": 4,
      "name": "Aurora",
      "artist": "Smoking with poets",
      "url": "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Smoking_With_Poets_-_to__Aurora_t2qnaw.mp3",
      "thumbnail": "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/aurora_omys8y.jpg",
      "genre": "indie",
      "liked": false
    }
  
]

   return (
     <AudioPlayer
       className='audioPlayer'
       autoPlay
       src={tracks.url}
     
    onPlay={e => console.log("onPlay")}
    // other props here
            
        
        
       />
  
);
}
    
