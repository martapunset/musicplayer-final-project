import axios from "axios"

export const getAlbums = async () => {


    const {data} = await axios.get("http://localhost:4000/album")

  console.log(data)


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
