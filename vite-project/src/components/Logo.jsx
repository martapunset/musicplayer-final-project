import React from "react";
import logo from "../assets/img/SpotifyVector.png";
import { Button } from "../ui";
import { LogoStyle } from "../ui/Logo.style";
import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext } from "react";

const Logo = () => {
  const { logout } = useContext(AuthContext)
  return (
    <LogoStyle>
      <div>
        <img src={logo} alt="Logo" /> <button onClick={logout}>Logout</button>
      </div>
    </LogoStyle>
  );
};

export default Logo;
