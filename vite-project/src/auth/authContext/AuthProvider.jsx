import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { checkUserByEmail, getUsers, postUsers } from "../../api/postusers";
import { AuthReducer } from "./AuthReducer";
import { types } from "./types";
import { useAuth0 } from "@auth0/auth0-react";

//import { Navigate } from "react-router-dom";
export const AuthProvider = ({ children }) => {
  const initArgs = {
    isLogged: false,
  };
  const init = () => {
    const userData = JSON.parse(localStorage.getItem("user"));

    return {
      isLogged: !!userData,
      userData,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init); //init

  /*-------------------login------------*/


  const login = (user) => {
   


//standarize user with DB data
    const userData = {
      firstName: user.given_name || "default_name",
      lastName: user.family_name || "default_lastname",
      userName: user.nickName,
      email: user.email,
      picture: user.picture
     // picture: user.picture,
      //following: [],

           }
           console.log(userData, "standard object copy");


    if (userData) {
      console.log("calling login function", userData);
      const userDB = checkUserByEmail(userData)
      console.log(userDB)
      
      localStorage.setItem("user", JSON.stringify(userDB));


     //call getUSerById and check if user exists in our DB
    
    

      dispatch({
        type: types.login,
        payload: userDB,
      });
    }
  };

  const logoutReducer = () => {
    localStorage.removeItem("user");
    ///logout auth0
    dispatch({
      type: types.logout, //logout reducer
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login: login,
        logoutReducer: logoutReducer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
