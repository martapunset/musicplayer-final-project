import { getApiData } from "../api/getApiData";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
export const MusicContext = React.createContext('codeInaBottle');



export const MusicProvider = ({ children }) => {

    const [query, setQuery] = useState("react hooks"); //need to move to musicDATA provider
    // data from the API to display on list
  //  const [data, setData] = useState(['']);

    console.log('Provider', query)



    useEffect(() => {
        
    async function fetchData() {
        try {
            console.log(query)
            const response = await axios.get(`http://localhost:4000/tracks`);
            //return response;${query}
            setData(response);
          console.log(response)
          
              
        } catch (error) {
            console.log(error)
        }
        
        
    }
        
        fetchData();
    }, [query]);


 




 return (
    <MusicContext.Provider
         value={{
             setQuery,
            // setData,
             query,
            // data,
             //fetchData,
         } }
    >
      {children}
    </MusicContext.Provider>
  );
};

