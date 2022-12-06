import { HomeNavBar } from "../components/HomeNavBar";

import { GlobalStyle } from "../styles/globalStyles";
import {
  Header,
  Footer,
  Container,
  Sidebar,
  Main,
  Widget,
} from "../styles/model";

export const SearchPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container className="contenedor">
        <Header className="header">
          <h1>Search Page</h1>
        </Header>

        <Main className="contenido">
          <h2>test</h2>
          <p>lorem</p>
        </Main>

        <Sidebar className="sedebar">Sidebar</Sidebar>

        <Widget className="widget-1">widget-1</Widget>
        <Widget className="widget-2">widget-2</Widget>

        <Footer className="footer">
          <HomeNavBar />
        </Footer>
      </Container>
    </>
  );
};
