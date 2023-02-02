import { useState, useEffect, Fragment } from "react";
import { MusicContext } from "../musicProvider/MusicProvider";
import { useContext } from "react";
import Song from "../components/Song";

// Third party libraries
import searchpage from "../assets/sass/searchpage.module.scss";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export const SearchPage = () => {
  const [tracks, setTracks] = useState([]);

  const [textValue, setValue] = useState("");

  const { setQuery, data, setplaying, resetCurrentTrack } =
    useContext(MusicContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setplaying(false);
  
    
    if (textValue.length > 3) setQuery(`tracks/search?title=${textValue.toLowerCase()}`);
  };

  useEffect(() => {
    setQuery("tracks");
  }, []);

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

          <IconButton>
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
