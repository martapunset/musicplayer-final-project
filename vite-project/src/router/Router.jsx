import { useAuth0 } from "@auth0/auth0-react";
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
import { Layout } from "../pages/Layout.jsx";

const Router = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          
              <Route element={<Layout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/editProfile" element={<EditProfilePage />} />
                {/* <Route path="/profile/:editId" element={<EditProfile />} /> */}

                <Route path="/search" element={<SearchPage />} />
                <Route path="/wish" element={<WishPage />} />
                <Route path="/liked" element={<LikedPlayList />} />
              </Route>
           
              <Route path="/" element={<AuthHomePage />} />
            
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
