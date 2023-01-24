// import { useAuth0 } from '@auth0/auth0-react'
// import H5AudioPlayer from "react-h5-audio-player";
import { Outlet } from "react-router-dom";
import AudioPlayer from "../components/Audio/AudioPlayer";
import { HomeNavBar } from "../components/HomeNavBar";
// import SideBarDesktop from "../components/SidebarDesktop/SideBarDesktop";
import { Sidebar, Container, Main, Header, Footer, GlobalGridStyles, Titleh2 } from "../ui";

export const Layout = () => {

  return (
    <>
      <GlobalGridStyles />
      <Container className="container">
        <Header className="header">
          <Titleh2>MusicApp</Titleh2>
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
