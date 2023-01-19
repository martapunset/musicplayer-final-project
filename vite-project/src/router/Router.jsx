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
import PrivateRoutes from "./PrivateRoutes.jsx";

const Router = () => {
  const { isAuthenticated } = useAuth0();
  console.log("islogged?: ",isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>

          <Route index path="/auth" element={<AuthHomePage />} />
        
   
              <Route path="/" element={<PrivateRoutes><Layout /></PrivateRoutes>}>

                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<PrivateRoutes><ProfilePage /></PrivateRoutes>} />
                <Route path="/editProfile" element={<PrivateRoutes><EditProfilePage /></PrivateRoutes>} />
                {/* <Route path="/profile/:editId" element={<EditProfile />} /> */}

                <Route path="/search" element={<PrivateRoutes><SearchPage /></PrivateRoutes>} />
                <Route path="/wish" element={<PrivateRoutes><WishPage /></PrivateRoutes>} />
                <Route path="/liked" element={<PrivateRoutes><LikedPlayList /></PrivateRoutes>} />
            </Route>
       
             
                  
            


          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
