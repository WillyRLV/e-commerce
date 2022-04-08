import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

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
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
