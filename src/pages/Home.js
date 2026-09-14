// Main Home Page

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fantasyDraftImg from '../images/Fantasy_Draft_Examplev1.png';


// Countdown componenet to next BSC event
//    -> Need to add to reusable compoenents!
const CountdownTimer = () => {
  const targetDate = new Date('2026-10-17T06:00:00').getTime();
	/* WFs is: '2026-11-20T10:00:00' */

  const calculateTimeLeft = () => {
    // FIXED: Use .getTime() instead of .getDate()
    const timeNow = new Date().getTime();
    const difference = targetDate - timeNow;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isComplete: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isComplete) {
    return <div className="countdown-container">The event has started!</div>;
  }

  // FIXED: Added return statement for the countdown UI
  return (
    <div className="countdown-container">
      <div className="countdown-item"><span>{timeLeft.days}</span>d</div>
      <div className="countdown-item"><span>{timeLeft.hours}</span>h</div>
      <div className="countdown-item"><span>{timeLeft.minutes}</span>m</div>
      <div className="countdown-item"><span>{timeLeft.seconds}</span>s</div>
    </div>
  );
};

const Home = () => {
	
	const navigate = useNavigate();
	
  return (
    <div className="page-home ">
				<div className='left-column animate-fade-in delay-1'>
					<h2 className='sub-title'>Welcome to...</h2>
					<h1 className='main-title' >
						<span className='title2 animate-fade-in delay-1'>Brawl</span>
						<span className='title1 animate-fade-in delay-3'>Sports</span>
            <span className='animate-fade-in delay-5'>.gg</span>
						<span className='animate-fade-in delay-6'> Network</span>
					</h1>
					<p className='description animate-fade-in delay-2'>Your Brawl Stars Esports fanhub, packed with analytical reviews, news summaries and
						competitive gamemodes where you fight for seasonal rewards, incluidng cash prizes.
					</p>
					<p className='description animate-fade-in delay-3'>
						<strong>Sign up today to start managing your dream team...</strong>
					</p>
					<div className='home-signup-container animate-fade-in delay-3'>
						<Link to="/login" className="inline-link">
							<span>Log in</span>
						</Link>
						<p className='small-print'> or</p>
						<button className='signup-btn' onClick={() => navigate('/register')} >Sign Up</button>
					</div>
				</div>
				<div className='right-column animate-fade-in delay-1'> 
					
					<img src={fantasyDraftImg} alt="Fantasy Draft Example" className='fantasy-example'/>

					<div className='event-container animate-fade-in delay-2'>
						<div className='event-countdown-widget'>
							<span className='small-print event-countdown-text'>Next event in...</span>
							<span><CountdownTimer/></span>
						</div>
						<span><img 
							src="https://img.navi.gg/tournaments/2025/10/tournaments-818/logo/58141/Logo.png" 
							alt="Brawl Stars Championship LCQ"
							className='event-img'/>
						</span>
					</div>
				</div>
			</div>
  )
}

export default Home