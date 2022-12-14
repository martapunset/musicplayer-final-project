import { useState, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { getUsers } from "../../api/postUsers";
import { AuthReducer } from "./AuthReducer";
import { types } from "./types";
import { Navigate } from "react-router-dom";
export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState([]);
  // const [loginState, setLoginState] = useState([]);
  // const [register, setRegister] = useState([]);

  const initArgs = {
    isLogged: false,
    // user:'',
  };
  const init = () => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    //1.56 minutes video jose
    return {
      isLogged: !!userProfile,
      userProfile,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init); //init


  /*-------------------login------------*/
  const login = (user) => {
    const validateUser = async () => {
      const datajson = await getUsers(user.email);

      if (datajson) {
          if (user.email == datajson.email && user.password == datajson.password) {
            const { first_name, last_name, email, profilePicture } = datajson;
            const userProfile ={ first_name, last_name, email, profilePicture }
            localStorage.setItem("userProfile", JSON.stringify({ userProfile}));

            dispatch({
              type: types.login,
              payload: userProfile,
            });
            alert("User logged successfully");
          } else {
            alert("Unregistered user, or incorrect data");

            console.log("user or pasword incorrect");
          }
      } else {
        alert("Unregistered user, or incorrect data");
        //navigate("/");
        console.log("user or pasword incorrect");
      }
    };
    validateUser();
  };

  const logout = () => {
    localStorage.removeItem("userProfile");
    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
