import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
}

export default App;
