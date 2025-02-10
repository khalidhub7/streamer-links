import React, { useState, useEffect } from 'react';
import './App.css';
import LinkButton from './LinkButton';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loading
    return () => clearTimeout(timer);
  }, []);

  // Set theme and save to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  // Fetch and update visitor count
  useEffect(() => {
    const count = localStorage.getItem('visitorCount') || 0;
    const newCount = parseInt(count) + 1;
    localStorage.setItem('visitorCount', newCount);
    setVisitorCount(newCount);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-text">
          <span role="img" aria-label="loading">⏳</span> Loading...
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
      <header className="header">
        <div className="header-content">
          <h1>Vinsmoke</h1>
          <p>Welcome to my space! 🚀</p>
          <p><strong>🌟 Chkon ana ahbibi chkon, is Vinsmoke Jooonceena 🔥</strong></p>
        </div>
        <div className="logo"></div>
      </header>
      <div className="links-container">
        <LinkButton url="#" text="Join My Discord" icon="discord" />
        <LinkButton url="#" text="Follow on Instagram" icon="instagram" />
        <LinkButton url="#" text="Watch on Twitch" icon="twitch" />
        <LinkButton url="#" text="Subscribe on YouTube" icon="youtube" />
        <LinkButton url="#" text="Follow on Twitter" icon="twitter" />
        <LinkButton url="#" text="Follow on Facebook" icon="facebook" />
        <LinkButton url="#" text="Follow on TikTok" icon="tiktok" />
      </div>
      
      <section className="events">
        <h2 style={{ color: 'black', textShadow: 'none' }}>Upcoming Events</h2>
        <div className="event-card">
          <h3 style={{ color: 'black', textShadow: 'none' }}>Special Event</h3>
          <p style={{ color: 'black', textShadow: 'none', textAlign: 'center' }}>"🔥 drari dkhlo lhad lien fteh kont bgmail wla bnmra wkhrj 🔥"</p>
          <LinkButton url="https://www.tiktok.com/link/v2?aid=1988&lang=en&scene=bio_url&target=https%3A%2F%2Fapp.adjust.com%2F1lauxmwf" text="Join the Event" icon="tiktok" />
        </div>
      </section>
      
      <footer className="footer">
        <p style={{ color: 'black', textShadow: 'none' }}><strong>Vinsmoke 2025 🌟</strong></p>
        <p style={{ color: 'black', textShadow: 'none' }}>Please enable JavaScript for the best experience.</p>
        <p style={{ color: 'black', textShadow: 'none' }}><strong>Visitors:</strong> {visitorCount}</p>
      </footer>
    </div>
  );
}

export default App;