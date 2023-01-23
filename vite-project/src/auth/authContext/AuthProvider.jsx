import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { getUsers } from "../../api/postusers";
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
  const login = (userData) => {
    console.log(userData);
    if (userData) {
      console.log("calling login function", userData);
      //  const { userDataname,first_name, last_name, email, profilePicture } = userData;
      //  const userData ={ userDataname, first_name, last_name, email, profilePicture}
      localStorage.setItem("user", JSON.stringify(userData));

      dispatch({
        type: types.login,
        payload: userData,
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
