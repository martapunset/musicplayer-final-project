import React, {useState, useEffect} from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ConstructionOutlined } from '@mui/icons-material'
// import axios from 'axios'


export const CallApi = () => {
    const [message, setMessage] = useState("")
    const serverUrl = "http://localhost:4001"
    const {getAccessTokenSilently} = useAuth0()
    // useEffect(()=>{axios.get(serverUrl)
    //     .then((response)=>{setMessage(response.data)})},[])
    
        const apiGenre = async ()=>{

          try {
            const token = await getAccessTokenSilently();
           
            const response = await fetch(
              `${serverUrl}/genre`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );
      
            const responseData = await response.json();
            console.log(responseData)
      
            setMessage(responseData.message);
          } catch (error) {
            setMessage('Aprende a pronunciar genre');
          }
        };
        
  return (
    <button
    type="button"
   
  
    onClick={()=>{apiGenre()}}
  >
    Genre
  </button>
  )
  }

