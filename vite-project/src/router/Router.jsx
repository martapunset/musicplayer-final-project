import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, RegisterPage, AuthHomePage } from "../auth/pages/index.js";
const Router = () => {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<AuthHomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
     
    </>
  );
};

export default Router;
