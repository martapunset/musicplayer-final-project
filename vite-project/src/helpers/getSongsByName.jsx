import { useState, useEffect, Fragment } from "react";
import { getApiData } from "../api/getApiData";

export const getSongsByName = (q = "") => {
  const [tracks, setTracks] = useState([]);

  // const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/tracks";

    const trackListData = async () => {
      const data = await getApiData(url);
      setTracks(data);
    };
    trackListData();
  }, []);

  name = name.toLowerCase().trim();

  if (name.length === 0) return [];
  tracks.filter((song) => song.name.toLowerCase().includes(name));

  return [{ tracks: tracks }];
};
