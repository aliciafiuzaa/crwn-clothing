import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import './App.css';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
