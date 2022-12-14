import React from "react";

export const HomeItems = ({ tracks, albums }) => {
  return (
    <>
      {/* <div>
        {tracks.map((song) => (
          <div key={song.id}>
            <p>{song.name}</p>
          </div>
        ))}
      </div> */}
      <hr />
      <div>
        {albums.map((album) => (
          <div key={album.id}>
            <img src={album.imageUrl} />
          </div>
        ))}
      </div>
    </>
  );
};
