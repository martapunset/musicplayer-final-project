import axios from "axios"

export const getAlbums = async () => {


    const {data} = await axios.get("http://localhost:4000/album")
    const {album} = data
  console.log(`A ver si trae ${data} y ${album}`)
  console.log(album)



    //const url = "http://localhost:4000/album";
/*
    const resp = await fetch(url, { mode: 'no-cors', headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }});

    console.log(resp)
    const apiData = await resp.json();
    console.log(apiData)
    return apiData;

  */
};
