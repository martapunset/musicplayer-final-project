import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import likescss from "./likescss.module.scss";

const Like = () => {
  const [like, setLike] = useState(false);

  return (
    <IconButton className={likescss.like_btn} onClick={() => setLike(!like)}>
      {!like ? (
        <FavoriteBorderIcon className={likescss.like_outlined} />
      ) : (
        <FavoriteIcon className={likescss.like_filled} />
      )}
    </IconButton>
  );
};

export default Like;
