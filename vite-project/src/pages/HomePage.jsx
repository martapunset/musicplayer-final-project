import React, { useEffect, useState } from "react";
import { getAlbums } from "../api/getAlbums";
import { HomeNavBar } from "../components/HomeNavBar";
import Logo from "../components/Logo";
import Slider from "../components/Slider/Slider";
import { ProfileImage } from "../ui/ProfileImage.style";
import { WelcomeCard, WelcomeTitle } from "../ui/WelcomeCard.styles";

export const HomePage = () => {
  return (
    <>
      <Logo />
      <WelcomeCard>
        <WelcomeTitle>¡Bienvenido User!</WelcomeTitle>
        <ProfileImage src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
      </WelcomeCard>
      <Slider title="Recently Played" />
      <Slider title="Followed Playlists" />
      <Slider title="Popular Artists" />
      <HomeNavBar />
    </>
  );
};
