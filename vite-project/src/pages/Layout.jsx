/** App.js */

import H5AudioPlayer from "react-h5-audio-player";
import { Outlet, Link } from "react-router-dom";
import { AudioPlayerCool } from "../components/audioPlayer/AudioPlayer";
import { HomeNavBar } from "../components/HomeNavBar";
import { Container, Main, Header, Footer } from "../ui";

export const Layout = () => {
  return (
    <Container className="container">
      <Header>
        <h2>React Router v6 & Recoil Demo</h2>
      </Header>
      <Main className="main">
        

        <Outlet />
          </Main>
          <Footer>
              <AudioPlayerCool/>

          </Footer>
          <nav className="sidebar">
          <HomeNavBar />
        </nav>
      
    </Container>
  );
};
