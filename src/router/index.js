import React from 'react';
import { Route , Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../layout/NavBar';
import Product from '../pages/Product';
import Blog from '../pages/Blog';

const Router = () => {
    return (
     <BrowserRouter>
<Routes>
    <Route  element={<Navbar/>}>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Product/>} />
    <Route path='/blog' element={<Blog/>} />
    </Route>
</Routes>
     </BrowserRouter>
    )
};

export default Router;