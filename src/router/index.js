import React from 'react';
import { Route , Routes, BrowserRouter } from 'react-router-dom';
import Blog from '../pages/Blog'

const Router = () => {
    return (
     <BrowserRouter>
<Routes>
{/**aqui irán las rutas */}

<Route path='/' element={<Blog/>}/>
</Routes>
     </BrowserRouter>
    )
};

export default Router;