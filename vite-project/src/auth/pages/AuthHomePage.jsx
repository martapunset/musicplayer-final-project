import React from "react";
import { Link } from "react-router-dom";

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
      <GlobalStyle />

      {/* 
            <Container className="contenedor" style={{ 
      backgroundImage: `url("homeBackground.jpeg") `
    }}> */}
      <Container>
        <Header className="header"></Header>
        <Main className="contenido">
          <Column>
            <Button><Link to="/login">Login</Link></Button>

            <LinkStyled to="/register">Register</LinkStyled>
          </Column>
        </Main>
        <Widget className="widget-1"></Widget>
        <Widget className="widget-2"></Widget>
        <Footer className="footer">
          <Column></Column>
          <Textsmall>
            {" "}
            Not a member ? <Spam>Register now</Spam>
          </Textsmall>
        </Footer>{" "}
        {/* LINK */}
      </Container>
    </>
  );
};
