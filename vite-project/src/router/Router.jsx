import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, AuthHomePage } from "../auth/pages/index.js";
import { ProfilePage, SearchPage, WishPage, HomePage } from "../pages";
import { EditProfile } from "../components";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthHomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          // Inside APP pages
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:editId" element={<EditProfile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/wish" element={<WishPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
