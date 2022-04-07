import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "../components/NavBar";
import Profile from "../pages/profile";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}/>
        <Route path="/perfil" element={<Profile/>}/>
        <Route path="/signUp" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
