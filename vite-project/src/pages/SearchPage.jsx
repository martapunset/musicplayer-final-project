import { HomeNavBar } from "../components/HomeNavBar";
import { ResponsiveStyles } from "../ui/homegrid/ResponsiveStyles";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { Header, Footer, Container, Sidebar, Main, Widget } from "../ui/model";
import "./css/tem.css";
export const SearchPage = () => {
  return (
    <>
      <ResponsiveStyles />
      <Container className="contenedor">
        <div className="containerSearch">
          <h1>Search Page</h1>
          <div className="searchInputBox">
            <button className="icons">
              <BsSearch />
            </button>
            <input type="text" placeholder="Search for songs and playlists" />
            <button className="icons">
              <MdClear />
            </button>
          </div>
        </div>
        <div className="resultSearch">
          <div className="songs_container">{}</div>
        </div>

        <Footer className="footer">
          <HomeNavBar />
        </Footer>
      </Container>
    </>
  );
};
