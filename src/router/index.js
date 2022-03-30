import React from 'react';
import { Route , Routes, BrowserRouter } from 'react-router-dom';

import Blog from '../pages/Blog'
import Home from '../pages/Home';


const Router = () => {
    return (
     <BrowserRouter>
<Routes>
{/**aqui irán las rutas */}
<Route path='/' element={<Blog/>}/>

<Route path='/' element={<Home/>} />
</Routes>
     </BrowserRouter>
    )
};

export default Router;