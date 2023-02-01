import { useState, useEffect, Fragment } from "react";
import { getApiData } from "../api/getApiData";
import Song from "../components/Song";
import { HomeNavBar } from "../components/HomeNavBar";
import { GlobalGridStyles, Header } from "../ui";
import searchpage from "../assets/sass/searchpage.module.scss";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
// import { SearchBar } from "./SearchBar";
import { useContext } from "react";
import { MusicContext } from "../musicProvider/MusicProvider";
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";

export const SearchPage = () => {
  const [tracks, setTracks] = useState([]);

  const [textValue, setValue] = useState("");

  const {
    query,
    setQuery,
    setData,
    track,
    data,
    setplaying,
    resetCurrentTrack,
    currentTrack,
    playTrackFunction,
    playerRef,
    currentPlaylist,
    setCurrentPlaylist,
  } = useContext(MusicContext);

  //setQuery("tracks");

  const handleSubmit = async (e) => {
   // resetCurrentTrack();
    e.preventDefault();
    setplaying(false);

    
    if (textValue.length > 3) setQuery(`tracks/search?title=${textValue}`);
  };

  // const onSearchSubmit = (event)=>{
  //   event.preventDefault()

  //   if(searchText.trim().length <=1) return;

  //   navigate(`?q=${searchText}`)
  // }

  const handleReset = () => {
 setQuery("tracks");
    
  };


  useEffect(() => {
    //setQuery("tracks");
  }, []);

  //if(query=="playlists")setQuery("tracks")

  console.log(data);

  return (
    <>
      <div className={searchpage.container}>
        <div className={searchpage.search_input_container}>
          <form onSubmit={handleSubmit}>
            <IconButton>
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                type="submit"
              >
                {" "}
                <SearchIcon />
              </button>
            </IconButton>
            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search music..."
              value={textValue}
            />
          </form>

          <IconButton onClick={() => handleReset()}>
            <ClearIcon />
          </IconButton>
        </div>

        <div className={searchpage.results_container}>
          
      
     
          <div className={searchpage.songs_container}>
         
            {data.map((song) => (
              <Fragment key={song.id}>
                <Song song={song} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
