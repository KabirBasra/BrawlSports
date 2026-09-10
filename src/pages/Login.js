// Login page for exisitng users

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

const Login = () => {
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Status State
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    // Authenticating user with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password,
    });

    // Error meassges
    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }
    
    // When logged in
    if (data?.user) {
      setLoading(false);
      // Redirect to homepage or user dashboard
      navigate('/'); 
    }
  };

  return (
    <div className="page login-page animate-fade-in delay-1">
        <form className="login-container" onSubmit={handleLogin}>
          {/* Login Text */}
          <div className='animate-fade-in delay-1'>
            <h2 className="title1">Login</h2>
            <p>Enter your account details...</p>
          </div>

          {/* Display Error Messages */}
          {errorMessage && (
            <div style={{ color: '#ff4d4d', fontSize: '0.9rem', marginTop: '10px' }}>
              {errorMessage}
            </div>
          )}

          {/* Email */}
          <div className='input-field-container animate-fade-in delay-2'>
            <span className="input-subtext">Email</span>
            <input 
              type="email" 
              id="email" 
              className="input-text" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className='input-field-container animate-fade-in delay-2'>
            <span className="input-subtext">Password</span>
            <input 
              type="password" 
              id="password" 
              className="input-text" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div className='home-signup-container submit-btn animate-fade-in delay-3'>
            <button type="submit" className='signup-btn' disabled={loading}>
              {loading ? 'Logging in...' : 'Submit'}
            </button>
          </div>

          {/* Or Register */}
          <div className='input-subtext animate-fade-in delay-4'>
            <span>New user? Then </span>
            <Link to="/register" className="inline-link">
              <span>sign up...</span>
            </Link>
          </div>
        </form>
    </div>
  );
};

export default Login;