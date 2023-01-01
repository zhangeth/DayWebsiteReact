import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Art from './art';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path='/' element={<Home/>} />
        <Route path='/art' element={<Art/>} />
    </Routes>
  );
}

export default Main;