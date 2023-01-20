export const getAlbums = async () => {

    const url = "http://localhost:4000/album";

    const resp = await fetch(url, { mode: 'no-cors', headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }});

    console.log(resp)
    const apiData = await resp.json();
    console.log(apiData)
    return apiData;

  
};
