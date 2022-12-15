import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { getUsers } from "../../api/postUsers";
import { AuthReducer } from "./AuthReducer";
import { types } from "./types";
//import { Navigate } from "react-router-dom";
export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState([]);
  // const [loginState, setLoginState] = useState([]);
  // const [register, setRegister] = useState([]);

  const initArgs = {
    isLogged: false,
    // user:'',
  };
  const init = () => {
    const user= JSON.parse(localStorage.getItem("user"));
    //1.56 minutes video jose
    return {
      isLogged: !!user,
      user,
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
            const user ={ first_name, last_name, email, profilePicture}
            localStorage.setItem("user", JSON.stringify(user));

            dispatch({
              type: types.login,
              payload: user,
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
    localStorage.removeItem("user");
    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login:login,
        logout:logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
