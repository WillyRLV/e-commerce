import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Tienda from "../pages/Tienda";
import Detail from "../pages/Detail";

import Navbar from "../components/NavBar";
import SignUp from "../pages/SignUp"

//importanto home
import Home from "../pages/Home/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/tienda/detalles/:id" element={<Detail/>}/>
        <Route path="/signup" element={<SignUp />}></Route>
        </Route>
        
       
       
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
