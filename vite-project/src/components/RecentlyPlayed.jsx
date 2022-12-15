import { useState, useEffect } from "react";
import {
  RecentlyPlayedCard,
  RecentlyPlayedGrid,
  RecentlyPlayedText,
} from "../ui/RecentlyPlayed.styles";

import { getAlbums } from "../api/getAlbums";

const RecentlyPlayed = () => {
  const [apiData, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const jsonData = await getAlbums();
      setData(jsonData);
    };
    data();
  }, []);
  return (
    <>
      <RecentlyPlayedText>
        <p>Recently Played</p>
      </RecentlyPlayedText>

      <RecentlyPlayedGrid>
        {apiData.map((album) => {
          return (
            <RecentlyPlayedCard key={album.id}>
              <img src={album.imageUrl} />
            </RecentlyPlayedCard>
          );
        })}
      </RecentlyPlayedGrid>
    </>
  );
};

export default RecentlyPlayed;
