import React from "react";
import {
  RecentlyPlayedCard,
  RecentlyPlayedGrid,
  RecentlyPlayedText,
} from "../ui/RecentlyPlayed.styles";

const RecentlyPlayed = () => {
  return (
    <>
      <RecentlyPlayedText>
        <p>Recently Played</p>
      </RecentlyPlayedText>

      <RecentlyPlayedGrid>
        <RecentlyPlayedCard />
      </RecentlyPlayedGrid>
    </>
  );
};

export default RecentlyPlayed;
