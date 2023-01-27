import { Outlet } from "react-router-dom";
// import AudioPlayer from "../components/Audio/AudioPlayer";
import { HomeNavBar } from "../components/HomeNavBar";
import {
  Sidebar,
  Container,
  Main,
  Header,
  Footer,
  GlobalGridStyles,
} from "../ui";
// import harmonyGuitar from "../assets/img/harmonyGuitar.png"
// import logoHarmony from "../assets/img/logoHarmony.png";
import { WelcomeCard, WelcomeTitle } from "../ui/WelcomeCard.styles";
import { Link } from "react-router-dom";
import { ProfileImage } from "../ui";
import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext } from "react";
// import { margin } from "@mui/system";
import { AudioPlayerCool } from "../components/audioPlayer/AudioPlayerCool";
import { LogoutButton } from "../components/Login/LogoutButton";

export const Layout = () => {
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  return (
    <>
      <GlobalGridStyles />
      <Container className="container">
        <Header className="header">
          <WelcomeCard>
            <WelcomeTitle> {user?.firstName}</WelcomeTitle>
            <Link to="/profile">
              {" "}
              <ProfileImage src={user?.picture} />
            </Link>
          </WelcomeCard>
          <LogoutButton />
        </Header>

        <Main className="main">
          <Outlet className="main" />
        </Main>
        <Footer className="footer">
          <AudioPlayerCool></AudioPlayerCool>
        </Footer>
        <Sidebar>
          {" "}
          <HomeNavBar className="sidebar" />
        </Sidebar>
      </Container>
    </>
  );
};
