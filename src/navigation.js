import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Publications from "./pages/publication";
import ShareThoughts from "./pages/share-thoughts";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import Profile from "./pages/profile";
import ErrorPage from "./pages/errorPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Publications />} />
        <Route path="/share" element={<ShareThoughts />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

