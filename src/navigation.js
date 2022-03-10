import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Publications from "./pages/publication";
import ShareThoughts from "./pages/share-thoughts";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Publications />} />
        <Route path="/share" element={<ShareThoughts />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
