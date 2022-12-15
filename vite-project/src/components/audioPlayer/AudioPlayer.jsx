import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

export const AudioPlayerCool = () => {
    console.log("audioplayer")
   return (
  <AudioPlayer
    autoPlay
    src="https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625060/tracks-thumbnails-dev/car_yx6ld1.jpg"
    onPlay={e => console.log("onPlay")}
    // other props here
            
        
        
       />
  
);
    }

