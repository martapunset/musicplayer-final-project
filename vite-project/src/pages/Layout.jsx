import { Outlet } from "react-router-dom";
import AudioPlayer from "../components/Audio/AudioPlayer";
import { HomeNavBar } from "../components/HomeNavBar";
import { Sidebar, Container, Main, Header, Footer, GlobalGridStyles, Titleh2, LogoProfile } from "../ui";
import logoHarmony from "../assets/img/logoHarmony.png"

export const Layout = () => {

  return (
    <>
      <GlobalGridStyles />
      <Container className="container">
        <Header className="header">
          <Titleh2>MusicApp</Titleh2>
          <LogoProfile>
            <img src={logoHarmony} alt="Logo" />
          </LogoProfile>
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
