// Registering New Users

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TeamSelect from '../components/TeamSelect';

import { supabase } from '../config/supabaseClient';



const Register = () => { 
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [region, setRegion] = useState('empty');
  const [selectedTeam, setSelectedTeam] = useState(null);
  
  // Status State
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Adding users to Supabase reg
  const handleRegister = async (e) => {
  e.preventDefault(); 
  console.log("Submit button clicked, starting registration...");
  setErrorMessage('');
  
  // Validating field entries
  if (password !== confirmPassword) {
    setErrorMessage('Passwords do not match.');
    return;
  }

  if (!username.trim()) {
    setErrorMessage('Please enter a display username.');
    return;
  }

  setLoading(true);

  // Signing up users to Supabase
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email.trim(),
      password: password,
      options: {
        data: {
          username: username.trim(),
          region: region,
          team: selectedTeam ? selectedTeam.name : null,
        },
      },
    });

// Error
  if (authError) {
  setErrorMessage(authError.message);
  setLoading(false);
  return;
}

// Validating new users (via email confirmation)
//    -> Need to test email verification!
  setLoading(false);
  alert('Verification email sent! Please check your inbox to complete registration.');
  navigate('/login');


  // Adding data to profiles table in Supabase
  if (authData?.user) {
    console.log("Inserting profile for UID:", authData.user.id);

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .insert([{
          id: authData.user.id,
          username: username.trim(),
          region: region,
          team: selectedTeam ? selectedTeam.name : null,
        },]);

      console.log("Profile insert response:", profileData, profileError);
      
      // Errors
      if (profileError) {
        if (profileError.code === '23505') {
          setErrorMessage('That username is already taken. Please choose another.');
        } else {
          setErrorMessage(profileError.message);
        }
        setLoading(false);
        return;
      }
    }

    // Compelted registration
    setLoading(false);
    alert('Registration successful!');
    navigate('/login');

  } catch (err) {
    console.error("Unexpected error during registration:", err);
    setErrorMessage("An unexpected error occurred.");
    setLoading(false);
  }
};




  return (
    <div className="page login-page animate-fade-in delay-1">
        <form className="login-container" onSubmit={handleRegister}>
          {/*Login Text*/}
          <div className='animate-fade-in delay-1'>
            <h2 className="title1">Register</h2>
            <p>Register your new account...</p>
          </div>

          {/* Display Error Messages */}
        {errorMessage && (
          <div style={{ color: '#ff4d4d', fontSize: '0.9rem', marginTop: '10px' }}>
            {errorMessage}
          </div>
        )}

          {/*Email*/}
          <div className='input-field-container animate-fade-in delay-2'>
            <span className="input-subtext">Email</span>
            <input type="email" className="input-text" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          {/*Password*/}
          <div className='input-field-container animate-fade-in delay-2'>
            <span className="input-subtext">Password</span>
            <input type="password" className="input-text" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          {/*Confrim Password*/}
          <div className='input-field-container animate-fade-in delay-2'>
            <span className="input-subtext">Confrim Password</span>
            <input type="password" className="input-text" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>



          {/*Line break*/}
          <div className='reg-break animate-fade-in delay-3'/>

          
          
          {/*Username*/}
          <div className='input-field-container animate-fade-in delay-3'>
            <span className="input-subtext">Username (Display name)</span>
            <input type="text" className="input-text" required value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>

          {/*Region*/}
          <div className='input-field-container animate-fade-in delay-3'>
            <span className="input-subtext">Region ℹ</span>
            <select name="region" className='input-text' required value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value='empty'>🌐 Prefer not to say</option>
              <option value='EMEA'>🇪🇺 EMEA</option>
              <option value='EA'>🇯🇵 East Asia</option>
              <option value='NA'>🇺🇸 North America</option>
              <option value='SA'>🇧🇷 South America</option>
              
            </select>
          </div>

          {/*Team Select*/}
          <TeamSelect selectedTeam={selectedTeam} onSelectTeam={setSelectedTeam} />



          {/*Submit*/}
          <div className='home-signup-container submit-btn animate-fade-in delay-4'>
            <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? 'Creating...' : 'Submit'}
          </button>
          </div>

          {/*Or Log in*/}
          <div className='input-subtext animate-fade-in delay-5'>
            <span>Existing account? Then </span>
            <Link to="/login" className="inline-link">
              <span>log in...</span>
            </Link>
          </div>
        </form>
        <span className='input-subtext info-footer'>ℹ
          Region entry field is used for seperate continental leaderboards in the fantasy game.
          You can change your profile data at any time in the your user profile. 
        </span>
    </div>
  )
}

export default Register