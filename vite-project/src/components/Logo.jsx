import React from "react";
import logo from "../assets/img/SpotifyVector.png";
import { LogoStyle } from "../ui/Logo.style";

const Logo = () => {
  return (
    <LogoStyle>
      <div>
        <img src={logo} alt="Logo" />
      </div>
    </LogoStyle>
  );
};

export default Logo;
