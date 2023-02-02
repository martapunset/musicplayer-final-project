import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import likescss from "./likescss.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext/AuthContext";
import { MusicContext } from "../../musicProvider/MusicProvider";
import { updateUsers } from "../../api/postUsers";

const Like = (likedTracks) => {
  const [like, setLike] = useState(false);
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  const likeSong = () => {
    setLike(!like);
    const { _id } = user;
    console.log(_id);
    const updateLike = {
      _id,
      ...user,
      ...likedTracks,
    };
    updateUsers(updateLike);
  };

  return (
    <IconButton className={likescss.like_btn} onClick={() => likeSong()}>
      {!like ? (
        <FavoriteBorderIcon className={likescss.like_outlined} />
      ) : (
        <FavoriteIcon className={likescss.like_filled} />
      )}
    </IconButton>
  );
};

export default Like;
