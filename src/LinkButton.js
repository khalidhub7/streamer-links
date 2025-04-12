// LinkButton.js
import React, { useEffect, useRef } from 'react';
import './LinkButton.css';
import hoverSound from './img/hover-sound.wav';

const icons = {
  discord: 'fab fa-discord',
  instagram: 'fab fa-instagram',
  youtube: 'fab fa-youtube',
  facebook: 'fab fa-facebook',
  tiktok: 'fab fa-tiktok',
  kick: 'fas fa-play',
  whatsapp: 'fab fa-whatsapp',
};

const iconColors = {
  discord: '#7289da',
  instagram: '#E4405F',
  youtube: '#FF0000',
  facebook: '#1877F2',
  tiktok: '#69C9D0',
  kick: '#00FF00',
  whatsapp: '#25D366',
};

function LinkButton({ url, text, icon }) {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(hoverSound);
    const enableAudio = () => {
      audioRef.current.play().then(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        document.removeEventListener('click', enableAudio);
      }).catch(() => {});
    };
    document.addEventListener('click', enableAudio);
  }, []);

  const handleClick = (e) => {
    if (url === '#') {
      e.preventDefault();
      alert('⏳ mazal ma tht lien 🔗');
    }
  };

  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-button ${icon}`}
      onClick={handleClick}
      onMouseEnter={handleHover}
    >
      <i 
        className={`${icons[icon]} icon`} 
        style={{ color: iconColors[icon] }}
      ></i>
      <span className="link-text">{text}</span>
    </a>
  );
}

export default LinkButton;