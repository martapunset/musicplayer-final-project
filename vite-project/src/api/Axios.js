// const canciones = "tracks";
// const albumsss = "albums";

// const fetchData = () => {
//   const apiCaciones = "http://localhost:4000/tracks";
//   const apiAlbums = "http://localhost:4000/albums";

//   const getCancionesApi = axios.get(apiCaciones);
//   const getAlbumsApi = axios.get(apiAlbums);

//   axios.all([getCancionesApi, getAlbumsApi]).then(
//     axios.spread((...allData) => {
//       const allDataSong = allData[0].data;
//       const allDataAlbums = allData[1].data;

//       setCanciones(allDataSong);
//       setAlbums(allDataAlbums);
//     })
//   );
// };

// const fetchData = () => {
//   const apiCaciones = `http://localhost:4000/${canciones}`;

//   const apiAlbums = `http://localhost:4000/${albumsss}`;

//   const getCancionesApi = axios.get(apiCaciones);
//   const getAlbumsApi = axios.get(apiAlbums);

//   axios.all([getCancionesApi, getAlbumsApi]).then(
//     axios.spread((...allData) => {
//       const allDataSong = allData[0].data;
//       const allDataAlbums = allData[1].data;

//       setTracks(allDataSong);
//       setAlbums(allDataAlbums);
//     })
//   );
// };

// useEffect(() => {
//   fetchData();
// }, []);
