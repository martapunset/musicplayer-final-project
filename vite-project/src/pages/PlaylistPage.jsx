import { useState, Fragment } from "react";
// import Song from "../../components/Song";
// import PlaylistModel from "../../components/PlaylistModel";
import Playlists from "../components/Playlists";

import { IconButton } from "@mui/material";
import playlistImg from "../assets/img/rock.jpg";
import peaches from "../assets/img/peaches.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import playlistscss from "../assets/sass/playlistscss.module.scss";
import { HomeNavBar } from "../components/HomeNavBar";

const playlist = {
  _id: 1,
  img: playlistImg,
  name: "Today's Top Songs",
  desc: "By Lokesh",
};

const songs = [
  { _id: 1, img: peaches, name: "Peaches", artist: "Justin Bieber" },
];

export const PlaylistPage = () => {
  return (
    <div className={playlistscss.container}>
      <div className={playlistscss.head}>
        <div className={playlistscss.head_gradient}></div>
        {playlist.img === "" ? (
          <img
            src="https://static.thenounproject.com/png/17849-200.png"
            alt={playlist.name}
            style={{ background: "#919496" }}
          />
        ) : (
          <img src={playlist.img} alt={playlist.name} />
        )}

        <div className={playlistscss.playlist_info}>
          <p>Playlist</p>
          <h1>{playlist.name}</h1>
          <span>{playlist.desc}</span>
        </div>

        <div className={playlistscss.actions_container}>
          <IconButton onClick={() => setModel(true)}>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className={playlistscss.body}>
        <div className={playlistscss.body_nav}>
          <div className={playlistscss.left}>
            <span>#</span>
            <p>Title</p>
          </div>
          <div className={playlistscss.center}>
            <p>Artist</p>
          </div>
          <div className={playlistscss.right}>
            <AccessTimeIcon />
          </div>
        </div>

        <Playlists />
        {/* {songs.map((song) => (
          <Fragment key={song._id}>
            <Song song={song} playlist={playlist} />
          </Fragment>
        ))} */}
      </div>
      {/* {model && (
        <PlaylistModel closeModel={() => setModel(false)} playlist={playlist} />
      )} */}

      <HomeNavBar />
    </div>
  );
};
