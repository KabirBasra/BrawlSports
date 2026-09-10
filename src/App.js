// Importing libraries
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';

// Pages
import Home from "./pages/Home";
import Fantasy from "./pages/Fantasy";
import Update from "./pages/Update";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

// Navigating webpages
const Navigation = () => {
  const { user } = useAuth(); // Automatically tracks if user is logged in

  return (
    <nav>
      <div className="nav-brand brand-title">
        <h1 className='title3'>BSN</h1>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/fantasy">Fantasy</NavLink>
      </div>
      <div className="nav-auth">
        <Link 
          to={user ? "/profile" : "/login"} 
          id="auth-btn" 
          className="auth-button"
        >
          {user ? "Profile" : "Login"}
        </Link>
      </div>
    </nav>
  );
};


// Main App
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />

        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/fantasy' element={<Fantasy />} />
            <Route path="/:id" element={<Update />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>BrawlSports.gg</h3>
              <p>Bringing analytics and fun to esports.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <Link to="/about">About Us</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 BSN</p>
          </div>
        </footer>
      </BrowserRouter>
    </AuthProvider>
  );
}