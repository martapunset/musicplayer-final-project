import { HomeNavBar } from "../components/HomeNavBar";
import { ResponsiveStyles } from "../ui/homegrid/responsiveStyles";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import styled from "styled-components";
import spotify from "../assets/img/SpotifyVector.png";
import woman from "../assets/img/woman.png";

import {
  InputProfile,
  Input2Profile,
 
  IconFooter,
  LogoProfile,
  UserProfile,
  UserImg,
  BtnEdit,
  Texto,
} from "../ui/probando";
//import {Button} from '../ui/Buttons.style'
import { GlobalStyle } from "../ui/globalStyles";
import { Img, Img2 } from "../ui/Img";
import logo from "../assets/img/SpotifyVector.png";
import { IconBack } from "../ui/model";
import { MdArrowBackIos } from "react-icons/md";
import facebook from "../assets/img/face.png";
import { Button, LinkStyled } from "../ui";
import { Header, Column, Container, Sidebar, Main, Widget } from "../ui/model";
import { EditProfile } from "../components";

export const EditProfilePage = () => {

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
              
            </UserProfile>


            <EditProfile />


          </Column>
        </Widget>

      </Container>
    </>
  );
};

const imgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 45px;
  }
`;