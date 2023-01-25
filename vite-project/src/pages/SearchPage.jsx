import { useState, useEffect, Fragment } from "react";
import { getApiData } from "../api/getApiData";
import Song from "../components/Song";
import Playlists from "../components/Playlists";
import { HomeNavBar } from "../components/HomeNavBar";
import { GlobalGridStyles } from "../ui";

import searchpage from "../assets/sass/searchpage.module.scss";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

// import { SearchBar } from "./SearchBar";

export const SearchPage = () => {
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const endPointTracks = "tracks";
  const endPointPlaylists = "playlists";

  const [textValue, setValue] = useState("");

  const asyncFetchData = async () => {
    const urlTracks = `http://localhost:4000/${endPointTracks}`;
    const urlPlaylists = `http://localhost:4000/${endPointPlaylists}`;

    const awaitTracks = await getApiData(urlTracks);
    const awaitPlaylist = await getApiData(urlPlaylists);
    // console.log(awaitTracks, awaitPlaylist);

    setTracks(awaitTracks);
    setPlaylists(awaitPlaylist);
  };

  useEffect(() => {
    asyncFetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlTracks = `http://localhost:4000/${endPointTracks}?q=${textValue}`;
    const urlPlaylists = `http://localhost:4000/${endPointPlaylists}?q=${textValue}`;

    const newAwaitTracks = await getApiData(urlTracks);
    const newAwaitPlaylist = await getApiData(urlPlaylists);

    return setTracks(newAwaitTracks), setPlaylists(newAwaitPlaylist);
  };

  const handleReset = () => {
    setValue("");
    asyncFetchData();
    
  };

  return (
    <>
      <div className={searchpage.container}>
        <div className={searchpage.search_input_container}>
         

          <form onSubmit={handleSubmit}>
          <IconButton>
              <button style={{ border:"none"} }type="submit"> <SearchIcon /></button>
          </IconButton>
            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search tracks and playlists..."
              value={textValue}
            />
          </form>

          <IconButton onClick={() => handleReset()}>
            <ClearIcon />
          </IconButton>
        </div>

        <div className={searchpage.results_container}>
          <div className={searchpage.songs_container}>
            {tracks.map((song) => (
              <Fragment key={song.id}>
                <Song song={song} />
              </Fragment>
            ))}
          </div>


          
          <div className={searchpage.playlists_container}>
            <Playlists playlists={playlists} />
          </div>
        </div>
      </div>

     
    </>
  );
};
