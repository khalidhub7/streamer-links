import React, { useState, useEffect } from 'react';
import './App.css';
import LinkButton from './LinkButton';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
        }
        return prevProgress + 10;
      });
    }, 300);
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
          <span role="img" aria-label="loading">⏳</span> {loadingProgress}% Loading...
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
          <p>"🌟 Chkon ana ahbibi chkon, is Vinsmoke Jooonceena 🔥"</p>
        </div>
        <div className="logo"></div>
      </header>
      <div className="links-container">
        <LinkButton url="https://discord.gg/yourlink" text="Join My Discord" icon="discord" />
        <LinkButton url="https://instagram.com/yourlink" text="Follow on Instagram" icon="instagram" />
        <LinkButton url="https://twitch.tv/yourlink" text="Watch on Twitch" icon="twitch" />
        <LinkButton url="https://youtube.com/yourlink" text="Subscribe on YouTube" icon="youtube" />
        <LinkButton url="https://twitter.com/yourlink" text="Follow on Twitter" icon="twitter" />
        <LinkButton url="https://facebook.com/yourlink" text="Follow on Facebook" icon="facebook" />
        <LinkButton url="https://tiktok.com/yourlink" text="Follow on TikTok" icon="tiktok" />
      </div>
      <footer className="footer">
        <p>Vinsmoke 2025 🌟</p>
        <p>Please enable JavaScript for the best experience.</p>
        <p>Visitors: {visitorCount}</p>
      </footer>
    </div>
  );
}

export default App;