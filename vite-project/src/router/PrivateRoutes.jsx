import { Navigate } from "react-router";
import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext } from "react";

export async function PrivateRoutes({ children }) {
  const { authState } = useContext(AuthContext);
  const { isLogged } = authState;
  console.log("isauthenticatedPRIVATEROUTES-USER", isLogged);

  return isLogged ? children : <Navigate to="/auth" />;
}
