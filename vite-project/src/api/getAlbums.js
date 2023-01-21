import axios from "axios"

export const getAlbums = async () => {


    const data = await axios.get("http://localhost:4000/album")
    // const {album} = data
    // const {...title} = data
    const imgUrl = data.json()
    console.log(imgUrl)
    // console.log(`A ver la ${JSON.stringify(data)}`)
    
    // console.log(`Quiero ver la ${imgUrl}`)

    
  // console.log(`A ver si trae ${data} y ${JSON.stringify(title)}`)
  // console.log(`Epero que me traiga y enseñe todo esto ${JSON.stringify(imgUrl)}`)
 
  // alert(JSON.stringify(title));


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
