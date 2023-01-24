import { HomeNavBar } from "../components/HomeNavBar";
import { AuthGridStyles } from "../ui/authGridStyles";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import {
  InputProfile,
  Input2Profile,
  IconFooter,
  LogoProfile,
  UserProfile,
  UserImg,
  BtnEdit,
  Texto,
} from "../ui";
//import {Button} from '../ui/Buttons.style'
import { GlobalGridStyles } from "../ui/globalGridStyles";
import { Img, Img2 } from "../ui/Img";
import logo from "../assets/img/SpotifyVector.png";
import logoHarmony from "../assets/img/logoHarmony.png";
import { IconBack } from "../ui/model";
import { MdArrowBackIos } from "react-icons/md";
import facebook from "../assets/img/face.png";
import { Button, LinkStyled } from "../ui";
import { Header, Column, Container, Sidebar, Main, Widget } from "../ui/model";
import { LogoutButton } from "../components/Login/LogoutButton";

export const ProfilePage = () => {
  // const { logout, authState } = useContext(AuthContext);
  // const { isLogged, user } = authState;
  const { login, authState } = useContext(AuthContext); //userDAta for profile
  const { isLogged, userData } = authState; //userDAta for profile
  console.log("userDAta for Toni", userData); //userDAta for profile

  return (
    <>
      <AuthGridStyles />
      <Container className="contenedor">
        <Header className="header">
          <Link to="/">
            <IconBack>
              <MdArrowBackIos />
            </IconBack>
          </Link>
          <center>
            <LogoProfile>
              <img src={logoHarmony} alt="Logo" />
            </LogoProfile>
          </center>
        </Header>

        <Widget className="widget-1">
          <Column>
            <UserProfile>
              <UserImg
                src={
                  userData.picture
                    ? userData.picture
                    : "https://githubcom/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
                }
              />
              <BtnEdit>
                <Link to="/editProfile">
                  {" "}
                  <Texto>Edit Profile</Texto>
                </Link>
              </BtnEdit>

              <InputProfile
                placeholder={userData?.firstName + " " + userData?.lastName}
              />
              <InputProfile placeholder={userData?.email} />
              <LogoutButton />
            </UserProfile>
          </Column>
        </Widget>
      </Container>
    </>
  );
};
