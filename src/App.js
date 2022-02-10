import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './components/shop/shop'
import ErrorPage from './components/error-page/error-page';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
