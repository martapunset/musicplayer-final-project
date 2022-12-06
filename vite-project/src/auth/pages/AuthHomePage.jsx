<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
=======
import { Link } from "react-router-dom"
import fondo from '../../assets/img/ejemplo1.jpg'
import cara from '../../assets/img/ejemplo2.jpg'
import { Button, Column, Container, Header, Sidebar, Widget } from "../../ui"
import { ResponsiveStyles } from "../../ui/homegrid/responsiveStyles"
>>>>>>> ca2ba10824259d84f46e442ea3e33b40311d0991

import { GlobalStyle, LinkStyled } from "../../ui";
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
          <img src={fondo} alt="icon" width="100%" height="300px" />
        </Header>

        <Widget className="widget-1">
          <Column>
            <Link to="/login"><Button>Sign in</Button></Link>
            <Link to="/register"><Button>Register</Button></Link>
          </Column>
        </Widget>

        <Sidebar className="aside">
          <img src={cara} alt="icon" width="200" />
        </Sidebar>

      </Container>
    </>
  )
}
