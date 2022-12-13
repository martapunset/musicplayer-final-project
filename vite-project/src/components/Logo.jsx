import React from "react";
import logo from "../assets/img/SpotifyVector.png";
import { LogoStyle } from "../ui/Logo.style";

const Logo = () => {
  return (
    <LogoStyle>
      <img src={logo} alt="Logo" />
    </LogoStyle>
  );
};

export default Logo;
