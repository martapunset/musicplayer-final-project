import { Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";



function PrivateRoutes({ children }) {
    const { isAuthenticated } = useAuth0();
    console.log("isauthenticated", isAuthenticated)
  return (
    isAuthenticated ? children : <Navigate to="/auth" />
    
  )
}

export default PrivateRoutes