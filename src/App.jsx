import { useState } from 'react';
import NavbarBS from './components/navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() 
{
  return (
    <div>
      <NavbarBS />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </div>
  
  )
}

export default App;