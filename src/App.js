import React, { useState, useEffect } from 'react';
import './App.css';
import LinkButton from './LinkButton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
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
      <header className="header">
        <div className="header-content">
          <h1>Vinsmoke</h1>
          <p>Welcome to my space! 🚀</p>
          <p>
            <strong>🌟 Chkon ana ahbibi chkon, is Vinsmoke Jooonceena 🔥</strong>
          </p>
        </div>
        <div className="logo"></div>
      </header>

      <div className="links-container">
        <LinkButton 
          url="https://www.instagram.com/vins.moke921?igsh=MXVsc2R2bXAyMmhxeg%3D%3D&utm_source=qr" 
          text="Follow on Instagram" 
          icon="instagram" 
        />
        <LinkButton 
          url="https://kick.com/vinsmoke-ff" 
          text="Watch Kick Live Stream" 
          icon="kick" 
        />
        <LinkButton 
          url="https://chat.whatsapp.com/I0x3eaXFeFg9J2V1UNDrAW" 
          text="Join WhatsApp Group" 
          icon="whatsapp" 
        />
        <LinkButton 
          url="https://www.tiktok.com/search?q=vinsmoke&t=1739252858280" 
          text="Follow on TikTok" 
          icon="tiktok" 
        />
        <LinkButton url="https://discord.gg/vru4k95Swa" text="Join My Discord" icon="discord" />
        <LinkButton url="#" text="Subscribe on YouTube" icon="youtube" />
        <LinkButton url="#" text="Follow on Facebook" icon="facebook" />
      </div>

      <section className="events">
        <h2 className="no-shadow">Upcoming Events</h2>
        <p className="no-shadow">لا توجد أحداث قادمة في الوقت الحالي. يرجى التحقق لاحقاً!</p>
      </section>

      <footer className="footer">
        <div className="footer-right">
          <p className="no-shadow"><strong>Vinsmoke 2025 🌟</strong></p>
          <p className="no-shadow">Please enable JavaScript for the best experience.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;