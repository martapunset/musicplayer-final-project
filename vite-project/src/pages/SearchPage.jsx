import { useState, useEffect, Fragment } from "react";
import Song from "../components/Song";
import { GlobalGridStyles, Header } from "../ui";
import searchpage from "../assets/sass/searchpage.module.scss";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
// import { SearchBar } from "./SearchBar";
import { useContext } from "react";
import { MusicContext } from "../musicProvider/MusicProvider";

export const SearchPage = () => {
  const [tracks, setTracks] = useState([]);

  const [textValue, setValue] = useState("");

  const { setQuery, data, setplaying, resetCurrentTrack } =
    useContext(MusicContext);

  //setQuery("tracks");

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    // resetCurrentTrack();
=======
  //resetCurrentTrack();
>>>>>>> 0158e0cd97aba6d719af62f87f4494f6b44d6b4c
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
    setQuery("tracks");
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
