import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "../components/NavBar";

import Blog from "../pages/Blog";

import Nosotros from "../pages/Nosotros";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}>
        <Route path="/blog" element={<Blog />} />  
        <Route path="/nosotros" element={<Nosotros />} />  
        </Route>
      </Routes>  
    </BrowserRouter>
  );
};

export default Router;
