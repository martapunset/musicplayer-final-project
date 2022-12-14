import { HomeNavBar } from "../components/HomeNavBar";


import React from 'react'
import {InputProfile, Input2Profile, Footer, IconFooter, LogoProfile, UserProfile,UserImg, BtnEdit, Texto} from '../ui/probando';
import {Button, } from '../ui/Buttons.style'
import {GlobalStyle } from '../ui/globalStyles'
import {Img, Img2} from '../ui/Img'
import logo from "../assets/img/SpotifyVector.png";



import {
  Header,

  Container,
  Sidebar,
  Main,
  Widget,
} from "../ui/model";

export const ProfilePage = () => {
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
            <img src={facebook} alt="icon" width="30" />
          </center>
        </Header>

        <Widget className="widget-1">
                    <Column>
                    <UserProfile>
          <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
        <BtnEdit><Texto>Edit Profile</Texto></BtnEdit>
      </UserProfile>
      
        <LogoProfile><img src={logo} alt="Logo" /></LogoProfile>
       
        <InputProfile placeholder='user@mail.com'/>
        <Input2Profile placeholder='Username'/>
      
        <Button>Logout</Button>  
                    </Column>
                </Widget>

       
           

     

        
        <HomeNavBar/>
        </ Container >
      
      </>
      
      )
  }

      


  

      


