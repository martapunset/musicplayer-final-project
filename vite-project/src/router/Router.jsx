import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/pages";
import { ProfilePage, WishPage, SearchPage, HomePage } from "../pages";
import { EditProfile } from "../components";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/profile/:editId" element={<EditProfile />} />

          <Route path="/wish" element={<WishPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
