import React from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { AuthGridStyles, GridRegisterLogin } from "../../ui";
import {
  Form,
  InputSmall,
  Button,
  ContainerLogin,
  Header,
  Widget,
  Textsmall,
  IconBack,
  Column,
  Footer,
  FooterIcon,
  Spam,
  H1,
  P,
} from "../../ui";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import facebook from "../../assets/img/face.png";
import icono from "../../assets/img/icono.png";
export const RegisterPage = () => {
  return (
    <>
      <AuthGridStyles />
      <ContainerLogin className="containerLogin">
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
            <H1>Register</H1>
            <P>
              If you need any support <Link to="/support">Click here</Link>
            </P>
            <RegisterForm />
          </Column>
        </Widget>
        <Footer className="footer">
          <Column>
            <div>
              <h6>
                <Textsmall>
                  Do you have an account?
                  <Link to="/login"></Link>
                  <Spam> &nbsp; Sign in</Spam>
                </Textsmall>
              </h6>
            </div>
          </Column>
        </Footer>
      </ContainerLogin>
    </>
  );
};
