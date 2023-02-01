import { Outlet } from "react-router-dom";
import { HomeNavBar } from "../components/HomeNavBar";
import {
  Sidebar,
  Container,
  Main,
  Header,
  Footer,
  GlobalGridStyles,
} from "../ui";
import LogoHarmony from "../assets/img/logoHarmony.png";
import { WelcomeCard, WelcomeTitle } from "../ui/WelcomeCard.styles";
import { ProfileImage } from "../ui";
import { AuthContext } from "../auth/authContext/AuthContext";
import { useContext } from "react";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { MusicContext } from "../musicProvider/MusicProvider";

export const Layout = () => {
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  const { Player } = useContext(MusicContext);
  const items = [
    {
      slug: "/profile",
      anchor: "Profile",
    },
  ];

  return (
    <>
      <GlobalGridStyles />
      <Container className="container">
        <Header className="header">
          <Dropdown
            dropdownTitle={<ProfileImage src={user?.picture} />}
            items={items}
          />
          <WelcomeCard>
            <WelcomeTitle> {user?.firstName}</WelcomeTitle>
          </WelcomeCard>

          <div className="logoResp">
            <img src={LogoHarmony} alt="" width={"50px"} />
          </div>
        </Header>

        <Main className="main">
          <Outlet className="main" />
        </Main>
        <Footer className="footer">
          <Player></Player>
        </Footer>
        <Sidebar>
          {" "}
          <HomeNavBar className="sidebar" />
        </Sidebar>
      </Container>
    </>
  );
};
