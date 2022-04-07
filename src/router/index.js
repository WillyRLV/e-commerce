import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "../components/NavBar";

//importanto home
import Home from "../pages/Home/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
