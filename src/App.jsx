import { useState } from 'react';
import NavbarBS from './components/navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/footer';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AuthProvider from './context/auth';
import Blogs from './pages/Blogs';
import ViewBlog from './pages/ViewBlog';
import ProtectedRoute from './pages/ProtectedRoute';
import Profile from './pages/user/Profile';
import ProfileSettings from './pages/ProfileSettings';
import ResetPassword from './pages/security/ResetPassword';
import ForgotPassword from './pages/security/ForgotPassword';


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

          {/* Protected Route */}
          <Route element={ <ProtectedRoute /> } >
            <Route path='/blogs' element={ <Blogs /> } />
            <Route path='/blogs/:id' element={ <ViewBlog /> } />
            <Route path='/user/profile' element={ <Profile /> } />
            <Route path='/user/settings' element={ <ProfileSettings /> } />
          </Route>

          <Route path='/login' element={ <Login /> } />
          <Route path='/security/ForgotPassword' element={ <ForgotPassword /> } />
          <Route path='/security/verifyResetLink/:code' element={ <ResetPassword /> } />
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