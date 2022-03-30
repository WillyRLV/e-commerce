import React from 'react';
import { Route , Routes, BrowserRouter } from 'react-router-dom';
import Product from '../pages/Product';

const Router = () => {
    return (
     <BrowserRouter>
<Routes>
{/**aqui irán las rutas */}
<Route path='/' element={<Product/>}/>
</Routes>
     </BrowserRouter>
    )
};

export default Router;