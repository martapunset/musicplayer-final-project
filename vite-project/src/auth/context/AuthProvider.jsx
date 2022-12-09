import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loginState, setLoginState] = useState([]);
  const [register, setRegister] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginState,
        setLoginState,
        register,
        setRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
