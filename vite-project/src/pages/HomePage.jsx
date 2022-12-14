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
  const { login, authState } = useContext(AuthContext);
  const { isLogged, userProfile } = authState;
 // const { first_name } = userProfile;
  console.log(userProfile)
  return (
    <>
      <div className="home">
        <GridRegisterLogin>
          <Logo />
          <WelcomeCard>  
            <WelcomeTitle>{userProfile?.first_name}</WelcomeTitle>
            <ProfileImage src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
          </WelcomeCard>
          <RecentlyPlayed></RecentlyPlayed>
        </GridRegisterLogin>
      </div>

      <HomeNavBar />
    </>
  );
};
