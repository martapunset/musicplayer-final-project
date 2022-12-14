import React, { useContext } from "react";
import { HomeNavBar } from "../components/HomeNavBar";
import Logo from "../components/Logo";
import RecentlyPlayed from "../components/RecentlyPlayed";
import { Button } from "../ui";
import { GridRegisterLogin } from "../ui/Gridstyle";
import { ProfileImage } from "../ui/ProfileImage.style";
import { WelcomeCard, WelcomeTitle } from "../ui/WelcomeCard.styles";
import { AuthContext } from "../auth/authContext/AuthContext";

 
export const HomePage = () => {
  return (
    <>
      <div className="home">
        <GridRegisterLogin>
          <Logo />
          <WelcomeCard>
            <WelcomeTitle>¡Bienvenido User!</WelcomeTitle>
            <ProfileImage src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
          </WelcomeCard>
          <RecentlyPlayed></RecentlyPlayed>
        </GridRegisterLogin>
      </div>

      <HomeNavBar />
    </>
  );
};
