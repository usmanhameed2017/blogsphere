import { useState } from 'react';
import NavbarBS from './components/navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/footer';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AuthProvider from './context/auth';


function App() 
{
  return (
    <div>
      <AuthProvider>
        <NavbarBS />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
          
        {/* Closing Section */}
          <section className="end-section mb-5">
            <h2>Join Us on This Journey</h2>
            <p>
              Let's build something extraordinary together. Stay connected, share your voice, and let's shape the future of meaningful content!
            </p>
          </section>
        <Footer />
      </AuthProvider>
    </div>
  
  )
}

export default App;