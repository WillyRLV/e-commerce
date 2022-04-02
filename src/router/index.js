import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "../components/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}>
            
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
