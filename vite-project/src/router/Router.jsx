import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, AuthHomePage } from "../auth/pages/index.js";
import {
  ProfilePage,
  SearchPage,
  WishPage,
  HomePage,
  LikedPlayList,
} from "../pages";

import { EditProfilePage } from "../pages/EditProfilePage.jsx";
import { AuthProvider } from "../auth/authContext/AuthProvider";

import { EditProfile } from "../components";
import { AuthRecoveryPage } from "../auth/pages/AuthRecoveryPage.jsx";

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
            <Route path="/editProfile" element={<EditProfilePage />} />
            {/* <Route path="/profile/:editId" element={<EditProfile />} /> */}

            <Route path="/search" element={<SearchPage />} />
            <Route path="/wish" element={<WishPage />} />
            <Route path="/liked" element={<LikedPlayList />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
