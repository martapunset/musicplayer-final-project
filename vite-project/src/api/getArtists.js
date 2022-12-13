export const getArtists = async () => {
  try {
    const url = "http://localhost:4000/artists";

    const resp = await fetch(url);
    const apiData = await resp.json();
    return apiData;
  } catch (error) {
    console.log("Algo fallo en la api");
  }
};
