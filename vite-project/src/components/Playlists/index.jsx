import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Playlists = ({ playlists }) => {
  return (
    <Fragment>
      {playlists.map((playlist) => (
        <Link key={playlist.id}>
          <div className={styles.playlist}>
            {playlist.thumbnail === "" ? (
              <img
                src={playlist.thumbnail}
                alt={playlist.name}
                style={{ background: "#919496" }}
              />
            ) : (
              <img src={playlist.thumbnail} alt={playlist.name} />
            )}
            <p>{playlist.name}</p>
            <span>{playlist.desc}</span>
          </div>
        </Link>
      ))}
    </Fragment>
  );
};

export default Playlists;
