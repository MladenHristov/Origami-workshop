import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Publications from "./pages/publication";
import ShareThoughts from "./pages/share-thoughts";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Publications />} />
        <Route path="/share" element={<ShareThoughts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
