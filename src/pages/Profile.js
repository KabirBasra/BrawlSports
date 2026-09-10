// User's profile page
// 		-> Contains logout componenet
// 		-> Must make reusable compoenent!

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../config/supabaseClient';



const Profile = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();

// Logout Session
  const handleLogout = async (e) => {
    e.preventDefault();
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="page update">
      <h1 className="main-title">
        <span className="title2">{profile?.username || user?.email || 'User'}</span>
        <span className="title1"> Profile</span>
      </h1>
      <br />

      {/* User Details */}
      <div className="profile-details">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Region:</strong> {profile?.region || 'Not set'}</p>
        <p><strong>Team:</strong> {profile?.team || 'No team'}</p>
      </div>

      {/* Logout */}
      <div className='home-signup-container submit-btn animate-fade-in delay-4'>
        <button type="button" className="signup-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;