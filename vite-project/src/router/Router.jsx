import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, AuthHomePage } from "../auth/pages/index.js";
const Router = () => {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<AuthHomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
     
    </>
  );
};

export default Router;
