import { Outlet } from "react-router-dom";
import AudioPlayer from "../components/Audio/AudioPlayer";
import { HomeNavBar } from "../components/HomeNavBar";
import { Sidebar, Container, Main, Header, Footer, GlobalGridStyles, Titleh2, LogoProfile, FlexSpace} from "../ui";
import logoHarmony from "../assets/img/logoHarmony.png"
import { WelcomeCard, WelcomeTitle } from "../ui/WelcomeCard.styles"
import { Link } from "react-router-dom";
import {ProfileImage} from "../ui"
export const Layout = () => {

  return (
    <>
      <GlobalGridStyles />
      <Container className="container">
   
        <Header className="header">
        <FlexSpace>
          <LogoProfile>
            <img src={logoHarmony} alt="Logo" width={'70px'}/>
          </LogoProfile>
          
          <WelcomeCard>
            <WelcomeTitle>hola</WelcomeTitle>
            <Link to="/profile">
              {" "}
              <ProfileImage src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
            </Link>
          </WelcomeCard>
          </FlexSpace>
        </Header>
     

        <Main className="main">
          <Outlet className="main" />
        </Main>
        <Footer className="footer">

          <AudioPlayer />
        </Footer>
        <Sidebar>
          {" "}
          <HomeNavBar className="sidebar" />

        </Sidebar>
      </Container>
    </>
  );
};
