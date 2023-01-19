import { useAuth0 } from "@auth0/auth0-react";
import {  Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage, AuthHomePage } from "../auth/pages/index.js";
import {
  ProfilePage,
  SearchPage,
  WishPage,
  HomePage,
  LikedPlayList,
} from "../pages";
import { useContext } from "react";
import { EditProfilePage } from "../pages/EditProfilePage.jsx";
import { AuthProvider } from "../auth/authContext/AuthProvider";
import { AuthContext } from "../auth/authContext/AuthContext.jsx";

import { EditProfile } from "../components";
import { AuthRecoveryPage } from "../auth/pages/AuthRecoveryPage.jsx";
import { Layout } from "../pages/Layout.jsx";
import { PrivateRoutes } from "./PrivateRoutes.jsx";
import RedirectPage from "../pages/RedirectPage.jsx";


const Router = () => {
  const { isAuthenticated } = useAuth0();
  console.log("islogged?Router: ", isAuthenticated);
  
 //const { authState } = useContext(AuthContext);
  //const { isLogged } = authState;

  return (
    <>
    
        <AuthProvider>
          <Routes>
            <Route index path="/auth" element={isAuthenticated? <Navigate to= "/"/> : <AuthHomePage />} />

            <Route element={<Layout />}>
              <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to= "/auth"/>} />
              <Route
              path="/profile"
                          element={ isAuthenticated ?  <ProfilePage />  : <Navigate to= "/auth"/>
               
                }
              />
              <Route
                path="/editProfile"
                element={
                
                    <EditProfilePage />
           
                }
              />
              {/* <Route path="/profile/:editId" element={<EditProfile />} /> */}

              <Route
                path="/search"
                element={
                 
                    <SearchPage />
             
                }
              />
              <Route path="/wish" element={<WishPage />} />
              <Route path="/liked" element={<LikedPlayList />} />
            </Route>
          </Routes>
        </AuthProvider>
      
    </>
  );
};

export default Router;
