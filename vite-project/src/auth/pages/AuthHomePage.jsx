import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthGridStyles } from "../../ui/";
import { AuthContext } from "../authContext/AuthContext";
import { ContainerLogin, P } from "../../ui";
import { LogoProfile } from '../../ui';
import logoHarmony from "../../assets/img/logoHarmony.png"
import { Column, Main } from "../../ui";
import { LoginButton } from "../../components/Login/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthHomePage = () => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { isLogged } = authState;
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <AuthGridStyles />
      <ContainerLogin className="containerLogin">
        <Column>
          <Main className="main">
          <center>
          <LogoProfile>
            <img src={logoHarmony} alt="Logo" width={'80px'} />
          </LogoProfile>
          </center>
            <LoginButton></LoginButton>
          </Main>
        </Column>
      </ContainerLogin>
    </>
  );
};
