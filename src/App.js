import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import SignIn from './routes/sign-in/sign-in';
import Navigation from './routes/navigation/navigation';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
