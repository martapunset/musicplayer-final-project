import React, { useEffect, useState } from "react";
import { HomeNavBar } from "../components/HomeNavBar";
import Logo from "../components/Logo";
import RecentlyPlayed from "../components/RecentlyPlayed";
import { GridRegisterLogin } from "../ui/Gridstyle";
import { ProfileImage } from "../ui/ProfileImage.style";
import { WelcomeCard, WelcomeTitle } from "../ui/WelcomeCard.styles";
// import { HomeItems } from "./HomeItems";

export const HomePage = () => {
  return (
    <>
      <GridRegisterLogin>
        <Logo />
        <WelcomeCard>
          <WelcomeTitle>¡Bienvenido User!</WelcomeTitle>
          <ProfileImage src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
        </WelcomeCard>

        <RecentlyPlayed></RecentlyPlayed>
      </GridRegisterLogin>
    </>
  );
};
