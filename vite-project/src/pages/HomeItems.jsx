import React from "react";

export const HomeItems = ({ album }) => {
  return (
    <div>
      <img src={album.imageURL} alt={album.imageURL} />
    </div>
  );
};
