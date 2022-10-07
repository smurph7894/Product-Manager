import React from 'react';
import HomePage from './pages/HomePage';
import OneProduct from './pages/OneProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/"/>
          <Route element={<OneProduct />} path="/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
