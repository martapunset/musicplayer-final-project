import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { checkUserByEmail } from "../../api/postUsers";
import { AuthReducer } from "./AuthReducer";
import { types } from "./types";
import { useAuth0 } from "@auth0/auth0-react";
//import { Sync } from "@mui/icons-material";

//import { Navigate } from "react-router-dom";
export const AuthProvider = ({ children }) => {

  const initArgs = {
    isLogged: false,
  };
  const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return {
      isLogged: !!user,
      user,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init); //init

  /*-------------------login------------*/

  const login = (userLogin) => {
  


    const userData = {  //----------->need to mode to backend
      firstName: userLogin.given_name || "default_name",
      lastName: userLogin.family_name || "default_lastname",
      userName: userLogin.nickName || "DEFAULT NICKname",
      email: userLogin.email,
      picture: userLogin.picture
    }
    console.log(userData, "standard object copy");

    if (userData) {
      console.log("calling login function", userData);

      const callAsync = async () => {
          
        const userDB = await checkUserByEmail(userData)
       console.log( userDB, "async function frontpage")
             
      localStorage.setItem("user", JSON.stringify(userDB));
        dispatch({
          type: types.login,
          payload: user,
        });
    


      }
      callAsync()
    };
  }



  const logoutReducer = () => {
    localStorage.removeItem("user");

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
