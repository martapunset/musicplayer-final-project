import { Navigate, useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";



export function PrivateRoutes({ children }) {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate;
    console.log("isauthenticatedPRIVATEROUTES", isAuthenticated)
  return (
   // isAuthenticated ? children : <Navigate to="/auth" />
      <> {isAuthenticated ? children : navigate("/auth")}</> 
    
  )
}

