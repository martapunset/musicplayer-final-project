import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { checkUserByEmail } from "../../api/postUsers";
import { AuthReducer } from "./AuthReducer";
import { types } from "./types";
import { useAuth0 } from "@auth0/auth0-react";
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

    const userData = {  //----------->need to mode to backend
      firstName: user.given_name || "default_name",
      lastName: user.family_name || "default_lastname",
      userName: user.nickName,
      email: user.email,
      picture: user.picture
    }
    console.log(userData, "standard object copy");

    if (userData) {
      console.log("calling login function", userData);
      const userDB = checkUserByEmail(userData)
      console.log(userDB)

      localStorage.setItem("user", JSON.stringify(userDB));

      dispatch({
        type: types.login,
        payload: userDB,
      });
    }
  };

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
