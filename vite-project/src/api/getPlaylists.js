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

//button inside slider
//button onclick(getPlaytlist(item.id))