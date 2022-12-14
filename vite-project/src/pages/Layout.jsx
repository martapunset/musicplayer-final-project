/** App.js */

import H5AudioPlayer from "react-h5-audio-player";
import { Outlet, Link } from "react-router-dom";
import { AudioPlayerCool } from "../components/audioPlayer/AudioPlayer";
import { HomeNavBar } from "../components/HomeNavBar";
import {
  Sidebar,
  Container,
  Main,
  Header,
  Footer,
  GlobalGridStyles,
} from "../ui";

export const Layout = () => {
  return (
    <>
      <GlobalGridStyles />
      <Container className="container">
        <Header className="header">
          <h2>React Router v6 & Recoil Demo</h2>
        </Header>
        <Main className="main">
          <Outlet className="main" />
        </Main>
        <Footer className="footer">
          <AudioPlayerCool />
        </Footer>
        <Sidebar>
          {" "}
          <HomeNavBar className="sidebar" />
        </Sidebar>
      </Container>
    </>
  );
};