import React, { useState, useEffect } from 'react';
import './App.css';
import LinkButton from './LinkButton';
import riverVideo from './img/river.mp4';
import desertVideo from './img/desert.mp4';
import riverIcon from './img/river-icon.png';
import desertIcon from './img/desert-icon.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setShowVideo(true);
  };

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
      {showVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-button" onClick={() => {
              setShowVideo(false);
              setSelectedVideo(null);
            }}>×</button>
            <video 
              controls 
              autoPlay 
              preload="auto"
              key={selectedVideo}
              onEnded={() => {
                setShowVideo(false);
                setSelectedVideo(null);
              }}
            >
              <source src={selectedVideo === 'river' ? riverVideo : desertVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <header className="header">
        <div className="header-content">
          <h1 className="main-title">Vinsmoke</h1>
          <p className="welcome-text">Welcome to my space! 🚀</p>
          <p className="arabic-motto">...شكون انا احبيبي شكون إز فنسموك جوووون سينا ...</p>
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
          url="https://kick.com/vinsmoke921" 
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
        <LinkButton 
          url="https://discord.gg/tuxpwdCEZQ" 
          text="Join My Discord" 
          icon="discord" 
        />
        
        <LinkButton 
          url="#" 
          text="أجي نديك لواد"
          iconSrc={riverIcon}
          onClick={() => handleVideoClick('river')}
        />
        <LinkButton 
          url="#" 
          text="أجي تبعني لصحرا"
          iconSrc={desertIcon}
          onClick={() => handleVideoClick('desert')}
        />
      </div>

      <section className="events">
        <h2>Upcoming Events</h2>
        <p>لا توجد أحداث قادمة في الوقت الحالي. يرجى التحقق لاحقاً!</p>
      </section>

      <footer className="footer">
        <div className="footer-right">
          <p><strong>Vinsmoke 2025 🌟</strong></p>
          <p>Please enable JavaScript for the best experience.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;