import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, AuthHomePage } from "../auth/pages/index.js";
import {
  ProfilePage,
  SearchPage,
  LikedPlayList,
  HomePage,
  PlaylistPage,
} from "../pages";
import { EditProfile } from "../components";
import { AuthProvider } from "../auth/context/AuthProvider";
import { AuthRecoveryPage } from "../auth/pages/AuthRecoveryPage.jsx";
import Playlists from "../components/Playlists";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthHomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recovery" element={<AuthRecoveryPage />} />

            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/:editId" element={<EditProfile />} />

            <Route path="/search" element={<SearchPage />} />
            <Route path="/liked" element={<LikedPlayList />} />
            <Route path="/playlist" element={<PlaylistPage />} />
            <Route path="/playlistsss" element={<Playlists />} />
            <Route path="/playlistsss/:id" element={<Playlists />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
