import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { getUsers } from "../../api/postUsers";
import { AuthReducer } from "./AuthReducer";
import { types } from "./types";
import { useAuth0 } from "@auth0/auth0-react";

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

   // const validateUser = async () => {
     // const datajson = await getUsers(user.email);
      console.log(user);
    if (user) {
      console.log("calling login function", user)
      //  const { username,first_name, last_name, email, profilePicture } = user;
      //  const user ={ username, first_name, last_name, email, profilePicture}
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: types.login,
        payload: user,
      });
          
    }  
      
      }
    

  

  const logoutReducer = () => {
   // const { logout, user } = useAuth0();
    localStorage.removeItem("user");
   ///logout auth0
    dispatch({
      type: types.logout,  //logout reducer
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login:login,
        logoutReducer:logoutReducer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
