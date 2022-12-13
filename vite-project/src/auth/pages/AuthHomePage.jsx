import React from "react";
import { Link } from "react-router-dom";
import homeBackground from "../../assets/img/homeBackground.jpeg"

import fondo from '../../assets/img/ejemplo1.jpg'
import cara from '../../assets/img/ejemplo2.jpg'
//import { Button, Column, Container, Header, Sidebar, Widget } from "../../ui"
import { ResponsiveStyles } from "../../ui/homegrid/responsiveStyles"

import { ButtonShort, LinkStyled } from "../../ui";
import {
  Header,
  Sidebar,
  Container,
  Widget,
  IconBack,
  Title,
  Textsmall,
  Spam,
  Column,
  Input,
  Button,
  Footer,
  Main,
} from "../../ui";

export const AuthHomePage = () => {
  return (
    <>
      <ResponsiveStyles />
      


      <Container className="contenedor">

            <Header className="header">

                <IconBack>back</IconBack> {/* LINK en back */}
            </Header>

            <Main className="contenido">
                
            </Main>

           
            <Widget className="widget-1">
                <Column>
                <Link to="/login"><ButtonShort>Sign in</ButtonShort></Link>
            <Link to="/register"><ButtonShort>Register</ButtonShort></Link>
                </Column>
            </Widget>
            <Widget className="widget-2">
                
            </Widget>
            <Footer className="footer">
            <Column>
                    
                    
                </Column><Textsmall> Not a member ? <Spam >Register now</Spam></Textsmall></Footer> {/* LINK */}


            
        </Container>
    </>
  )
}
