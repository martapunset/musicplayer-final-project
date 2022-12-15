import { HomeNavBar } from "../components/HomeNavBar";
import { ResponsiveStyles } from "../ui/homegrid/responsiveStyles";
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
import { GlobalStyle } from "../ui/globalStyles";
import { Img, Img2 } from "../ui/Img";
import logo from "../assets/img/SpotifyVector.png";
import { IconBack } from "../ui/model";
import { MdArrowBackIos } from "react-icons/md";
import facebook from "../assets/img/face.png";
import { Button, LinkStyled } from "../ui";
import { Header, Column, Container, Sidebar, Main, Widget } from "../ui/model";

export const ProfilePage = () => {
  const { logout, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  return (
    <>
      <ResponsiveStyles />
      <Container className="contenedor">
        <Header className="header">
          <Link to="/">
            <IconBack>
              <MdArrowBackIos />
            </IconBack>
          </Link>
          <center>
          <LogoProfile>
              <img src={logo} alt="Logo" />
            </LogoProfile>
          </center>
        </Header>

        <Widget className="widget-1">
          <Column>
            <UserProfile>
              <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
              <BtnEdit>
               <Link to= "/editProfile"> <Texto>Edit Profile</Texto></Link>
              </BtnEdit>
            </UserProfile>

            

            <InputProfile placeholder={user.email} />
            <InputProfile placeholder={user.name} />

            <Button onClick={logout}>Logout</Button>
          </Column>
        </Widget>

       
      </Container>
      <HomeNavBar />
    </>
  );
};
