import facebook from "../../assets/img/face.png";
import { Link } from "react-router-dom";
import {
  Input,
  Textsmall,
  Title,
  Main,
  Sidebar,
  Header,
  Button,
  Widget,
  Footer,
  Column,
  Spam,
  FooterIcon,
  IconBack,
  ContainerLogin,
  P,
} from "../../ui";
import { AuthGridStyles } from "../../ui/authGridStyles";
import { MdArrowBackIos } from "react-icons/md";

export const AuthRecoveryPage = () => {
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
            <Title>Recover your password</Title>
            <Textsmall>
              Introduce your Spotify username or your email address. We send you
              an email with your username and a link to recover your password.
            </Textsmall>

            <Input placeholder="Enter username or email" />
            <Button type="input">Send</Button>
            <Textsmall>
              If you still need help, don´t contact Spotify Support
            </Textsmall>
          </Column>
        </Widget>
        <Footer className="footer">
          <Column>
            <div>
              <P>or sign in with</P>
              <center>
                <FooterIcon>
                  <img src={facebook} alt="icon" width="30" height="40" />
                  <img src={facebook} alt="icon" width="30" height="40" />
                  <img src={facebook} alt="icon" width="30" height="40" />
                </FooterIcon>
              </center>
            </div>

            <div>
              <h6>
                <Textsmall>
                  Not a member?
                  <Link to="/register"></Link>
                  <Spam>&nbsp; Sign in</Spam>
                </Textsmall>
              </h6>
            </div>
          </Column>
        </Footer>
      </ContainerLogin>
    </>
  );
};
