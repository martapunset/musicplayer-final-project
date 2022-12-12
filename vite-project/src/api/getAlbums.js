export const getAlbums = async () => {
  try {
    const url = "http://localhost:4000/albums";

    const resp = await fetch(url);
    const apiData = await resp.json();
    return apiData;
  } catch (error) {
    console.log("Algo fallo en la api");
  }
};
