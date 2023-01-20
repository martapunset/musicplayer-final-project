import { Navigate } from "react-router";
//import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext } from "react";


export async function PrivateRoutes({ children }) {
   // const { isAuthenticated } = useAuth0();
  //  const navigate = useNavigate;
    const { authState } =useContext(AuthContext)
    const { isLogged } = authState;
    

    console.log("isauthenticatedPRIVATEROUTES-USER", isLogged)
   // const { isAuthenticated, loginWithRedirect } = useAuth0();

/*
  useEffect(() => {
    async function checkUser() {
      if (isAuthenticated) {
        await navigate("/");
      } else {
        loginWithRedirect();
      }
    }

    checkUser();                            // called async checkUser()
  }, [isAuthenticated, loginWithRedirect]); // added loginWithRedirect

  
   */
      

 
  
    return isLogged ? children :  <Navigate to="/auth"  />

    //  <> {isAuthenticated ? children : navigate("/auth")}</> 
//<Navigate to="/auth" replace />
  
}

