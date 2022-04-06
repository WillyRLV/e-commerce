import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Tienda from "../pages/Tienda";
import Detail from "../pages/Detail";


import Navbar from "../components/NavBar/index.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}>
        </Route>

        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/tienda/detalles" element={<Detail/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
