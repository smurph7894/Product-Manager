import React from 'react';
import HomePage from './pages/HomePage';
import OneProduct from './pages/OneProduct';
import EditProduct from './pages/EditProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/"/>
          <Route element={<OneProduct />} path="/product/:id" />
          <Route element={<EditProduct />} path="/product/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

