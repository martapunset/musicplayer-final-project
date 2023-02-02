import { updateUsers } from "./postUsers";

export const getPlaylists = async (id) => {
  try {
    const url = `http://localhost:4000/playlists/${id}`;

    const resp = await fetch(url);
    const apiData = await resp.json();
    return apiData;
  } catch (error) {
    console.log("Algo fallo en la api");
  }
};

export const createPlaylist = async (
  newName = "default",
  newDescription = "default",
  newthumbnail = "default",
  userId
) => {
  console.log(userId);
  const playlist = {
    name: newName,
    colaborative: false,
    description: newDescription,
    thumbnail: newthumbnail,
    numberSongs: 0,
    // tracks: [{}]
  };

  try {
    const rawResponse = await fetch("http://localhost:4000/playlist/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlist),
    });
    const content = await rawResponse.json();
    const playlistId = content.data._id;
    console.log(playlistId);

    updateUsers(playlistId, userId);
    console.log(userId);
    console.log("successfull addition DB", content);
    return content;
  } catch (error) {
    console.log("can not create playlist");
  }
};
