import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthGridStyles } from "../../ui/authGridStyles";
import { AuthContext } from "../authContext/AuthContext";
import { ButtonShort, ContainerLogin, LinkStyled, P } from "../../ui";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Header,
  Widget,
  IconBack,
  Textsmall,
  Spam,
  Column,
  Footer,
  Main,
} from "../../ui";
import { LoginButton } from "../../components/Login/LoginButton";
import { LogoutButton } from "../../components/Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthHomePage = () => {
  const navigate=useNavigate()
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { isLogged } = authState;
  const { isAuthenticated } = useAuth0()


/*
  useEffect(() => {
    
    isAuthenticated ? navigate("/") : console.log("itsNOTlogged")
      , []
  });
*/
  return (

    
    <>
  
      
     { /*isLogged && <Navigate to="/home" replace={true} />*/}
      <AuthGridStyles />

      <ContainerLogin className="containerLogin">
        <Header className="header">
          <IconBack>back</IconBack> {/* LINK en back */}
        </Header>
        <Main className="main"></Main>
        <Widget className="widget-1">
          <Column>
           
            
              <LoginButton></LoginButton>
           
           <LogoutButton></LogoutButton>
          </Column>
        </Widget>
        <Widget className="widget-2"></Widget>
        <Footer className="footer">
          <Column></Column>
          <Textsmall>
            {" "}
            Not a member ? <Spam>Register now</Spam>
          </Textsmall>
        </Footer>{" "}
        {/* LINK */}
      </ContainerLogin>
    </>
  );
};
